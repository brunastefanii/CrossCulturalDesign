# Checkpoint 01 — 2026-05-18 — Full Scaffold + Landing Page + Comparison View

> AI 201 — Project 3: Persons Required
> Saved before building the "Upload your own" mode.

---

## Session Context

First working session for CrossCulturalDesign. Project scaffolded from scratch with Vite + React. Landing page and comparison view are both functional. The comparison view includes high-fidelity coded Amazon mockups for US, Brazil, and Japan across all 5 screens. GitHub Pages deploy pipeline is configured.

---

## What Was Built This Session

### Project Scaffold
- `package.json`, `vite.config.js`, `index.html`, `src/main.jsx`
- `src/App.jsx` with screen state (`landing` | `comparison`) and `config` passed between screens
- `src/index.css` — global reset, Inter font
- `.github/workflows/deploy.yml` — GitHub Pages auto-deploy via peaceiris/actions-gh-pages@v3
- `.gitignore`
- Vite base: `/CrossCulturalDesign/` for GitHub Pages

### Landing Page (`LandingPage.jsx` + `LandingPage.css`)
- Sticky nav with "CROSS-CULTURAL DESIGN" in uppercase
- Centered hero: eyebrow label, bold headline ("See how the same screen lives in other cultures."), subhead, two CTAs with pill-shaped buttons
- Comparison builder card:
  - Platform tabs: Mobile / Website / Kiosk
  - Industry dropdown (Finance, Travel, Fitness, E-commerce, Health, Social)
  - Brand searchable combobox — filtered by industry (Amazon under E-commerce)
  - Countries multi-select with flag chips — max 3, counter display
  - Compare button activates when ≥1 country selected

### Comparison View (`ComparisonView.jsx` + `ComparisonView.css`)
- Sticky context header: ← Back, breadcrumb, country chips, + Add country, Save, Export PDF
- Screen tabs bar: Home · Search Results · Product Detail · Cart · Checkout
- Mockup canvas: dynamic grid (2 columns + ghost "Add country" col, or 3 columns)
- Each column: country header (flag, name, brand/year meta) + browser frame
- Analysis section: 8 blocks with left color border — What changed and why, Design rationale, Patterns (3-column), Color & tone, Trust signals, Watch out for, Why this works, Sources

### Browser Frame (`BrowserFrame.jsx` + `BrowserFrame.css`)
- macOS-style browser chrome: traffic light dots, back/forward arrows, address bar with URL
- Viewport: 560px tall, overflow hidden
- Inner mockup scaled via `transform: scale(0.5)` at 960px base width

### Amazon Mockup (`AmazonMockup.jsx` + `AmazonMockup.css`)
- One component, renders correct screen per `country` + `screen` props
- Countries: US (English), BR (Portuguese + installment/Pix signals), JP (Japanese + dense layout)
- 5 screens per country: Home, Search Results, Product Detail, Cart, Checkout
- Authentic Amazon color system: #131921 nav, #FF9900 orange, #FFD814 CTA buttons
- Country-specific trust signals: Prime/free shipping (US), parcelas/Pix badges (BR), Amazon Points/manufacturer verification (JP)

---

## Key Technical Decisions

| Decision | Why |
|----------|-----|
| `transform: scale(0.5)` on 960px base | Most authentic scaling — content proportions match real website at mockup size |
| Dynamic grid (cols-2 / cols-3) | Supports 2 or 3 country comparisons, ghost column prompts adding a third |
| Placeholder analysis text | AI API integration deferred — analysis content is substantive placeholder for now |
| Amazon under E-commerce industry | User specified Amazon as the demo brand |

---

## Directions Given

- Do not change anything without explicit permission
- Before making changes, explain what you are doing and what it is for
- Ask clarifying questions before every new phase or major task
- No `npm run build` after edits — user tests in their own dev environment
- No CLAUDE.md — rules are followed implicitly
- Platform is "Website" for this demo (not mobile)
- Placeholder text for AI analysis for now
- Keep existing coded mockups + add "Upload your own" mode next

---

## Records of Resistance This Session

| # | Topic | Summary |
|---|-------|---------|
| RoR 1 | Hero alignment flip-flop | AI changed hero to left-aligned per reference image — user then asked to revert to centered |
| RoR 2 | iframe embedding pushed back | AI said iframes wouldn't work for Amazon; user pushed back saying websites can be embedded; AI explained X-Frame-Options blocking; resolved by building coded mockups |

---

## Successes

- Full landing page → comparison view flow working end-to-end
- All 5 screen tabs switch correctly and update both mockups and analysis section simultaneously
- Amazon mockups render authentic differences between US, BR, and JP markets
- Ghost "Add country" column correctly appears when < 3 countries selected
- GitHub Pages deploy pipeline configured and ready

---

## Current State at Checkpoint

Landing page and comparison view are functional with Amazon coded mockups. Next step: build "Upload your own" mode — drag-and-drop upload slots per country per screen tab, integrated into the existing comparison view.
