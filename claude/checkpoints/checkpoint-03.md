# Checkpoint 03 — 2026-05-27 — Screenshots, McDonald's, Analysis Restructure

> AI 201 — Project 3: Persons Required
> Saved after a full content + UX session: real screenshots wired in, McDonald's added, library page converted to recently viewed, analysis section fully rebuilt with country-column layout and 12 cultural dimensions.

---

## Session Context

Third working session. Built on top of checkpoint-02. No new major UI screens added — this session focused on content fidelity, UX fixes, and the analysis section restructure based on user feedback.

---

## What Was Built This Session

### Real Screenshots in BrowserFrame
- 8 Amazon screenshots (home + product × US/BR/JP) and 3 McDonald's screenshots (home × US/BR/JP) imported into BrowserFrame
- BrowserFrame made brand-aware via `brand` prop threaded from ComparisonView
- SCREENSHOTS map keyed by brand → country → screen
- BR and JP product pages stack two images vertically with scroll (continuation screenshots)
- Non-screenshot screens fall back to AmazonMockup (Amazon) or generic placeholder (other brands)

### McDonald's Added
- Food & Beverage industry added to landing page
- McDonald's added as the only brand under Food & Beverage
- Screenshots wired for home screen (US, BR, JP)

### Landing Page Fixes
- Industry dropdown converted from native `<select>` to custom combobox matching Brand/Company style
- Brand + industry list trimmed to only content that exists (Amazon, McDonald's)
- Countries dropdown now filters to available countries per brand (COUNTRIES_BY_BRAND map)
- Countries field shows "Select brand first" and is disabled until a brand is chosen
- Selecting a new brand resets the selected countries
- Platform order changed to Website → Mobile → Kiosk (Website default)
- Hero subtext updated: "A platform that helps designers understand / how digital experiences shift across cultures"

### Comparison View Fixes
- Library nav link wired to `onLibrary` prop (was broken `<a href="#">`)
- "+ Add country" picker made functional: dropdown appears below button, shows remaining available countries, click adds to comparison
- Countries converted to state in ComparisonView so they can be added after load

### Library Page — Recently Viewed
- Hardcoded PATTERNS replaced with `recentlyViewed` prop from App.jsx
- App.jsx tracks every comparison opened (prepend, max 20, in-session only)
- Cards show: brand, platform · screen, country flags
- CardPreview component restored: shows real screenshot if available, AmazonMockup fallback for Amazon, empty placeholder otherwise
- Empty state: "No comparisons viewed yet. Start a comparison to see it here."
- Search filters by brand name; sort by Recently viewed / A–Z

### Analysis Section — Full Rebuild
- Removed all hardcoded Amazon-specific ANALYSIS blocks
- New country-column layout: one card per selected country, dark header, sections stacked inside
- 12 analysis dimensions (only sections with content render):
  1. Layout patterns
  2. Navigation behaviors
  3. Interaction density
  4. Trust signals
  5. Payment expectations
  6. Accessibility
  7. Social behaviors
  8. Color meaning & theory
  9. Typography preferences
  10. Visual language & imagery
  11. Traditional art & heritage
  12. Cultural UX heuristics
- New `src/data/analysisData.js` — full content for Amazon Home, Amazon Product Detail, McDonald's Home
- Screens without analysis data (Search, Cart, Checkout) show nothing rather than wrong content
- Sources moved to a separate full-width section below the columns

---

## Key Technical Decisions

| Decision | Why |
|----------|-----|
| `brand` prop threaded to BrowserFrame | BrowserFrame needed to know which brand to look up screenshots for |
| SCREENSHOTS map keyed brand → country → screen | Clean lookup; easy to extend with new brands |
| `recentlyViewed` in App.jsx state | In-session memory; no backend needed; simple prepend with max 20 cap |
| `src/data/analysisData.js` as separate file | Content volume too large for ComparisonView.jsx; file stays manageable |
| IIFE `{(() => { ... })()}` for analysis render | Allows early return (null) when no data exists for current screen without extracting a component |
| Countries converted to state in ComparisonView | Required for add-country functionality; was previously static from config |
| Add-country dropdown anchored to `.add-btn-wrap` not `.add-frame` | `.add-frame` is 540px tall — dropdown was rendering far below viewport |

---

## Directions Given

- No changes without explicit permission
- Explain before acting, ask questions before each new phase
- No `npm run build` after edits
- Analysis: country-focused columns, sections only show when relevant
- Library: show recently viewed (in-session), not hardcoded patterns
- Only keep industry/brand content that actually exists
- Sources stay but as a separate section below analysis

---

## Records of Resistance This Session

None this session.

---

## Successes

- Real screenshots rendering correctly inside browser chrome for both brands
- McDonald's fully wired end-to-end: landing → comparison → analysis
- Add country picker functional and correctly positioned
- Analysis rebuild well-received by user
- Country availability filtering working (only US/BR/JP shown per brand)
- Recently viewed library working with screenshot previews

---

## Current State at Checkpoint

All features functional. Next steps discussed but not started:
- AI-generated analysis (deferred — OpenAI or Anthropic; client-side with API key in .env)
- Mobile App screenshots (deferred to end of project)
- Additional brands/screenshots as content becomes available
