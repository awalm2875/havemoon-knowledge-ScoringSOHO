# Havemoon Fidelity Ledger

Reviewed: 2026-08-10

## Accepted references

- `docs/references/github-profile-home-desktop-user.png` — binding desktop homepage reference
- `docs/references/navfolio-mobile-layout.png` — binding mobile structure reference
- `docs/references/github-readme-article-desktop.png` — article/readme density reference
- `docs/references/stripe-docs-article-desktop.png` — article navigation reference
- `docs/references/homepage-readme-typing-target.png` — accepted two-line README typing target
- `docs/references/mobile-activity-slot-annotated.png` — accepted mobile replacement location
- `docs/references/mobile-activity-target.png` — accepted Publication activity content
- `docs/references/mobile-typing-centered-target.png` — accepted centered typing behavior

## Latest implementation screenshots

- `docs/qa/home-desktop-readme-typing.png` — desktop looping README text at 1,280 × 720
- `docs/qa/home-desktop-publication-activity.png` — desktop publication and update markers at 1,280 × 720
- `docs/qa/home-mobile-readme-typing.png` — mobile looping README text at 390 × 844
- `docs/qa/home-mobile-publication-activity.png` — mobile publication and update markers at 390 × 844
- `docs/qa/article-seo-guide-desktop.png` — new long-tail sourcing guide at 1,280 × 720
- `docs/qa/home-mobile-activity-relocated.png` — mobile activity relocation at 390 × 1,076
- `docs/qa/home-mobile-centered-typing.png` — centered mobile typing at 390 × 1,076
- `docs/qa/home-desktop-activity-markers.png` — desktop publication markers at 1,280 × 720
- `docs/qa/home-mobile-activity-markers.png` — mobile publication markers at 390 × 844

- `docs/qa/home-desktop-activity-correction.png` — latest desktop homepage correction at 1,280 × 900
- `docs/qa/home-mobile-activity-correction.png` — latest mobile activity-section correction at 390 × 844
- `docs/qa/home-desktop-github-redesign.png` — desktop homepage at 2,048 × 1,120
- `docs/qa/home-mobile-github-redesign.png` — mobile homepage at 390 × 844
- `docs/qa/article-desktop.png` — desktop guide at 1,440 × 1,000

## Reference-to-implementation comparison

1. **Desktop profile skeleton**
   - Reference evidence: a large 356 px circular identity image, a 356 px profile rail, a narrow inter-column gutter, and a large README panel.
   - Latest correction evidence: the user-marked 1,280 px comparison required less profile dominance. Browser geometry now measures a 300 px rail, 32 px gutter, and 884.67 px flexible README column. At 901–1,120 px the rail reduces again to 272 px with a 24 px gutter.
   - Resolution: the third-party avatar is replaced by the approved transparent blue Havemoon mountain mark in the same circular geometry.

2. **Profile information hierarchy**
   - Reference evidence: name, handle, full-width action, biography, compact fact rows, circular badges, and highlights.
   - Render evidence: Havemoon name and knowledge-base positioning follow the same hierarchy. The CTA spans the rail; audience, scope, and language use compact icon rows; Focus areas use four circular topic markers; Highlights shows real content inventory.
   - Resolution: no follower counts, location, employer, email, or social proof was invented.

3. **README first screen**
   - Reference evidence: repository path, centered monospace introduction, compact metadata, rectangular link badges, a muted code block paired with an illustration, and status labels.
   - Render evidence: the implementation preserves that order and container model. The code block contains Havemoon's sourcing focus and editorial standard; the paired visual uses the approved brand mark; rectangular shortcuts lead to real Guides, Tools, Resources, and RSS routes.
   - Resolution: the screenshot's developer identity, employer copy, technology stack, and decorative character are not copied.

4. **Dense lower information board**
   - Reference evidence: a two-column bordered board with dark statistics panels and a dense trophy/skills grid.
   - Render evidence: the same two-column, dark-panel visual weight is used for Knowledge coverage, seven topic tiles, and latest-guide rows. Values are derived from Astro collections: 15 original guides, 8 resources, and 4 tools.
   - Resolution: trophies, stars, commits, ratings, and contribution claims are replaced by factual knowledge coverage and publication inventory.

5. **Color, typography, and container treatment**
   - Reference evidence: pure white page, thin cool-gray borders, neutral muted surfaces, blue links, compact sans UI, and monospace README accents.
   - Render evidence: `#ffffff` page, `#f6f8fa` muted surface, `#d0d7de` border, `#0969da` links, and `#315f9d` restrained brand blue. Main containers use 6 px radii; there are no large rounded cards, gradients, glow, or continuous decorative animation.
   - Intentional deviation: the dark Havemoon top navigation remains because it was explicitly locked in the site direction; it shifts the reference content down by approximately 64 px without changing internal proportions.

6. **Mobile continuation**
   - Reference evidence: brand visual first, centered name and role, compact entry grid, then publication content.
   - Render evidence: at 390 × 844 the mobile order is mountain mark, Havemoon identity, full-width guide action, factual profile rows, two-column Guides/Resources/Tools/Activity navigation, RSS, then the README content. The measured document width equals the client width (375 px), so there is no horizontal overflow.

7. **Interaction and console checks**
   - The mobile navigation opens with `aria-expanded="true"` and closes back to `false`.
   - The editorial-focus copy action writes the expected text to the browser clipboard and provides a transient state.
   - Guide and category shortcuts point to generated internal routes.
   - Browser console inspection returned no errors on desktop or mobile.

8. **Publication activity correction**
   - Accepted annotation places Publication activity between the current-focus workbench and the `9 original guides / 8 buyer resources / 4 browser tools` inventory badges.
   - Desktop rendering uses a compact two-part row: three factual collection totals on the left and the 26-week date grid on the right. Mobile rendering stacks the totals, full-width date grid, legend, and inventory badges without horizontal overflow.
   - Every non-draft article is mapped to its real publication date, and a later truthful `updatedDate` creates a separate update event. Browser inspection found 11 active dates across 15 guides and exactly 1 latest-date marker.
   - Active single-post days now use visible medium Havemoon blue (`#7293c2`) instead of the earlier near-grey tint. The newest date uses `#244f87` plus a persistent 2 px outline.
   - The nine real publication dates reveal in chronological order when the panel enters the viewport. Scrolling away removes the reveal state; returning replays it, while the latest-date halo continues only when the panel is visible. `prefers-reduced-motion` disables both animations while keeping all markers visible.
   - The two README lines now type, hold, delete, and repeat independently, matching the accepted GitHub README motion model without loading a remote typing SVG or changing the approved wording.

9. **README typing and SEO content expansion**
   - The title types at 48 ms per character and the subtitle at 52 ms per character. Both hold for 1,200 ms, delete at 22 ms per character, wait for 520 ms, and restart.
   - Hidden reserve copies keep each line's full footprint. Browser measurements were identical during typing, deleting, and restart: the desktop intro remained 883.33 × 241.97 px, and the mobile intro remained 334.67 × 374.67 px.
   - `prefers-reduced-motion` keeps the complete approved text visible and removes the caret animation.
   - Six original English guides were added around sample ordering, purchase orders, freight quote comparison, packaging specifications, small-batch manufacturing, and production lead time. Each page combines a broad sourcing topic with a specific buyer query and provides a concrete operating workflow.
   - All 15 guides now have contextual internal links. The content audit found unique titles and descriptions, 121–155 character descriptions, Article structured data, canonical links, and sitemap inclusion on every guide.

10. **Mobile activity relocation and typing alignment**
    - At 390 px, the Follow updates row is replaced by the same live Publication activity component used on desktop. Its visible order is mobile navigation → Publication activity → `havemoon / README.md`.
    - The relocated component preserves the heading, Full activity link, 15 total posts, 11 active days, 3-day streak, 11 active date cells, legend, article links, latest-date outline, and staggered reveal.
    - The README-column activity instance is hidden at the mobile breakpoint, leaving exactly one visible compact heatmap. Desktop retains the original README placement and 300 px / 884.67 px column split.
    - The mobile headline and subtitle use full-width centered typing tracks. Browser measurements found the full headline centered within 0.01 px; while the caret is visible, the text itself sits 4.5 px left so the combined text-and-caret group remains centered.
    - Both the placement viewport and the centered-typing viewport measured 0 px horizontal overflow.

11. **Desktop breathing-room correction**
    - The latest desktop annotation is applied only above 900 px. The profile/README order, copy, activity placement, controls, colors, and animation remain unchanged.
    - At 1,280 × 720, the desktop grid now measures 292 px / 904.67 px with a 28 px gutter. The README column gained 20 px over the previous 884.67 px measurement while preserving 0 px horizontal overflow.
    - The README path, introduction, focus workbench, publication activity, inventory badges, knowledge board, and lower lists receive desktop-only vertical spacing. The introduction measures 265.97 px high and the focus workbench 224.83 px high at the checked viewport.
    - Desktop still exposes exactly one visible README activity heatmap and hides the mobile rail instance. The browser console returned 0 warnings or errors.
    - At 390 × 1,076, the fifth-correction geometry remains unchanged: navigation ends at y=634.08 px, the single visible mobile activity occupies y=652.08–866.15 px, and the README begins at y=898.15 px. Horizontal overflow remains 0 px.

## First-screen copy diff

- Added visible copy is limited to Havemoon's approved positioning, true editorial standard, and true publication inventory.
- Removed reference-only copy: the person's name, pronouns, employer, birthday, location, email, developer interests, technology stack, and external profile claims.
- Section order and information roles are preserved even where the words necessarily change to the China sourcing knowledge-base subject.
- User-approved mobile-only removal: `Follow updates` and its RSS icon are replaced by Publication activity; the desktop README shortcuts still retain RSS Updates.

## Intentional deviations

- No avatar, borrowed biography, illustration, achievements, or identity from the referenced GitHub account is used.
- No fake followers, stars, contribution history, clients, testimonials, transactions, ratings, or page-view statistics are shown.
- The activity heatmap is calculated only from real local publication and explicit update dates.
- Contact details are deliberately not invented.
- The dark global navigation remains, while the supplied desktop crop begins directly on a white page.
- The site remains inside the existing Astro Navfolio framework; the correction changes host components and styles, not the framework.

## QA result

- Static build: 111 pages generated.
- Search: 110 content pages indexed in English.
- Visual comparison: supplied reference and latest desktop/mobile screenshots were both inspected at original resolution with `view_image`.
- Latest native viewport checks: 1,280 × 900 desktop and 390 × 844 mobile, in addition to the earlier 2,048 × 1,120 check.
- Responsive result: document width equals client width at 390 px (`375 / 375` after scrollbar allocation); the mobile activity section is 334.67 px wide and its heatmap is 303.33 px wide. No horizontal overflow was found.
- Builder: `references/frontend-app-builder.md` fallback contract used for implementation and verification.
- Latest marker check: exactly 11 active dates and 1 latest-date cell were found on both desktop and mobile. The responsive document overflow remained `0 px` at 390 px.
- Replay check: after the panel enters the viewport, active cells use `heatmap-cell-in`; the final three dates carry 760 ms, 855 ms, and 950 ms stagger delays. The latest day represents six new guides, while the preceding day truthfully represents one updated guide.
- Link audit: 5,016 generated internal href references were checked across 111 HTML files with 0 broken targets.
- Article audit: all 15 guide pages contain canonical URLs, Article JSON-LD, sitemap entries, and at least 3 contextual knowledge-base links.
- Mobile placement check at 390 × 1,076: navigation ended at y=634.08 px, Publication activity occupied y=652.08–866.15 px, and the README path began at y=898.15 px.
- Mobile duplication check: 2 compact heatmaps remain in the responsive DOM for shared component reuse, but exactly 1 is visible; the README-column copy is `display: none` at or below 900 px.
- Desktop regression check at 1,280 × 720: mobile activity is hidden, README activity remains visible, one heatmap is visible, and horizontal overflow is 0 px.
- Runtime check: no browser console warnings or errors after the mobile relocation.
