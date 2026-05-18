import { useState, useRef, useEffect } from 'react'
import './LandingPage.css'

const BRANDS_BY_INDUSTRY = {
  Finance: ['Chase', 'PayPal', 'Revolut', 'Wise', 'Stripe'],
  Travel: ['Airbnb', 'Uber', 'Booking.com', 'Expedia'],
  Fitness: ['Nike', 'Peloton', 'Strava', 'MyFitnessPal'],
  'E-commerce': ['Amazon', 'eBay', 'Etsy', 'Shopify'],
  Health: ['Teladoc', 'Hims', 'One Medical', 'Babylon'],
  Social: ['Instagram', 'TikTok', 'WhatsApp', 'WeChat'],
}

const COUNTRIES = [
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: 'FR', name: 'France', flag: '🇫🇷' },
  { code: 'CN', name: 'China', flag: '🇨🇳' },
  { code: 'IN', name: 'India', flag: '🇮🇳' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'KR', name: 'South Korea', flag: '🇰🇷' },
  { code: 'MX', name: 'Mexico', flag: '🇲🇽' },
]

const PLATFORMS = [
  { id: 'Mobile', icon: '📱' },
  { id: 'Website', icon: '🖥' },
  { id: 'Kiosk', icon: '🏧' },
]

const INDUSTRIES = ['Finance', 'Travel', 'Fitness', 'E-commerce', 'Health', 'Social']

export default function LandingPage({ onCompare }) {
  const [platform, setPlatform] = useState('Mobile')
  const [industry, setIndustry] = useState('')
  const [brand, setBrand] = useState('')
  const [brandSearch, setBrandSearch] = useState('')
  const [brandOpen, setBrandOpen] = useState(false)
  const [countries, setCountries] = useState([])
  const [countryOpen, setCountryOpen] = useState(false)

  const brandRef = useRef(null)
  const countryRef = useRef(null)

  const filteredBrands = industry
    ? (BRANDS_BY_INDUSTRY[industry] || []).filter(b =>
        b.toLowerCase().includes(brandSearch.toLowerCase())
      )
    : []

  const toggleCountry = (country) => {
    setCountries(prev => {
      const exists = prev.find(c => c.code === country.code)
      if (exists) return prev.filter(c => c.code !== country.code)
      if (prev.length >= 3) return prev
      return [...prev, country]
    })
  }

  const removeCountry = (code, e) => {
    e.stopPropagation()
    setCountries(prev => prev.filter(c => c.code !== code))
  }

  useEffect(() => {
    const handler = (e) => {
      if (brandRef.current && !brandRef.current.contains(e.target)) setBrandOpen(false)
      if (countryRef.current && !countryRef.current.contains(e.target)) setCountryOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const canCompare = countries.length > 0

  const handleCompare = () => {
    if (canCompare) onCompare({ platform, industry, brand, countries })
  }

  return (
    <div className="landing">

      {/* Nav */}
      <nav className="nav">
        <span className="nav-logo">Cross-Cultural Design</span>
        <div className="nav-links">
          <a href="#builder" className="nav-link">Compare</a>
          <a href="#" className="nav-link">Library</a>
          <a href="#" className="nav-link">About</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <span className="eyebrow">Cross-Cultural Design, Side by Side</span>
          <h1 className="headline">
            See how the same screen<br />lives in other cultures.
          </h1>
          <p className="subhead">
            Compare interfaces globally, study the patterns, and stress-test
            your own designs against expectations in any market.
          </p>
          <div className="hero-ctas">
            <a href="#builder" className="btn-primary">Start a comparison</a>
            <button className="btn-secondary">Browse library</button>
          </div>
        </div>
      </section>

      {/* Comparison Builder */}
      <section className="builder-section" id="builder">
        <div className="builder-card">

          <div className="builder-header">
            <span className="builder-label">Build a comparison</span>
          </div>

          {/* Platform Tabs */}
          <div className="platform-tabs">
            {PLATFORMS.map(({ id, icon }) => (
              <button
                key={id}
                className={`platform-tab${platform === id ? ' active' : ''}`}
                onClick={() => setPlatform(id)}
              >
                <span className="tab-icon">{icon}</span>
                {id}
              </button>
            ))}
          </div>

          {/* Form */}
          <div className="builder-form">

            {/* Industry */}
            <div className="field">
              <label className="field-label">Industry</label>
              <select
                className="field-select"
                value={industry}
                onChange={e => {
                  setIndustry(e.target.value)
                  setBrand('')
                  setBrandSearch('')
                }}
              >
                <option value="">Select industry</option>
                {INDUSTRIES.map(i => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
            </div>

            {/* Brand */}
            <div className="field" ref={brandRef}>
              <label className="field-label">Brand / Company</label>
              <div
                className={`field-combobox${brandOpen ? ' open' : ''}${!industry ? ' disabled' : ''}`}
                onClick={() => industry && setBrandOpen(v => !v)}
              >
                <span className={`combobox-value${!brand ? ' placeholder' : ''}`}>
                  {brand || (industry ? 'Search brands…' : 'Select industry first')}
                </span>
                <svg className="combobox-chevron" width="12" height="7" viewBox="0 0 12 7" fill="none">
                  <path d="M1 1l5 4.5 5-4.5" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                {brandOpen && (
                  <div className="dropdown" onClick={e => e.stopPropagation()}>
                    <input
                      className="dropdown-search"
                      placeholder="Search…"
                      value={brandSearch}
                      onChange={e => setBrandSearch(e.target.value)}
                      autoFocus
                    />
                    <div className="dropdown-list">
                      {filteredBrands.length > 0 ? filteredBrands.map(b => (
                        <div
                          key={b}
                          className={`dropdown-item${brand === b ? ' selected' : ''}`}
                          onClick={() => { setBrand(b); setBrandOpen(false); setBrandSearch('') }}
                        >
                          {b}
                          {brand === b && <span className="item-check">✓</span>}
                        </div>
                      )) : (
                        <div className="dropdown-empty">No brands found</div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Countries */}
            <div className="field" ref={countryRef}>
              <label className="field-label">
                Countries to compare
                <span className="field-counter">{countries.length} of 3 selected</span>
              </label>
              <div
                className={`countries-trigger${countryOpen ? ' open' : ''}`}
                onClick={() => setCountryOpen(v => !v)}
              >
                {countries.length > 0 ? (
                  <div className="chips">
                    {countries.map(c => (
                      <span key={c.code} className="chip">
                        {c.flag} {c.name}
                        <button className="chip-x" onClick={(e) => removeCountry(c.code, e)}>×</button>
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="combobox-value placeholder">Select up to 3 countries…</span>
                )}
                <svg className="combobox-chevron" width="12" height="7" viewBox="0 0 12 7" fill="none" style={{ flexShrink: 0 }}>
                  <path d="M1 1l5 4.5 5-4.5" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                {countryOpen && (
                  <div className="dropdown" onClick={e => e.stopPropagation()}>
                    <div className="dropdown-list">
                      {COUNTRIES.map(c => {
                        const selected = countries.some(s => s.code === c.code)
                        const maxed = !selected && countries.length >= 3
                        return (
                          <div
                            key={c.code}
                            className={`dropdown-item${selected ? ' selected' : ''}${maxed ? ' maxed' : ''}`}
                            onClick={() => !maxed && toggleCountry(c)}
                          >
                            <span>{c.flag} {c.name}</span>
                            {selected && <span className="item-check">✓</span>}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Compare */}
            <div className="field field-action">
              <button
                className={`btn-compare${canCompare ? ' ready' : ''}`}
                onClick={handleCompare}
                disabled={!canCompare}
              >
                Compare →
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
