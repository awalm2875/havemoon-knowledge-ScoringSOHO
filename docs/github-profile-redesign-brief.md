# Homepage correction brief — GitHub Profile structure

## Accepted reference

- Desktop reference: `docs/references/github-profile-home-desktop-user.png`
- Mobile reference: `docs/references/navfolio-mobile-layout.png`
- Brand asset: `public/images/brand/havemoon-mark-transparent-blue.png`
- Content lock: Havemoon — China Sourcing & Manufacturing Knowledge Base. The referenced person's name, avatar, identity, employer, statistics, illustration, achievements, and developer positioning are prohibited.

## Reference-to-build mapping

### Desktop profile rail

- Reference geometry: a roughly 24% left rail with a large circular identity image, name and handle, a full-width action, compact profile facts, a row of circular badges, and a highlights list.
- Build mapping: a 356 px Havemoon rail inside a roughly 1,460 px shell. The large circle contains the approved transparent blue mountain mark on a pale neutral field. Text becomes Havemoon's positioning. The button opens the guide index. Profile rows state audience, coverage, and language only.
- Reference badges become **Focus areas**, not achievements: Supplier Checks, Quality, Freight, Compliance.
- Reference highlights become real inventory facts derived from the content collections: original guides, buyer resources, and browser tools.

### Desktop README panel

- Reference geometry: one large, lightly bordered README container; small repository path; centered monospace introduction; rectangular link badges; a two-column code/illustration block; compact status labels; a bordered two-column knowledge area.
- Build mapping: one full-width README panel with `havemoon / README.md`, Havemoon's approved English positioning, square-corner navigation links, a code-like editorial focus block, and the mountain mark occupying the reference illustration slot.
- Lower panels use only real, editable content: category coverage, current publication inventory, latest guides, and tools. No trophies, contribution totals, follower counts, ratings, or simulated business metrics.

### Mobile

- Preserve the approved Navfolio-derived brand-first order: mountain mark, Havemoon name and positioning, real profile facts, two-column navigation, update link, then knowledge content.
- The desktop avatar circle and dense split README panel collapse into the existing wide mountain mark and single-column reading layout.

## Asset decision table

| Element                                      | Role                             | Code feasibility                        | Decision      | Source / final path                                           |
| -------------------------------------------- | -------------------------------- | --------------------------------------- | ------------- | ------------------------------------------------------------- |
| Havemoon mountain mark                       | identity/source asset            | Existing real brand asset               | `ready`       | `public/images/brand/havemoon-mark-transparent-blue.png`      |
| Desktop circle, profile text, button, facts  | editable identity UI             | High                                    | `code-native` | Astro + CSS                                                   |
| Focus area disks and icons                   | editable topic navigation        | High                                    | `code-native` | Lucide icons + CSS                                            |
| README border, headings, badges, code block  | editable content UI              | High                                    | `code-native` | Astro + CSS                                                   |
| Category and latest-guide panels             | factual dynamic content          | Required to remain editable             | `code-native` | Astro collections                                             |
| Reference avatar and profile identity        | third-party identity             | Must not be copied                      | `blocked`     | Replaced by Havemoon mark and content                         |
| Reference illustration, trophies, tech icons | third-party/developer decoration | Not relevant and potentially misleading | `blocked`     | Replaced by Havemoon mark, topic coverage, and real inventory |
| Background imagery                           | none in reference                | Not needed                              | `code-native` | Pure white / neutral CSS surfaces                             |

## Locked design system

- Shell: 1,460 px maximum; desktop columns 356 px / minmax(0, 1fr); 28 px gap.
- Page: pure white `#ffffff`; muted surface `#f6f8fa`; border `#d0d7de`; main text `#1f2328`; secondary text `#57606a`; link blue `#0969da`; brand blue `#315f9d`.
- Typography: system sans for the GitHub frame; system monospace for README path, intro, and code-style information.
- Radius: 6 px for GitHub-like controls and panel edges; no large rounded cards, gradients, glow, or decorative animation.
- Builder contract: `references/frontend-app-builder.md` fallback, using the accepted screenshot as the production specification.

## Allowed first-screen copy

- Havemoon
- China Sourcing & Manufacturing Knowledge Base
- Independent guides for overseas buyers navigating suppliers, production, quality, compliance, and shipping in China.
- Browse sourcing guides
- For overseas buyers & importers
- China sourcing & manufacturing
- English knowledge base
- `havemoon / README.md`
- Practical guidance for sourcing and manufacturing in China
- Independent guides for overseas buyers and importers
- Guides, Buyer Tools, Resources, RSS

## QA targets

- Native desktop comparison at 2,048 × 1,120, matching the supplied screenshot's column proportions and visible density.
- Mobile comparison at 390 × 844, preserving the already approved mobile ordering and avoiding horizontal overflow.
- Evidence: browser screenshots plus `view_image` comparison against the accepted reference, followed by an updated `docs/fidelity-ledger.md`.

## Second correction — activity placement and layout balance

### Accepted annotations

- Current misplaced activity section: `docs/references/homepage-activity-current-annotated.png`
- Required activity position: `docs/references/homepage-activity-target-annotated.png`
- Desktop proportion and spacing correction: `docs/references/homepage-layout-balance-annotated.png`

### Locked corrections

- README order becomes: introduction → current-focus workbench → publication activity → inventory badges → knowledge board → resources and tools.
- Publication activity is collection-driven. Every non-draft article contributes to its publication-date cell; adding a dated article automatically lights that day without maintaining separate totals.
- The newest published day receives one restrained pulse on page entry. Existing active cells reveal in sequence. Motion is decorative only and is disabled by `prefers-reduced-motion`.
- Desktop shell is rebalanced to a 300 px profile rail and a flexible README column with a 32 px gap. The profile logo, headings, facts, and circular topic links are reduced to match that rail.
- README headline spacing is tightened and receives a small, GitHub-README-style reveal/caret treatment. The approved wording remains unchanged.
- Mobile remains one column, keeps the brand-first profile order, compresses the activity statistics, and fits the complete heatmap without horizontal overflow.

### Asset boundary

- This correction is entirely code-native and reuses the approved transparent blue Havemoon mountain mark.
- No third-party avatar, identity, achievement, profile statistic, or decorative illustration is introduced.

## Third correction — visible publication markers

### Accepted annotation

- Missing activity markers: `docs/references/homepage-activity-markers-missing-annotated.png`

### Locked corrections

- Every published article date remains visibly marked in medium Havemoon blue after motion finishes. A single-post day must not look like an empty grey cell.
- The newest published date uses the darkest blue plus a persistent outline, so its location remains identifiable without relying on animation.
- The nine real publication dates reveal in chronological order when the activity panel enters the viewport. Leaving and re-entering the panel replays the reveal; the newest-date halo continues only while the panel is visible.
- Motion is progressive enhancement and respects `prefers-reduced-motion`. Article links, hover titles, dates, and counts continue to come directly from the Astro blog collection.
- No new marketing copy, fake contribution data, or manually maintained activity totals are introduced.

## Fourth correction — README typing motion and content growth

### Accepted reference

- User crop: `docs/references/homepage-readme-typing-target.png`
- Motion source: `https://raw.githubusercontent.com/dodolalorc/dodolalorc/refs/heads/main/README.md`
- The reference uses two independent `readme-typing-svg` lines with a monospace face, character-by-character entry, a pause, deletion, and a repeating cycle.

### Reference-to-build mapping

- The approved Havemoon headline and subtitle remain unchanged and remain the only visible copy in this area.
- Both lines become independent code-native typing loops. The full text footprint is reserved before animation so the README panel and downstream content do not jump while characters appear or disappear.
- Motion uses the existing Havemoon blue and Maple Mono/system-monospace stack. The reference account's purple, wording, remote SVG service, identity, and profile data are not reused.
- The animation stops for `prefers-reduced-motion`, in which case both complete lines remain visible. The semantic heading retains its complete accessible name throughout the visual loop.

### Asset boundary

- Background asset: none, code-native white surface.
- Foreground asset: none. Live text, cursor, timing, wrapping, and responsive behavior remain editable HTML/CSS/JavaScript.
- Existing Havemoon mountain marks and all previously approved layout geometry remain unchanged.

### Content-growth boundary

- Six new English guides are added inside the existing Astro blog collection; no new content framework, category system, or landing-page section is introduced.
- Every guide targets one concise short-tail topic and one buyer-question long-tail query, while prioritizing a complete operational answer over repetition or keyword density.
- Existing and new articles receive contextual internal links that follow the sourcing workflow: supplier discovery → verification → samples/specifications → purchase order → production → inspection → freight/landed cost.
- Publication dates reflect the actual local addition date. No artificial backdating, fake freshness, invented case studies, or unsupported performance statistics are allowed.

## Fifth correction — mobile activity slot and centered typing

### Accepted references

- Required mobile slot: `docs/references/mobile-activity-slot-annotated.png`
- Activity content target: `docs/references/mobile-activity-target.png`
- Centered typing target: `docs/references/mobile-typing-centered-target.png`

### Reference-to-build mapping

- On viewports at or below 900 px, the existing collection-driven Publication activity component replaces the Follow updates row directly below the four mobile navigation entries.
- The duplicate Publication activity instance inside the README column is hidden at the same breakpoint. Desktop keeps its current README placement.
- The mobile activity instance retains live totals, publish/update cells, article links, reveal timing, latest-date outline, legend, and Full activity link. No screenshot content is embedded.
- On mobile, the headline and subtitle typing layers use centered text alignment and full-width reserved tracks, so every typing/deleting cycle begins from the horizontal center without changing the complete accessible names.

### Asset boundary

- Background asset: none, code-native white surface and existing borders.
- Foreground asset: none. The activity grid, statistics, text, cursor, and responsive positioning remain live HTML/CSS/JavaScript.
- Existing logo, copy, article dates, totals, colors, and desktop layout remain unchanged.

### QA targets

- At 390 × 844, Publication activity appears once, immediately after the mobile navigation and before `havemoon / README.md`.
- The mobile activity wrapper and heatmap fit within the content width with 0 px horizontal overflow.
- Both typing lines remain horizontally centered during typing, holding, deleting, and restart states.

## Sixth correction — desktop breathing room

### Accepted reference

- Desktop density annotation: `docs/references/desktop-readme-density-annotated.png`

### Reference-to-build mapping

- This correction applies only above the 900 px mobile breakpoint. The approved mobile activity position, centered typing tracks, and single-column order remain unchanged.
- The desktop profile rail, README panel, content order, wording, activity placement, and interactive behavior remain unchanged.
- At common laptop widths, the profile rail becomes slightly narrower and the inter-column gutter slightly smaller so the README panel gains usable width without shrinking its internal content.
- Desktop README sections receive more vertical breathing room around the introduction, focus workbench, publication activity, inventory badges, knowledge board, and lower resource lists. Borders, colors, compact GitHub-style controls, and information density remain intact.
- The correction does not introduce new cards, copy, assets, statistics, animation, or a mobile-derived layout on desktop.

### Asset boundary

- Background and foreground assets: unchanged. The existing transparent Havemoon mountain marks are reused.
- All spacing and column adjustments are code-native CSS and remain responsive.

### QA targets

- At 1,280 px desktop width, the README panel is wider than the previous 884.67 px measurement and retains 0 px horizontal overflow.
- Desktop continues to show the README-column activity exactly once; the mobile rail activity remains hidden.
- At 390 px, the layout and geometry from the fifth correction remain unchanged with 0 px horizontal overflow.
