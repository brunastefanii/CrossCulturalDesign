import { useState } from 'react'
import BrowserFrame from '../mockups/BrowserFrame'
import './ComparisonView.css'

const SCREENS = [
  { id: 'home',     label: 'Home' },
  { id: 'search',   label: 'Search Results' },
  { id: 'product',  label: 'Product Detail' },
  { id: 'cart',     label: 'Cart' },
  { id: 'checkout', label: 'Checkout' },
]

const ANALYSIS = [
  {
    id: 'what-changed',
    label: 'What changed and why',
    color: '#3b82f6',
    content: `The U.S. homepage centers a single promotional hero banner with substantial whitespace, prioritizing one clear call-to-action above the fold. The Brazilian version shares the same structural skeleton but surfaces installment pricing (parcelas) and Pix payment badges directly in the hero zone — financial transparency is a primary entry point for trust in Brazil. Japan's homepage replaces the single-hero model entirely with a dense vertical stack of promotional strips, multiple navigational category rows, and tightly packed product cards, treating the homepage as a comprehensive storefront catalog rather than a curated entry.`,
  },
  {
    id: 'rationale',
    label: 'Design rationale',
    color: '#8b5cf6',
    content: `Japan's information density reflects a cultural reading pattern where scanning a broad surface area is part of the purchase decision process — not a side effect of cluttered design. U.S. and European e-commerce conventions evolved toward progressive disclosure and search-first patterns, where the homepage functions as an entry point rather than a destination. Brazil's adaptations address a market reality: parcelamento is not a secondary option but the primary way most purchases are framed and compared. Its absence would register as financial opacity.`,
  },
  {
    id: 'patterns',
    label: 'Patterns',
    color: '#10b981',
    type: 'columns',
    columns: [
      {
        heading: '🇺🇸 United States',
        items: ['Full-width hero banner', 'Progressive disclosure', 'Search-first navigation', 'Above-the-fold single CTA', 'Algorithmic recommendation grid'],
      },
      {
        heading: '🇧🇷 Brazil',
        items: ['Installment pricing surfaced in hero', 'Pix / payment method badges', 'Frete grátis as primary trust signal', 'Same structural skeleton as U.S.', 'Promotional urgency copy'],
      },
      {
        heading: '🇯🇵 Japan',
        items: ['Multi-strip promotional layout', 'Dense category navigation bar', 'Amazon Points visibility', 'Manufacturer authentication badges', 'Stacked product rows without whitespace'],
      },
    ],
  },
  {
    id: 'color-tone',
    label: 'Color & tone',
    color: '#f59e0b',
    content: `All three markets maintain Amazon's core visual system: #131921 navigation, #FF9900 orange accents, and white product cards. Tonal divergence emerges in editorial content: U.S. promotional banners favor lifestyle photography with high-contrast English headlines; Brazilian banners lean into saturated retail graphics typical of Brazilian market communications; Japanese banners deploy smaller type, more visual elements per unit, and product-first imagery over lifestyle photography.`,
  },
  {
    id: 'trust-signals',
    label: 'Trust signals',
    color: '#ef4444',
    content: `U.S.: Prime badge, verified customer review count, "Frequently bought together", third-party seller ratings.\n\nBrazil: Frete grátis indicator, parcelas count ("em 12x sem juros"), Pix cashback badge, official store badge, secure purchase seal.\n\nJapan: Amazon Points balance display, official manufacturer seller verification, precise shipping window ("tomorrow by 8 PM"), detailed product specification visibility from the card level, review count emphasis.`,
  },
  {
    id: 'watch-out',
    label: 'Watch out for',
    color: '#f97316',
    type: 'list',
    items: [
      'Lifting Japan\'s density to a U.S. or European audience reads as visual noise, not thoroughness',
      'Removing installment pricing from the Brazilian version signals financial opacity — users will distrust the site',
      'Translating Japanese micro-copy directly creates register mismatches; JP UI copy uses distinct formality levels',
      'The U.S. sparse hero model feels underdeveloped in Japanese markets — low density reads as low product range',
      'Brazilian promotional urgency copy ("Só hoje!") lands as aggressive in U.S. contexts',
    ],
  },
  {
    id: 'why-works',
    label: 'Why this works',
    color: '#06b6d4',
    content: `Each variant succeeds because it maps to the trust and decision-making expectations of its market. The Japanese homepage's density is a feature: it allows experienced shoppers to make informed comparisons without drilling into individual product pages. The U.S. model relies on search and algorithmic recommendation to do the filtering work — a valid assumption in a market where search behavior is deeply habituated. Brazil's financial transparency is not optional UX polish: parcelamento is how Brazilian consumers fundamentally think about purchase cost, and its absence would undermine the entire checkout funnel.`,
  },
  {
    id: 'sources',
    label: 'Sources',
    color: '#64748b',
    type: 'sources',
    items: [
      { label: 'Nielsen Norman Group — E-Commerce UX: Homepages and Category Pages (2023)', href: '#' },
      { label: 'EBANX — Beyond Borders: Brazil Digital Commerce Report (2024)', href: '#' },
      { label: 'Baymard Institute — International E-Commerce UX Benchmarking (2023)', href: '#' },
      { label: 'Culture & UX — Information Density in East Asian Digital Design (2022)', href: '#' },
    ],
  },
]

export default function ComparisonView({ config, onBack }) {
  const [activeScreen, setActiveScreen] = useState('home')
  const { brand, industry, platform, countries } = config
  const canAddCountry = countries.length < 3
  const activeLabel = SCREENS.find(s => s.id === activeScreen)?.label

  return (
    <div className="comparison">

      {/* Context Header */}
      <header className="ctx-header">
        <div className="ctx-left">
          <button className="back-btn" onClick={onBack}>← Back</button>
          <span className="breadcrumb">{industry} › {brand} › {platform}</span>
          <div className="ctx-chips">
            {countries.map(c => (
              <span key={c.code} className="ctx-chip">
                {c.flag} {c.name}
              </span>
            ))}
            {canAddCountry && (
              <button className="add-country-chip">+ Add country</button>
            )}
          </div>
        </div>
        <div className="ctx-actions">
          <button className="action-btn">Save</button>
          <button className="action-btn action-btn--primary">Export PDF</button>
        </div>
      </header>

      {/* Screen Tabs */}
      <div className="screen-tabs-bar">
        <span className="tabs-eyebrow">VIEWING SCREEN</span>
        <div className="screen-tabs">
          {SCREENS.map(s => (
            <button
              key={s.id}
              className={`screen-tab${activeScreen === s.id ? ' active' : ''}`}
              onClick={() => setActiveScreen(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mockup Canvas */}
      <div className={`mockup-canvas cols-${countries.length}`}>
        {countries.map(c => (
          <div key={c.code} className="mockup-col">
            <div className="col-header">
              <span className="col-flag">{c.flag}</span>
              <div>
                <div className="col-name">{c.name}</div>
                <div className="col-meta">{brand} · {c.code} · 2025</div>
              </div>
            </div>
            <BrowserFrame country={c} screen={activeScreen} />
          </div>
        ))}
        {canAddCountry && (
          <div className="mockup-col add-col">
            <div className="col-header col-header--ghost">
              <span className="col-flag">＋</span>
              <div>
                <div className="col-name">Add a country</div>
                <div className="col-meta">Up to 3 markets</div>
              </div>
            </div>
            <div className="add-frame">
              <button className="add-frame-btn">+ Add country</button>
            </div>
          </div>
        )}
      </div>

      {/* Analysis */}
      <div className="analysis-section">
        <div className="analysis-header">
          <h2 className="analysis-title">Analysis</h2>
          <span className="analysis-viewing">Showing: {activeLabel}</span>
        </div>

        {ANALYSIS.map(block => (
          <div key={block.id} className="analysis-block" style={{ '--block-color': block.color }}>
            <div className="block-label">{block.label}</div>

            {(!block.type || block.type === 'text') && (
              <p className="block-text">{block.content}</p>
            )}

            {block.type === 'list' && (
              <ul className="block-list">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {block.type === 'columns' && (
              <div className="block-columns">
                {block.columns.map(col => (
                  <div key={col.heading} className="block-col">
                    <div className="block-col-heading">{col.heading}</div>
                    <ul className="block-list">
                      {col.items.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {block.type === 'sources' && (
              <ul className="block-sources">
                {block.items.map((src, i) => (
                  <li key={i}>
                    <a href={src.href} className="source-link">{src.label} →</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

    </div>
  )
}
