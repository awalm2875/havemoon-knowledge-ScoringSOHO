# Havemoon knowledge base restoration plan

Status: **Step Four / asset review and restoration brief awaiting approval**  
Implementation gate: no page, component, route, CSS, or client script may be edited until the asset review and restoration brief below are accepted.

## 1. Build baseline

- Existing framework: Astro Navfolio starter from the user-provided ZIP.
- Customization strategy: preserve the starter's content collections, search, blog system, Projects route, activity heatmap, responsive shell, Markdown/MDX pipeline, sitemap, and static output.
- Product change: replace the developer-portfolio semantics with an English China sourcing and manufacturing knowledge base plus a credible Havemoon brand profile.
- Primary audience: overseas buyers, importers, sourcing teams, small businesses, and operators researching Chinese manufacturing.
- Primary acquisition: original English search content and indexable client-side tools.
- Monetization goal: AdSense readiness after the site contains complete, reviewed, useful content. No visible empty ad placeholders will be added during the preview build.

## 2. Accepted product structure

### Global navigation

- Home
- Guides
- Resources
- Activity
- Tools
- About
- Search

### Knowledge categories

- Sourcing Basics
- Supplier Verification
- Quality Control
- Manufacturing
- Logistics & Incoterms
- Compliance
- Product Sourcing Guides

### Resource/Projects taxonomy

- Sourcing Guides
- Industry Reports
- Import Tools
- Supplier Resources

### Initial tool family

- China Landed Cost Calculator
- Supplier Evaluation Checklist
- Incoterms Responsibility Matrix
- MOQ & Unit Cost Calculator

The tools remain static-site compatible: explanatory content is server-rendered HTML; calculations and checklist state run locally in the browser.

## 3. Accepted reference set

| Reference                  | Local file                                          | Build responsibility                                                                                                                                                    |
| -------------------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GitHub Profile desktop     | `docs/references/github-profile-desktop.png`        | Desktop home shell: left identity/brand rail plus a dense, editable main column. Personal/avatar content is not copied.                                                 |
| GitHub README reading area | `docs/references/github-readme-article-desktop.png` | Markdown typography, flat borders, tables, code blocks, headings, and long-form content rhythm.                                                                         |
| Stripe Docs article        | `docs/references/stripe-docs-article-desktop.png`   | Search-first documentation navigation, category hierarchy, article/TOC geometry, and two-pane tool explanations. Stripe branding and marketing graphics are not copied. |
| GitHub Profile mobile      | `docs/references/github-profile-mobile.png`         | Compact dark header, single-column flow, horizontal subnavigation, and responsive stacking.                                                                             |
| Navfolio mobile layout     | `docs/references/navfolio-mobile-layout.png`        | Brand-first mobile ordering, social/contact row, navigation shortcuts, and publishing activity. Cat artwork, personal labels, and typewriter typography are not copied. |

## 4. Global visual and interaction lock

### Visual tokens

- Navigation: deep ink `#0D1117`.
- Page: white `#FFFFFF`.
- Muted surface: `#F6F8FA`.
- Primary text: `#1F2328`.
- Secondary text: `#57606A`.
- Border: `#D0D7DE`.
- Link/focus: `#0969DA`.
- Brand navy: `#151E84`, sampled from the user-provided square logo.
- Brand mark blue: `#4B6CA2`, sampled from the approved transparent blue mountain derivative.

### Typography

- UI, headings, and body: modern system sans stack; no monospaced body copy.
- Code/data only: system monospace.
- Desktop article body: approximately 17px with 1.7-1.8 line height and a 68-74 character measure.
- Cards and panels: flat 1px borders, no decorative shadows, and 0-6px radius only where controls need it.

### Responsive geometry

- Desktop shell: maximum width approximately 1280px.
- Global header: approximately 60-64px high.
- Home: brand rail approximately 260-288px plus a flexible content column.
- Article: left category navigation approximately 236px, reading column approximately 700-760px, right TOC approximately 200-224px.
- Mobile: one reading column, approximately 20px gutters, compact header, drawer navigation, and collapsible article TOC.

### Interaction assumptions

- Search continues to use the existing Pagefind flow.
- Category, resource, guide, social, and tool items are independently clickable and independently replaceable; therefore all are code-native.
- The brand rail is sticky on wide screens and becomes the first compact section on mobile.
- Publishing activity is derived from real content dates. No invented follower counts, client counts, revenue, success rates, or project metrics.
- Unverified contact destinations are hidden rather than filled with fake data.
- Dark mode may remain as an existing utility, but the approved default appearance is a light document surface with a dark navigation bar.

## 5. Page-by-page asset split

## Page 1 · Home / brand knowledge profile

Interaction assumption: the brand rail, social links, category links, featured guides, resource entries, tools, and activity records all remain editable and clickable.

Total image requirement: **one shared identity asset group** (source logo plus optimized derivative).

| ID                               | Region type  | Layer/type       | Status           | Content and boundary                                                                                                                            | Code overlay                           | Decision reason                                                                                  |
| -------------------------------- | ------------ | ---------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `havemoon-logo-source`           | identity     | source asset     | ready in project | User-provided 990x990 blue rounded-square logo, preserved unchanged as the source and favicon candidate.                                        | None                                   | Official user-provided identity; it must not be regenerated as a different logo.                 |
| `havemoon-mark-transparent-blue` | identity     | foreground asset | ready for review | The existing mountain silhouette recolored to a calm muted blue and tightly cropped with transparent background; no wordmark and no new symbol. | `Havemoon` wordmark remains live text. | The mark must work as a standalone identity asset without baking navigation or text into pixels. |
| Header and page surfaces         | content-card | code-native      | code-native      | Dark header, white/muted surfaces, borders, search field, menus.                                                                                | All text and controls.                 | Simple geometry and editable UI.                                                                 |
| Brand rail                       | content-card | code-native      | code-native      | Brand label, professional identity, concise sourcing focus, location/coverage wording, contact links.                                           | All copy and links.                    | Facts and destinations must remain editable and verifiable.                                      |
| Featured guides                  | content-card | code-native      | code-native      | One lead guide plus a flat list of supporting guides.                                                                                           | Titles, summaries, dates, categories.  | Independently updated SEO content.                                                               |
| Category entry grid              | content-card | code-native      | code-native      | Seven category entries with small standard icons and article counts derived from content.                                                       | All labels/counts.                     | Responsive and dynamic; no image cards.                                                          |
| Tools entry                      | content-card | code-native      | code-native      | Four tools in compact bordered rows.                                                                                                            | Tool names/descriptions/status.        | Independently interactive and replaceable.                                                       |
| Publishing activity              | content-card | code-native      | code-native      | Existing Navfolio heatmap/timeline restyled and fed by real article/resource dates.                                                             | Counts, dates, activity labels.        | Factual dynamic content cannot be baked into an image.                                           |

Code-native:

- Header, search, wordmark, navigation, theme utility, links, icons, borders, all text.
- Brand biography and credibility statements.
- Featured content, categories, resource rows, tool rows, timeline, and heatmap.
- GitHub-like labels and separators.

Replace-later / risk:

- Verified email address, business contact channel, and any external social profiles.
- Claims about supplier network size, years of experience, inspection volume, savings, or client results are blocked unless the user supplies evidence.

## Page 2 · Guides / blog knowledge index

Interaction assumption: category tabs, tags, search, pagination, and article rows are independently navigable and generated from Markdown/MDX content.

Total image requirement: **zero required image assets**.

| ID                         | Region type  | Layer/type       | Status                | Content and boundary                                                      | Code overlay       | Decision reason                                                                                    |
| -------------------------- | ------------ | ---------------- | --------------------- | ------------------------------------------------------------------------- | ------------------ | -------------------------------------------------------------------------------------------------- |
| Category navigation        | content-card | code-native      | code-native           | Seven categories, counts, active state.                                   | All labels/counts. | Dynamic taxonomy and responsive behavior.                                                          |
| Article index              | content-card | code-native      | code-native           | Dense rows with title, summary, updated date, reading time, and category. | Entire row.        | Search content must remain selectable and indexable.                                               |
| Optional article thumbnail | media-slot   | foreground asset | cut for initial build | No generic AI thumbnails in the first version.                            | N/A                | The user requested a professional, non-AI look; text-led rows better match GitHub/Docs references. |

Code-native:

- Search, filters, breadcrumbs, pagination, article metadata, empty/error states.
- Optional compact category icons from the existing icon system.

Replace-later / risk:

- No article may be shown as published until its English body is complete and manually reviewed for factual accuracy.

## Page 3 · Article / guide detail

Interaction assumption: left category navigation, main article, right table of contents, copy-link controls, footnotes, and related guides are responsive and independently interactive.

Total image requirement: **zero default image assets**.

| ID                            | Region type  | Layer/type   | Status                 | Content and boundary                                                                 | Code overlay                   | Decision reason                                               |
| ----------------------------- | ------------ | ------------ | ---------------------- | ------------------------------------------------------------------------------------ | ------------------------------ | ------------------------------------------------------------- |
| Article shell                 | content-card | code-native  | code-native            | Three-column docs layout on desktop; one-column reading flow on mobile.              | Entire article and navigation. | Indexability, accessibility, and responsive reflow.           |
| Tables/checklists/callouts    | content-card | code-native  | code-native            | Comparison tables, step lists, warnings, sourcing notes, definitions.                | All content.                   | Factual/editable information.                                 |
| Process diagrams              | content-card | code-native  | code-native by default | Simple sourcing flows rendered with semantic HTML/CSS/Mermaid when justified.        | Labels and citations.          | Keeps text accessible and avoids generic illustration assets. |
| Real factory/product evidence | media-slot   | source asset | replace-later          | Only user-owned/licensed photographs or sourced factual diagrams may be added later. | Caption/source/alt text.       | Real-world evidence must not be fabricated.                   |

Code-native:

- Heading hierarchy, prose, tables, code, quotes, callouts, glossary terms, sources, author/editorial notes, updated dates, breadcrumbs, TOC, and related links.

Replace-later / risk:

- Import, tariff, product compliance, customs, or legal guidance needs current primary sources and a non-legal-advice notice.
- Photos cannot be copied from factories, marketplaces, or other publishers without permission.

## Page 4 · Resources / Projects replacement

Interaction assumption: each guide, report, tool, and supplier resource is an independent content entry that can be opened, filtered, and updated.

Total image requirement: **zero required image assets**.

| ID                         | Region type  | Layer/type       | Status      | Content and boundary                                                                                              | Code overlay                                     | Decision reason                                          |
| -------------------------- | ------------ | ---------------- | ----------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------------------------------------------- |
| Resource rows              | content-card | code-native      | code-native | GitHub repository-like rows grouped into Sourcing Guides, Industry Reports, Import Tools, and Supplier Resources. | Titles, summaries, update dates, status, topics. | Independently updated factual content.                   |
| Report status/version      | content-card | code-native      | code-native | Updated date, edition, methodology status, download/read action.                                                  | All metadata.                                    | Must be accurate and crawlable.                          |
| Decorative product mockups | static-decor | foreground asset | cut         | No fake reports, devices, dashboards, or charts.                                                                  | N/A                                              | Would create false evidence and AI-landing-page styling. |

Code-native:

- Filters, topics, metadata, method notes, resource status, links, download affordances, and related guides.

Replace-later / risk:

- A resource cannot claim a downloadable report or dataset until the file and methodology actually exist.

## Page 5 · Activity / publishing timeline

Interaction assumption: activity is generated from real articles, resources, and tool releases; entries link to their destinations.

Total image requirement: **zero required image assets**.

| ID       | Region type  | Layer/type  | Status      | Content and boundary                                            | Code overlay                      | Decision reason                                  |
| -------- | ------------ | ----------- | ----------- | --------------------------------------------------------------- | --------------------------------- | ------------------------------------------------ |
| Heatmap  | content-card | code-native | code-native | Existing publication heatmap, relabeled for Havemoon content.   | Dates, counts, accessible labels. | Factual dynamic data.                            |
| Timeline | content-card | code-native | code-native | Article published, guide added, research updated, tool updated. | Entire entry.                     | Entries change over time and link independently. |

Code-native:

- Timeline line, markers, filters, dates, labels, entry summaries, heatmap cells, and links.

Replace-later / risk:

- Do not backfill fictitious historical activity. Initial history begins with real content dates.

## Page 6 · Tools index and tool detail

Interaction assumption: each tool is a real browser-side utility with independently editable fields, results, explanations, examples, limitations, and sources.

Total image requirement: **zero required image assets**.

| ID                       | Region type  | Layer/type  | Status      | Content and boundary                                                                     | Code overlay       | Decision reason                                                               |
| ------------------------ | ------------ | ----------- | ----------- | ---------------------------------------------------------------------------------------- | ------------------ | ----------------------------------------------------------------------------- |
| Tool index               | content-card | code-native | code-native | Four flat tool rows with use case, input summary, and link.                              | Entire row.        | Independently navigable and indexable.                                        |
| Calculator/checklist UI  | content-card | code-native | code-native | Form fields, selectors, validation, calculation result, reset/share controls.            | All labels/values. | Interactive and responsive; must not be a screenshot.                         |
| Methodology and examples | content-card | code-native | code-native | Explanation, formula, assumptions, worked example, sources, limitations, related guides. | All content.       | Makes the page useful beyond a thin widget and supports search understanding. |

Code-native:

- All controls, calculations, tables, examples, callouts, copy/export actions, and help content.

Replace-later / risk:

- Currency, duties, freight, compliance, and Incoterms rules must not be presented as live quotes or professional advice.
- Any default rates are example values and must be labeled as such.

## Page 7 · About, Editorial Policy, Contact, and Privacy

Interaction assumption: these are text-led trust pages with simple navigation and verified contact links.

Total image requirement: **zero required image assets beyond the shared brand mark**.

| ID                  | Region type  | Layer/type  | Status        | Content and boundary                                                                                     | Code overlay    | Decision reason                                      |
| ------------------- | ------------ | ----------- | ------------- | -------------------------------------------------------------------------------------------------------- | --------------- | ---------------------------------------------------- |
| Trust-page shell    | content-card | code-native | code-native   | Mission, audience, editorial standards, corrections, sourcing methodology, contact, privacy disclosures. | Entire page.    | Legibility, indexability, and future policy updates. |
| Contact destination | identity     | source data | replace-later | Verified email or external contact URL.                                                                  | Label and link. | Cannot invent private identity/contact details.      |

Code-native:

- All policy text, dates, navigation, correction process, disclosure language, and contact labels.

Replace-later / risk:

- Privacy policy must be updated with the final site identity, verified contact, analytics/cookie choices, and advertising disclosure before monetization.

## 6. Shared asset manifest

| Asset                            | Layer               | Role                                     | Source                                                                                                               | Reference geometry                                            | Target geometry                                                                                                                         | Code feasibility                        | If encoded in code                                                | Status           | Planned final path                                       |
| -------------------------------- | ------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | ----------------------------------------------------------------- | ---------------- | -------------------------------------------------------- |
| `havemoon-logo-source`           | identity/source     | Original brand avatar and favicon source | User-provided PNG at `C:/Users/Havemoon/AppData/Local/Temp/codex-clipboard-fb2a5b18-fa93-4353-937d-e7deb26d5cf8.png` | 990x990 square; rounded navy field with centered mountain     | Preserve original dimensions and pixels                                                                                                 | Not appropriate; official raster source | Recreating it could alter the identity                            | ready/source     | `public/images/brand/havemoon-logo-source.png`           |
| `havemoon-mark-transparent-blue` | foreground/identity | Header mark and compact brand mark       | Color edit of the approved mountain cutout, followed by chroma removal and transparent trim                          | Same two-peak mountain geometry; approximately 3:1 silhouette | RGBA PNG, 2040x717, approximately 46-48px transparent padding; desktop rendered width about 30-34px in header and 72-92px in brand rail | Not appropriate as hand-drawn CSS       | CSS would lose the mountain silhouette and subtle tonal variation | ready for review | `public/images/brand/havemoon-mark-transparent-blue.png` |

No other visual asset is approved for generation in the first build.

## 7. Asset editing invariants for the mountain mark

- Change only the background removal and crop.
- Preserve the mountain silhouette exactly: both peaks, inner cutouts, ridge angles, and relative proportions.
- Use the user-approved calm muted blue recolor for the implementation candidate; keep the earlier pale-pink transparent derivative only as a non-production backup.
- No new wordmark, border, glow, shadow, texture, extra mountain, moon, star, or icon enclosure.
- The transparent output must have clean antialiased edges and generous but compact padding.
- The original square logo remains available unchanged as the source/fallback favicon.

## 8. Content and SEO implementation contract

- English-only public copy for the initial site.
- One primary intent per article; descriptive URLs; unique title and meta description.
- Semantic heading hierarchy, breadcrumbs, author/editorial identity, published/updated dates, source notes, related guides, and descriptive image alt text where images exist.
- `WebSite`, `Organization`, `BreadcrumbList`, and `Article`/`TechArticle` structured data where appropriate.
- Existing sitemap, RSS, static HTML, and Pagefind search remain part of the starter build.
- About, Editorial Policy, Contact, Privacy, and corrections language must be complete before launch.
- Content is original synthesis written for Havemoon; no copied supplier directories, rewritten marketplace listings, scraped factory data, or unreviewed mass-generated pages.
- Tools need substantial explanatory content and methodology, not a thin calculator embedded on an otherwise empty page.
- No fake testimonials, customer logos, supplier counts, savings claims, or success statistics.

## 9. Step Four asset review

### Final files

| Asset                          | Final path                                               | Review result                                                                                                                                               |
| ------------------------------ | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Preserved source logo          | `public/images/brand/havemoon-logo-source.png`           | Exact 990x990 copy of the user-provided source. It retains the original navy rounded-square field and mountain.                                             |
| Transparent blue mountain mark | `public/images/brand/havemoon-mark-transparent-blue.png` | RGBA, 2040x717, approximately 46-48px clear padding, transparent corners, antialiased edge, and no detected green fringe. Median opaque color is `#4B6CA2`. |

### Fidelity notes

- The normalized blue silhouette matches the earlier approved transparent silhouette at approximately **97.06% intersection-over-union**. The remaining difference is limited to antialiasing and small edge interpolation; both peaks, inner cutouts, ridge angles, and the approximately 3:1 proportion are retained.
- The blue derivative has a median opaque color of RGB `(75, 108, 162)` / `#4B6CA2`: a restrained, low-saturation blue with no neon/cyan treatment, glow, shadow, or added texture.
- The source square logo remains preserved unchanged. The transparent blue derivative is the practical implementation candidate requested by the user.
- The fluorescent-green chroma-key intermediate has been removed from image-preview use after extraction so it cannot be mistaken for a brand asset. Temporary review files under `tmp/imagegen/` are not production assets.

Decision: **accepted as the implementation candidate, pending user approval of Step Four**.

## 10. Restoration brief for implementation

### Framework and architecture boundary

- Continue from the extracted Astro Navfolio project. Do not replace Astro, rebuild the content system, or convert the project to another framework.
- Preserve static output, Markdown/MDX collections, existing search integration, sitemap, RSS, project/resource module routing, responsive shell, article rendering, and the activity heatmap logic.
- Internal names such as the existing `projects` collection may remain where changing them would add risk; public labels and information architecture become Havemoon terminology.
- No publishing, repository upload, deployment, analytics, advertising code, or empty ad slot is included in this preview phase.

### Approved first-screen copy

Global brand and navigation:

- Brand: `Havemoon`
- Navigation: `Home`, `Guides`, `Resources`, `Activity`, `Tools`, `About`
- Search placeholder: `Search sourcing guides...`

Desktop/mobile brand rail:

- Identity line: `China Sourcing & Manufacturing Knowledge Base`
- Description: `Independent guides for overseas buyers navigating suppliers, production, quality, compliance, and shipping in China.`

Home reading column:

- H1: `Practical knowledge for sourcing and manufacturing in China`
- Intro: `Research-backed guides, checklists, and browser tools for overseas buyers and importers. Havemoon explains supplier verification, production, quality control, logistics, Incoterms, and compliance in plain English.`
- Primary links: `Browse sourcing guides` and `Open import tools`
- Section labels: `Featured guides`, `Browse by topic`, `Resources for buyers`, `Practical tools`, `Latest updates`

No follower counts, client numbers, savings claims, supplier-network claims, testimonials, or other unsupported proof points may appear.

### Page and responsive composition

- **Desktop home:** GitHub Profile geometry with a sticky 260-288px Havemoon rail on the left and a flexible, information-dense README-like column on the right. The current Navfolio desktop order is reversed to place the brand rail on the left; its slot/component architecture remains in use.
- **Mobile home:** preserve the approved Navfolio reference sequence: compact dark header, brand image/identity first, verified contact row if available, two-column shortcut list, latest item/activity, then the main guide and resource content as one readable column.
- **Guides:** flat article rows, category navigation, search, metadata, and pagination; no AI thumbnails in the initial build.
- **Article:** Stripe Docs-inspired left category rail, 700-760px reading column, and right TOC on wide screens; collapsible navigation and TOC on mobile. GitHub README typography governs headings, tables, code, checklists, and callouts.
- **Resources:** repository-like rows grouped as Sourcing Guides, Industry Reports, Import Tools, and Supplier Resources. No fake downloadable reports or decorative dashboards.
- **Activity:** real publishing heatmap plus linked content/tool update timeline. It starts from actual file dates and is never backfilled with invented history.
- **Tools:** real client-side calculator/checklist interfaces with server-rendered explanations, assumptions, examples, limitations, and sources.
- **Trust pages:** About, Editorial Policy, Privacy, Corrections, and Contact. Contact destinations remain hidden until the user provides a verified address or URL.

### Design system lock

- Header `#0D1117`; page `#FFFFFF`; muted surface `#F6F8FA`; text `#1F2328`; secondary text `#57606A`; border `#D0D7DE`; link/focus `#0969DA`; source-logo navy `#151E84`; transparent mark blue `#4B6CA2`.
- Use a system sans stack for UI, headings, and prose. Remove the template's monospaced/typewriter personality from normal copy; reserve monospace for code and data.
- Use flat 1px borders, 0-6px radii, almost no decorative shadow, no large gradient regions, no glow, no oversized rounded cards, and no ornamental hero artwork.
- Keep controls, text, tables, icons, heatmap labels, and navigation code-native. The two approved brand PNGs are the only required raster assets.
- Motion is limited to purposeful hover/focus/drawer feedback and must respect `prefers-reduced-motion`.

### Initial original content set

The preview build will use substantial, original English drafts rather than thin placeholder pages:

1. `How to Find Manufacturers in China: A Step-by-Step Sourcing Process`
2. `How to Verify a Chinese Supplier Before Paying a Deposit`
3. `Factory Audit Checklist for Overseas Buyers`
4. `Pre-Shipment Inspection in China: What Buyers Should Check`
5. `MOQ Negotiation: How Minimum Order Quantity Affects Unit Cost`
6. `FOB vs EXW vs CIF for China Imports: Buyer Responsibilities Explained`
7. `China Product Compliance: A Buyer’s Research Checklist`
8. `How to Calculate Landed Cost from China`

High-risk legal, tariff, customs, product-safety, and Incoterms claims require current primary sources during implementation. Content must distinguish general education, examples, and professional advice.

### Existing files/components to customize

- Site identity and public labels: `src/config/site.toml`, `src/content.config.ts`, `src/data/site.ts`, `src/components/BaseHead.astro`.
- Global shell/navigation: `src/layouts/BaseLayout.astro`, `src/components/blog/BlogTopNav.astro`, `src/components/Header.astro`, `src/styles/global.css`, `src/styles/fonts.css`.
- Home composition: `src/pages/index.astro`, `src/components/layout/DashboardFlow.astro`, profile/intro/navigation/connect components, `DoingCard.astro`, and `BlogHeatmap.astro`.
- Knowledge index and article system: existing `src/pages/blog/**`, archive/group/navigation components, `src/layouts/BlogArticle.astro`, and article components.
- Resource system: existing `projects` content collection and `src/modules/routes/projects-index.astro` / `project-detail.astro`, relabeled publicly as Resources.
- New static-compatible routes/components may be added only where the current template has no equivalent for Activity, Tools, Editorial Policy, Privacy, Corrections, or Contact.
- Original Markdown/MDX entries will be created under the existing content-collection convention; the ZIP currently contains no usable Havemoon content entries.

### Implementation verification contract

- Build/type checks plus local browser QA at desktop and mobile widths.
- Inspect the actual rendered home, guides, article, resources, activity, tools, and trust pages—not only a successful build.
- Compare desktop and mobile screenshots against the accepted GitHub, README, Stripe Docs, and Navfolio references using the locked content and design system above.
- Audit at least: navigation/copy, desktop rail geometry, mobile ordering, typography, color/borders, brand asset treatment, article/TOC behavior, search, activity data, tool interaction, and overflow/focus states.
- Record any intentional deviation in a fidelity ledger. Temporary QA artifacts are removed before handoff.

## 11. Approval boundary

Step Four has produced the approved-candidate assets and the exact restoration brief. Page implementation remains blocked until the user confirms Step Four. After confirmation, implementation may begin locally inside the extracted Astro project, followed by build and browser QA for preview only.
