# Checkpoint 02 — 2026-05-18 — Upload Mode + Platform Switcher + Pattern Library

> AI 201 — Project 3: Persons Required
> Saved after building three major features: Upload your own mode, platform switcher with PhoneFrame, and the Pattern Library page.

---

## Session Context

Second working session for CrossCulturalDesign. Built on top of checkpoint-01 (scaffold + landing page + Amazon comparison view). Three major features added this session. All features are functional and tested in dev.

---

## What Was Built This Session

### Upload Your Own Mode
- Two tabs on the builder card: **Library** (existing form, unchanged) and **Upload your own**
- Upload tab fields: brand name input, platform selector (App / Website / Mobile), conditional URL field (only when Website selected)
- Drag-and-drop upload zone — accepts multiple images at once (PNG, JPG, WebP)
- Per uploaded image: thumbnail preview, screen name text input, country dropdown, remove button
- Compare activates when ≥1 image has both screen name and country assigned
- Comparison view handles `mode: 'upload'` — screen tabs from uploaded screen names, columns from assigned countries, uploaded images rendered per cell

### Comparison View UI Restructure
- Nav bar added (same logo + links as landing page)
- Save / Export PDF buttons moved from context header → VIEWING SCREEN row (right side)
- Context header removed as sticky bar — replaced with a flat row above the mockup canvas: `← Back · breadcrumb · [Platform switcher]`
- Countries dropdown: items now use checkboxes instead of plain list items

### Platform Switcher
- Context row shows `[Website] [Mobile App]` pill buttons
- Switching platform changes screen tabs dynamically:
  - Website: Home, Search Results, Product Detail, Cart, Checkout
  - Mobile App: Splash Screen, Home, Search Results, Product Detail, Cart, Checkout
- All brands get both platform options (library mode)
- Upload mode: shows selected platform only, no switching

### PhoneFrame (`PhoneFrame.jsx` + `PhoneFrame.css`)
- iPhone-style hardware chrome: dark outer ring, side volume/power buttons
- Status bar: time (9:41), dynamic island pill, signal bars, WiFi icon, battery
- Viewport: placeholder "Screenshot coming soon" — ready to slot in real screenshots
- Home bar with home indicator
- Renders when `activePlatform === 'Mobile App'`

### Pattern Library Page (`LibraryPage.jsx` + `LibraryPage.css`)
- New screen in App.jsx (`screen === 'library'`)
- "Browse library" hero button and "Library" nav link both navigate here
- Left sidebar: Region (with pattern counts), Pattern Type, Dimension — single-select filters, click to toggle
- Page header: "Pattern library" title + search input (top right)
- Main content: pattern count + active filters label + Sort dropdown
- 2-column card grid with 8 hardcoded Amazon patterns
- Card: live scaled AmazonMockup preview (scale 0.44), title, description, country tags
- Clicking card → comparison view with pre-set countries + initial screen

---

## Key Technical Decisions

| Decision | Why |
|----------|-----|
| Upload images use `URL.createObjectURL` | Creates local preview URLs without uploading to a server |
| `config.mode` distinguishes library vs upload in ComparisonView | Single ComparisonView handles both modes conditionally |
| `config.initialScreen` passed from library cards | ComparisonView starts on the relevant screen tab |
| CardPreview passes `country.code` not full object to AmazonMockup | AmazonMockup expects string code; full object caused blank page crash |
| PhoneFrame shows placeholder, not real mockup | Mobile app screenshots deferred — frame chrome built now |
| All brands get both platforms | Future-proofing; other brand mockups to be added later |

---

## Directions Given

- No changes without explicit permission
- Explain before acting, ask questions before each new phase
- No `npm run build` after edits
- Upload mode: images uploaded on landing page, comparison view shows them
- Mobile app screens (Splash, Home, Search, Product, Cart, Checkout) — screenshots to be added at the end
- Library page cards show live brand mockup as preview image
- Clicking a card goes straight to comparison (no country selection step)

---

## Records of Resistance This Session

| # | Topic | Summary |
|---|-------|---------|
| RoR 3 | Countries checkbox revert | Inline checkbox list rejected; reverted to dropdown with checkboxes inside |
| RoR 4 | Back button placement | Standalone row below nav rejected; moved to context row above mockups |

---

## Successes

- Upload mode fully functional end-to-end: upload → assign → compare
- Platform switcher correctly changes screen tabs and frame type (browser vs phone)
- PhoneFrame chrome looks authentic with all hardware details
- Library page search, filter, and sort all work correctly
- Library cards render live Amazon mockup previews
- Clicking a library card navigates to the right screen in comparison view
- Bug caught and fixed: `country.code` vs full object in AmazonMockup

---

## Current State at Checkpoint

All three features are working. Next steps:
- Add real screenshots for Mobile App platform (all 6 screens × 3 countries)
- Polish visual details as needed
- Wire AI analysis API (deferred from session 1)
