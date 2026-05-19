import { useState, useMemo } from 'react'
import AmazonMockup from '../mockups/AmazonMockup'
import './LibraryPage.css'

const US = { code: 'US', name: 'United States', flag: '🇺🇸' }
const BR = { code: 'BR', name: 'Brazil', flag: '🇧🇷' }
const JP = { code: 'JP', name: 'Japan', flag: '🇯🇵' }

const PATTERNS = [
  {
    id: 1,
    title: 'Homepage hero vs dense catalog',
    description: 'Single promotional hero gives way to a dense multi-strip layout treating the homepage as a full catalog.',
    brand: 'Amazon', industry: 'E-commerce', platform: 'Website', screen: 'home',
    countries: [US, JP],
    regions: ['East Asia'], patternTypes: ['Navigation'], dimensions: ['Density'],
  },
  {
    id: 2,
    title: 'Installment pricing at entry',
    description: 'Parcelamento and PIX badges surface in the hero zone — financial transparency is a primary trust signal.',
    brand: 'Amazon', industry: 'E-commerce', platform: 'Website', screen: 'home',
    countries: [US, BR],
    regions: ['Latin America'], patternTypes: ['Payments'], dimensions: ['Trust signals'],
  },
  {
    id: 3,
    title: 'Three-market homepage',
    description: 'Whitespace, installment pricing and catalog density across US, Brazil and Japan simultaneously.',
    brand: 'Amazon', industry: 'E-commerce', platform: 'Website', screen: 'home',
    countries: [US, BR, JP],
    regions: ['Latin America', 'East Asia'], patternTypes: ['Navigation'], dimensions: ['Density', 'Trust signals'],
  },
  {
    id: 4,
    title: 'Payment methods at checkout',
    description: 'PIX as primary method in Brazil; multiple payment options adapt per market at checkout.',
    brand: 'Amazon', industry: 'E-commerce', platform: 'Website', screen: 'checkout',
    countries: [US, BR],
    regions: ['Latin America'], patternTypes: ['Payments'], dimensions: ['Trust signals'],
  },
  {
    id: 5,
    title: 'Product trust signals',
    description: 'Manufacturer verification badges, Amazon Points and star ratings adapt per market on product pages.',
    brand: 'Amazon', industry: 'E-commerce', platform: 'Website', screen: 'product',
    countries: [US, JP],
    regions: ['East Asia'], patternTypes: ['Social proof'], dimensions: ['Trust signals'],
  },
  {
    id: 6,
    title: 'Search density comparison',
    description: 'Product grid density and scan patterns differ significantly across US and Japanese search results.',
    brand: 'Amazon', industry: 'E-commerce', platform: 'Website', screen: 'search',
    countries: [US, JP],
    regions: ['East Asia'], patternTypes: ['Navigation'], dimensions: ['Density'],
  },
  {
    id: 7,
    title: 'Cart — points vs subtotal',
    description: 'Amazon Points and gift wrapping surface in Japan; US cart focuses on subtotal and Prime savings.',
    brand: 'Amazon', industry: 'E-commerce', platform: 'Website', screen: 'cart',
    countries: [US, JP],
    regions: ['East Asia'], patternTypes: ['Payments'], dimensions: ['Trust signals'],
  },
  {
    id: 8,
    title: 'Search results — US vs Brazil',
    description: 'Installment pricing on every search card in Brazil vs. clean price display in the US.',
    brand: 'Amazon', industry: 'E-commerce', platform: 'Website', screen: 'search',
    countries: [US, BR],
    regions: ['Latin America'], patternTypes: ['Navigation'], dimensions: ['Trust signals'],
  },
]

const REGIONS = ['East Asia', 'Latin America', 'MENA', 'N. Europe', 'South Asia', 'W. Africa']
const PATTERN_TYPES = ['Navigation', 'Payments', 'Forms', 'Onboarding', 'Error states', 'Social proof']
const DIMENSIONS = ['Color', 'Typography', 'Density', 'Trust signals', 'Tone of voice']
const SORT_OPTIONS = ['Recently added', 'Most viewed', 'A–Z']

function CardPreview({ screen, country }) {
  return (
    <div className="card-preview">
      <div className="card-preview-inner">
        <AmazonMockup country={country.code} screen={screen} />
      </div>
    </div>
  )
}

export default function LibraryPage({ onCompare, onBack }) {
  const [selectedRegion, setSelectedRegion] = useState(null)
  const [selectedPatternType, setSelectedPatternType] = useState(null)
  const [selectedDimension, setSelectedDimension] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [sort, setSort] = useState('Recently added')

  const regionCounts = useMemo(() => {
    const counts = {}
    PATTERNS.forEach(p => p.regions.forEach(r => { counts[r] = (counts[r] || 0) + 1 }))
    return counts
  }, [])

  const filtered = useMemo(() => {
    let list = PATTERNS.filter(p => {
      if (searchQuery && !p.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !p.description.toLowerCase().includes(searchQuery.toLowerCase())) return false
      if (selectedRegion && !p.regions.includes(selectedRegion)) return false
      if (selectedPatternType && !p.patternTypes.includes(selectedPatternType)) return false
      if (selectedDimension && !p.dimensions.includes(selectedDimension)) return false
      return true
    })
    if (sort === 'A–Z') list = [...list].sort((a, b) => a.title.localeCompare(b.title))
    return list
  }, [searchQuery, selectedRegion, selectedPatternType, selectedDimension, sort])

  const activeFilters = [selectedRegion, selectedPatternType].filter(Boolean)
  const headerLabel = `${filtered.length} pattern${filtered.length !== 1 ? 's' : ''}${activeFilters.map(f => ' · ' + f).join('')}`

  const toggle = (val, current, setter) => setter(current === val ? null : val)

  return (
    <div className="library-page">

      {/* Nav */}
      <nav className="nav">
        <span className="nav-logo">Cross-Cultural Design</span>
        <div className="nav-links">
          <a href="#" className="nav-link" onClick={e => { e.preventDefault(); onBack() }}>Compare</a>
          <a href="#" className="nav-link nav-link--active">Library</a>
          <a href="#" className="nav-link">About</a>
        </div>
      </nav>

      {/* Page Header */}
      <div className="library-page-header">
        <h1 className="library-title">Pattern library</h1>
        <div className="library-search-wrap">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="library-search-icon">
            <circle cx="6" cy="6" r="4.5" stroke="#94a3b8" strokeWidth="1.5"/>
            <path d="M10 10l2.5 2.5" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <input
            className="library-search"
            placeholder={`Search ${PATTERNS.length} patterns…`}
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Layout */}
      <div className="library-layout">

        {/* Sidebar */}
        <aside className="library-sidebar">

          <div className="filter-section">
            <span className="filter-heading">REGION</span>
            {REGIONS.map(r => (
              <button
                key={r}
                className={`filter-item${selectedRegion === r ? ' active' : ''}`}
                onClick={() => toggle(r, selectedRegion, setSelectedRegion)}
              >
                <span>{r}</span>
                <span className="filter-count">{regionCounts[r] || 0}</span>
              </button>
            ))}
          </div>

          <div className="filter-section">
            <span className="filter-heading">PATTERN TYPE</span>
            {PATTERN_TYPES.map(t => (
              <button
                key={t}
                className={`filter-item${selectedPatternType === t ? ' active' : ''}`}
                onClick={() => toggle(t, selectedPatternType, setSelectedPatternType)}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="filter-section">
            <span className="filter-heading">DIMENSION</span>
            {DIMENSIONS.map(d => (
              <button
                key={d}
                className={`filter-item${selectedDimension === d ? ' active' : ''}`}
                onClick={() => toggle(d, selectedDimension, setSelectedDimension)}
              >
                {d}
              </button>
            ))}
          </div>

        </aside>

        {/* Main */}
        <main className="library-main">

          <div className="library-main-header">
            <span className="library-count">{headerLabel}</span>
            <div className="library-sort">
              <span className="sort-label">Sort:</span>
              <select
                className="sort-select"
                value={sort}
                onChange={e => setSort(e.target.value)}
              >
                {SORT_OPTIONS.map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
          </div>

          <div className="pattern-grid">
            {filtered.length > 0 ? filtered.map(p => (
              <div
                key={p.id}
                className="pattern-card"
                onClick={() => onCompare({
                  mode: 'library',
                  brand: p.brand,
                  industry: p.industry,
                  platform: p.platform,
                  countries: p.countries,
                  initialScreen: p.screen,
                })}
              >
                <CardPreview screen={p.screen} country={p.countries[0]} />
                <div className="card-body">
                  <h3 className="card-title">{p.title}</h3>
                  <p className="card-description">{p.description}</p>
                  <div className="card-tags">
                    {p.countries.map(c => (
                      <span key={c.code} className="card-tag">{c.flag} {c.name}</span>
                    ))}
                  </div>
                </div>
              </div>
            )) : (
              <div className="library-empty">No patterns match your filters.</div>
            )}
          </div>

        </main>
      </div>
    </div>
  )
}
