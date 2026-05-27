import { useState, useRef, useEffect } from 'react'
import BrowserFrame from '../mockups/BrowserFrame'
import PhoneFrame from '../mockups/PhoneFrame'
import { ANALYSIS_DATA } from '../../data/analysisData'
import './ComparisonView.css'

const SCREENS_BY_PLATFORM = {
  Website: [
    { id: 'home',     label: 'Home' },
    { id: 'search',   label: 'Search Results' },
    { id: 'product',  label: 'Product Detail' },
    { id: 'cart',     label: 'Cart' },
    { id: 'checkout', label: 'Checkout' },
  ],
  'Mobile App': [
    { id: 'splash',   label: 'Splash Screen' },
    { id: 'home',     label: 'Home' },
    { id: 'search',   label: 'Search Results' },
    { id: 'product',  label: 'Product Detail' },
    { id: 'cart',     label: 'Cart' },
    { id: 'checkout', label: 'Checkout' },
  ],
}

const AVAILABLE_PLATFORMS = ['Website', 'Mobile App']

const ALL_COUNTRIES = [
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵' },
]

const COUNTRIES_BY_BRAND = {
  'Amazon':     ALL_COUNTRIES,
  "McDonald's": ALL_COUNTRIES,
}


export default function ComparisonView({ config, onBack, onLibrary }) {
  const isUpload = config.mode === 'upload'

  // Derive upload screens and countries
  const uploadScreenNames = isUpload
    ? [...new Set(config.uploads.map(u => u.screenName))]
    : []
  const uploadCountries = isUpload
    ? config.uploads.reduce((acc, u) => {
        if (u.country && !acc.find(c => c.code === u.country.code)) acc.push(u.country)
        return acc
      }, [])
    : []

  const [activePlatform, setActivePlatform] = useState('Website')
  const [activeScreen, setActiveScreen] = useState(
    isUpload ? (uploadScreenNames[0] ?? '') :
    (config.initialScreen ?? SCREENS_BY_PLATFORM['Website'][0].id)
  )

  const brand = config.brand || ''
  const industry = config.industry || ''
  const [countries, setCountries] = useState(isUpload ? uploadCountries : (config.countries || []))
  const [addOpen, setAddOpen] = useState(false)
  const addRef = useRef(null)

  const availableToAdd = (COUNTRIES_BY_BRAND[brand] || []).filter(
    c => !countries.find(s => s.code === c.code)
  )
  const canAddCountry = !isUpload && countries.length < 3 && availableToAdd.length > 0

  useEffect(() => {
    const handler = (e) => {
      if (addRef.current && !addRef.current.contains(e.target)) setAddOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const availablePlatforms = isUpload ? [config.platform] : AVAILABLE_PLATFORMS

  const currentScreens = isUpload
    ? uploadScreenNames.map(n => ({ id: n, label: n }))
    : SCREENS_BY_PLATFORM[activePlatform]

  const activeLabel = currentScreens.find(s => s.id === activeScreen)?.label ?? activeScreen

  const handlePlatformChange = (p) => {
    setActivePlatform(p)
    setActiveScreen(SCREENS_BY_PLATFORM[p][0].id)
  }

  return (
    <div className="comparison">

      {/* Nav */}
      <nav className="nav">
        <span className="nav-logo">Cross-Cultural Design</span>
        <div className="nav-links">
          <a href="#" className="nav-link">Compare</a>
          <button className="nav-link nav-link-btn" onClick={onLibrary}>Library</button>
          <a href="#" className="nav-link">About</a>
        </div>
      </nav>

      {/* Screen Tabs */}
      <div className="screen-tabs-bar">
        <div className="tabs-left">
          <span className="tabs-eyebrow">VIEWING SCREEN</span>
          <div className="screen-tabs">
            {currentScreens.map(s => (
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
        <div className="tabs-actions">
          <button className="action-btn">Save</button>
          <button className="action-btn action-btn--primary">Export PDF</button>
        </div>
      </div>

      {/* Context Row */}
      <div className="ctx-header">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <span className="breadcrumb">
          {isUpload ? `${brand || 'Upload'}` : `${industry} › ${brand}`}
        </span>
        <div className="platform-switcher">
          {availablePlatforms.map(p => (
            <button
              key={p}
              className={`platform-switch-btn${activePlatform === p ? ' active' : ''}`}
              onClick={() => !isUpload && handlePlatformChange(p)}
            >
              {p}
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
                <div className="col-meta">{brand || 'Upload'} · {c.code} · 2025</div>
              </div>
            </div>

            {isUpload ? (() => {
              const match = config.uploads.find(
                u => u.screenName === activeScreen && u.country?.code === c.code
              )
              return match ? (
                <div className="upload-frame">
                  <img src={match.previewUrl} alt={match.screenName} />
                </div>
              ) : (
                <div className="upload-frame-empty">No image for this screen</div>
              )
            })() : activePlatform === 'Mobile App' ? (
              <PhoneFrame country={c} screen={activeScreen} />
            ) : (
              <BrowserFrame country={c} screen={activeScreen} brand={brand} />
            )}
          </div>
        ))}

        {canAddCountry && (
          <div className="mockup-col add-col" ref={addRef}>
            <div className="col-header col-header--ghost">
              <span className="col-flag">＋</span>
              <div>
                <div className="col-name">Add a country</div>
                <div className="col-meta">Up to 3 markets</div>
              </div>
            </div>
            <div className="add-frame">
              <div className="add-btn-wrap">
                <button className="add-frame-btn" onClick={() => setAddOpen(v => !v)}>+ Add country</button>
                {addOpen && (
                  <div className="add-country-dropdown">
                    {availableToAdd.map(c => (
                      <button
                        key={c.code}
                        className="add-country-item"
                        onClick={() => { setCountries(prev => [...prev, c]); setAddOpen(false) }}
                      >
                        <span>{c.flag}</span>
                        <span>{c.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Analysis */}
      {(() => {
        const screenKey = activeScreen === 'product' ? 'product' : activeScreen === 'home' ? 'home' : null
        const data = screenKey ? ANALYSIS_DATA[brand]?.[screenKey] : null

        if (!data) return null

        const visibleSections = data.sections.filter(s =>
          countries.some(c => s.countries[c.code])
        )

        return (
          <div className="analysis-section">
            <div className="analysis-header">
              <h2 className="analysis-title">Analysis</h2>
              <span className="analysis-viewing">Showing: {activeLabel}</span>
            </div>

            <div className={`analysis-country-grid cols-${countries.length}`}>
              {countries.map(c => (
                <div key={c.code} className="analysis-country-col">
                  <div className="analysis-country-header">
                    <span className="analysis-country-flag">{c.flag}</span>
                    <span className="analysis-country-name">{c.name}</span>
                  </div>
                  {visibleSections.map(s => {
                    const content = s.countries[c.code]
                    if (!content) return null
                    return (
                      <div key={s.id} className="analysis-block" style={{ '--block-color': s.color }}>
                        <div className="block-label">{s.label}</div>
                        <p className="block-text">{content}</p>
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>

            {data.sources?.length > 0 && (
              <div className="sources-section">
                <div className="sources-heading">Sources</div>
                <ul className="block-sources">
                  {data.sources.map((src, i) => (
                    <li key={i}>
                      <a href={src.href} className="source-link">{src.label} →</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )
      })()}

    </div>
  )
}
