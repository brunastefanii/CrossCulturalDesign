import { useState, useMemo } from 'react'
import AmazonMockup from '../mockups/AmazonMockup'
import './LibraryPage.css'

import amUsHome     from '../../assets/images/amazonus_home.png'
import amBrHome     from '../../assets/images/amazonbr_home.png'
import amJpHome     from '../../assets/images/amazonjp_home.png'
import amUsProduct  from '../../assets/images/amazonus_productpage.png'
import amBrProduct1 from '../../assets/images/amazonbr_productpage1.png'
import amJpProduct1 from '../../assets/images/amazonjp_productpage1.png'
import mcUsHome from '../../assets/images/mcdonaldsus_home.png'
import mcBrHome from '../../assets/images/mcdonaldsbr_home.png'
import mcJpHome from '../../assets/images/mcdonaldsjp_home.png'

const CARD_IMAGES = {
  'Amazon': {
    US: { home: amUsHome, product: amUsProduct },
    BR: { home: amBrHome, product: amBrProduct1 },
    JP: { home: amJpHome, product: amJpProduct1 },
  },
  "McDonald's": {
    US: { home: mcUsHome },
    BR: { home: mcBrHome },
    JP: { home: mcJpHome },
  },
}

function CardPreview({ brand, screen, countries }) {
  const country = countries?.[0]
  const img = CARD_IMAGES[brand]?.[country?.code]?.[screen]

  if (img) {
    return (
      <div className="card-preview">
        <img src={img} alt="" className="card-preview-screenshot" />
      </div>
    )
  }

  if (brand === 'Amazon' && country) {
    return (
      <div className="card-preview">
        <div className="card-preview-inner">
          <AmazonMockup country={country.code} screen={screen} />
        </div>
      </div>
    )
  }

  return <div className="card-preview card-preview--empty" />
}

const REGIONS = ['East Asia', 'Latin America', 'MENA', 'N. Europe', 'South Asia', 'W. Africa']
const PATTERN_TYPES = ['Navigation', 'Payments', 'Forms', 'Onboarding', 'Error states', 'Social proof']
const DIMENSIONS = ['Color', 'Typography', 'Density', 'Trust signals', 'Tone of voice']
const SORT_OPTIONS = ['Recently viewed', 'A–Z']

export default function LibraryPage({ recentlyViewed, onCompare, onBack }) {
  const [selectedRegion, setSelectedRegion] = useState(null)
  const [selectedPatternType, setSelectedPatternType] = useState(null)
  const [selectedDimension, setSelectedDimension] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [sort, setSort] = useState('Recently viewed')

  const filtered = useMemo(() => {
    let list = recentlyViewed.filter(p => {
      if (!searchQuery) return true
      return (p.brand || '').toLowerCase().includes(searchQuery.toLowerCase())
    })
    if (sort === 'A–Z') list = [...list].sort((a, b) => (a.brand || '').localeCompare(b.brand || ''))
    return list
  }, [recentlyViewed, searchQuery, sort])

  const headerLabel = `${filtered.length} comparison${filtered.length !== 1 ? 's' : ''}`

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
            placeholder="Search by brand…"
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
                onClick={() => onCompare(p)}
              >
                <CardPreview brand={p.brand} screen={p.initialScreen || 'home'} countries={p.countries} />
                <div className="card-body">
                  <h3 className="card-title">{p.brand || 'Upload'}</h3>
                  <p className="card-description">{p.platform} · {p.initialScreen || 'Home'}</p>
                  <div className="card-tags">
                    {(p.countries || []).map(c => (
                      <span key={c.code} className="card-tag">{c.flag} {c.name}</span>
                    ))}
                  </div>
                </div>
              </div>
            )) : (
              <div className="library-empty">No comparisons viewed yet. Start a comparison to see it here.</div>
            )}
          </div>

        </main>
      </div>
    </div>
  )
}
