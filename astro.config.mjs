// @ts-check

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { parse } from 'smol-toml';

import tailwindcss from '@tailwindcss/vite';

import navfolioConfig from './navfolio.config';
import { getAstroPluginConfig } from './src/plugins/config';

/**
 * @param {unknown} value
 * @returns {value is Record<string, unknown>}
 */
const isRecord = (value) => typeof value === 'object' && value !== null && !Array.isArray(value);

const siteToml = parse(fs.readFileSync(new URL('./src/config/site.toml', import.meta.url), 'utf8'));
const configToml = isRecord(siteToml.config) ? siteToml.config : {};
const siteConfig = isRecord(configToml.site) ? configToml.site : {};
const mathConfig = isRecord(configToml.math) ? configToml.math : {};
const configuredSiteUrl = siteConfig.url;
const configuredMathRenderer = mathConfig.render;
const mathRenderer = configuredMathRenderer === 'mathjax' ? 'mathjax' : 'katex';
const astroPluginConfig = getAstroPluginConfig(navfolioConfig, { mathRenderer });
/**
 * @param {unknown} value
 */
const normalizeSiteUrl = (value) => {
  if (typeof value !== 'string') return undefined;

  const trimmed = value.trim();
  if (!trimmed) return undefined;

  return /^[a-z][a-z\d+.-]*:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
};

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const customSite = process.env.SITE_URL;
const customBase = process.env.SITE_BASE;
const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER;
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isProjectPage =
  Boolean(repositoryOwner) &&
  Boolean(repositoryName) &&
  repositoryName !== `${repositoryOwner}.github.io`;

const githubPagesSite =
  repositoryOwner && repositoryName
    ? `https://${repositoryOwner}.github.io${isProjectPage ? `/${repositoryName}` : ''}`
    : undefined;

const resolvedSite =
  normalizeSiteUrl(customSite) ||
  (isGitHubActions && githubPagesSite ? githubPagesSite : undefined) ||
  normalizeSiteUrl(configuredSiteUrl) ||
  'https://example.com';

const resolvedBase =
  customBase || (isGitHubActions && isProjectPage && repositoryName ? `/${repositoryName}` : '/');

const stripFrameworkGenerator = () => ({
  name: 'havemoon:strip-framework-generator',
  hooks: {
    'astro:build:done': ({ dir }) => {
      const outputDir = fileURLToPath(dir);
      const directories = [outputDir];

      while (directories.length > 0) {
        const currentDirectory = directories.pop();
        if (!currentDirectory) continue;

        for (const entry of fs.readdirSync(currentDirectory, { withFileTypes: true })) {
          const entryPath = path.join(currentDirectory, entry.name);

          if (entry.isDirectory()) {
            directories.push(entryPath);
            continue;
          }

          if (!entry.isFile() || !entry.name.endsWith('.html')) continue;

          const html = fs.readFileSync(entryPath, 'utf8');
          const brandedMeta = /<meta name="generator" content="Astro[^"]*"\s*\/?>/gi;
          const cleanedHtml = html.replace(brandedMeta, '');

          if (cleanedHtml !== html) fs.writeFileSync(entryPath, cleanedHtml, 'utf8');
        }
      }
    },
  },
});

// https://astro.build/config
export default defineConfig({
  site: resolvedSite,
  base: resolvedBase,
  devToolbar: {
    enabled: false,
  },
  build: {
    assets: '_assets',
  },
  markdown: {
    remarkPlugins: astroPluginConfig.remarkPlugins,
    rehypePlugins: astroPluginConfig.rehypePlugins,
  },
  integrations: [
    ...astroPluginConfig.integrations,
    mdx(),
    sitemap({
      filter: (page) => !new URL(page).pathname.startsWith('/tags/'),
    }),
    stripFrameworkGenerator(),
  ],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        'virtual:navfolio/page-runtime': fileURLToPath(
          new URL('./src/modules/page-runtime.ts', import.meta.url),
        ),
      },
    },
  },
});
