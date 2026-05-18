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

## Checkpoint Index

| Checkpoint | Date | Summary |
|-----------|------|---------|
| [checkpoint-01.md](checkpoint-01.md) | 2026-05-18 | Full scaffold + landing page + comparison view with Amazon mockups |

_[Checkpoint docs live in `claude/checkpoints/`. Add a row here each time one is created.]_

---

_[Add new entries below as they occur throughout the project]_
