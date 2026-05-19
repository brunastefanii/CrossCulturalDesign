# AI Direction Log — Cross-Cultural Design

> AI 201 — Project 3: Persons Required
> This log records every AI conversation session: what was asked, what was produced, what was changed/rejected/kept and why.
> Records of Resistance live separately in `claude/checkpoints/records-of-resistance.md`.

---

## Entry Format

```
### Entry [N] — [Date] — [Topic]

**What I asked AI to do:**
**What AI produced:**
**What I kept:**
**What I changed/rejected:**
**Why:**
**Checkpoint:** [YES / NO — link if applicable]
```

---

## Entries

---

### Entry 1 — 2026-05-18 — Project Setup & File Structure

**What I asked AI to do:**
Read docs in `claude/docs/` and create the project file structure for CrossCulturalDesign, mirroring the structure from DemonSlayerGame. Also create the AI Direction Log, Records of Resistance, and checkpoints folder.

**What AI produced:**
- Folder structure: `src/components/panels/`, `src/components/screens/`, `src/assets/audio/`, `src/assets/images/`, `src/data/`, `src/hooks/`, `.github/workflows/`, `claude/checkpoints/`, `claude/design-intent/`
- `AI-Direction-Log.md`
- `records-of-resistance.md`

**What I kept:**
- All directory structure
- `AI-Direction-Log.md`
- `records-of-resistance.md`

**What I changed/rejected:**
- No CLAUDE.md — rules will be followed by AI without a config file

**Why:**
Rules (no changes without permission, explain before acting) are understood by the AI and do not need a CLAUDE.md.

**Checkpoint:** NO

---

### Entry 2 — 2026-05-18 — Project Scaffold + Landing Page

**What I asked AI to do:**
Build the Vite + React project scaffold, GitHub Pages deploy pipeline, and the landing page with comparison builder.

**What AI produced:**
- Full Vite + React scaffold (package.json, vite.config.js, index.html, src/main.jsx, App.jsx, index.css)
- GitHub Pages deploy via `.github/workflows/deploy.yml`
- Landing page: sticky nav, hero section, comparison builder with platform tabs, industry dropdown, brand combobox, countries multi-select with flag chips, Compare button

**What I kept:**
- Everything, with small adjustments to nav text and headline copy

**What I changed/rejected:**
- Nav logo changed from "CCD" to "CROSS-CULTURAL DESIGN" (uppercase)
- Headline changed from "five cultures" to "other cultures"
- Hero alignment: changed to left-aligned per reference image, then reverted back to centered

**Why:**
Centered alignment felt better for the layout after seeing it live.

**Checkpoint:** NO

---

### Entry 3 — 2026-05-18 — Comparison View + Amazon Mockups

**What I asked AI to do:**
Build the full comparison view with browser frames and high-fidelity Amazon mockups for US, Brazil, and Japan across all 5 screens.

**What AI produced:**
- ComparisonView.jsx — context header, screen tabs, dynamic mockup canvas, 8-block analysis section
- BrowserFrame.jsx — macOS-style browser chrome with scale(0.5) viewport
- AmazonMockup.jsx — 5 screens × 3 countries with authentic cultural differences (language, trust signals, density, payment methods)
- Placeholder analysis text for all 8 blocks

**What I kept:**
- Everything

**What I changed/rejected:**
- iframe embedding approach rejected after discussion — coded mockups chosen instead

**Why:**
Amazon blocks iframe embedding via X-Frame-Options. Coded mockups are the current solution; curated screenshots identified as the long-term approach.

**Checkpoint:** YES — checkpoint-01.md

---

---

### Entry 4 — 2026-05-18 — Upload Your Own Mode

**What I asked AI to do:**
Add an "Upload your own" mode to the landing page builder so users can upload their own screenshots and compare them.

**What AI produced:**
- Two tabs on the builder card: Library and Upload your own
- Upload tab: brand name input, platform selector (App/Website/Mobile), conditional URL field, drag-and-drop upload zone, per-image screen name + country assignment
- Comparison view handles upload mode: shows uploaded images per screen tab + country column
- Compare activates when ≥1 image has screen name + country assigned

**What I kept:**
- Everything

**What I changed/rejected:**
- Rejected checkbox list for countries field — reverted to dropdown with checkboxes inside
- Rejected back button placed below nav as its own row — moved it to above the mockup canvas instead

**Why:**
Checkbox list broke form alignment. Back button position felt better near the mockup columns.

**Checkpoint:** NO

---

### Entry 5 — 2026-05-18 — Comparison View UI Fixes + Platform Switcher

**What I asked AI to do:**
Multiple UI fixes to the comparison view, then add a platform switcher (Website / Mobile App) replacing country chips in the context row.

**What AI produced:**
- Nav bar added to comparison view
- Save/Export PDF buttons moved to VIEWING SCREEN row
- Context row simplified: back button + breadcrumb + platform switcher [Website] [Mobile App]
- SCREENS_BY_PLATFORM — different screen tabs per platform (Website: 5 screens, Mobile App: 6 screens including Splash Screen)
- PhoneFrame.jsx — iPhone-style hardware chrome with status bar, dynamic island, home indicator, placeholder viewport
- All brands get both Website and Mobile App platform options
- Upload mode shows single platform chip (no switching)

**What I kept:**
- Everything

**What I changed/rejected:**
- Rejected back button below nav — reverted
- Then re-added context row above mockup canvas (not as sticky header)

**Why:**
Iterating on placement to find what felt right visually.

**Checkpoint:** NO

---

### Entry 6 — 2026-05-18 — Pattern Library Page

**What I asked AI to do:**
Build a Pattern Library page that opens when clicking "Browse library" — sidebar filters, 2-column pattern card grid, search, sort. Clicking a card goes straight to the comparison view.

**What AI produced:**
- LibraryPage.jsx + LibraryPage.css — full new screen
- Left sidebar: Region (with counts), Pattern Type, Dimension filters — single-select with toggle
- Top: "Pattern library" title + search input
- Main: pattern count + active filter label + Sort dropdown (Recently added / Most viewed / A–Z)
- 8 hardcoded Amazon pattern cards with live scaled mockup previews
- Country tags at bottom of each card
- Clicking a card goes to comparison view with pre-set countries + screen
- App.jsx updated to handle 'library' screen state
- "Browse library" hero button + nav link both navigate to library

**What I kept:**
- Everything (after fixing crash)

**What I changed/rejected:**
- Bug fix: CardPreview was passing full country object to AmazonMockup instead of country.code — caused blank page crash

**Why:**
AmazonMockup expects a country code string, not an object. BrowserFrame handles the conversion but CardPreview bypassed it.

**Checkpoint:** YES — checkpoint-02.md

---

## Checkpoint Index

| Checkpoint | Date | Summary |
|-----------|------|---------|
| [checkpoint-01.md](checkpoint-01.md) | 2026-05-18 | Full scaffold + landing page + comparison view with Amazon mockups |
| [checkpoint-02.md](checkpoint-02.md) | 2026-05-18 | Upload mode + platform switcher + PhoneFrame + Pattern Library page |

_[Checkpoint docs live in `claude/checkpoints/`. Add a row here each time one is created.]_

---

_[Add new entries below as they occur throughout the project]_
