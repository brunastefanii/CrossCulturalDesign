import AmazonMockup from './AmazonMockup'
import './BrowserFrame.css'

import amUsHome     from '../../assets/images/amazonus_home.png'
import amBrHome     from '../../assets/images/amazonbr_home.png'
import amJpHome     from '../../assets/images/amazonjp_home.png'
import amUsProduct  from '../../assets/images/amazonus_productpage.png'
import amBrProduct1 from '../../assets/images/amazonbr_productpage1.png'
import amBrProduct2 from '../../assets/images/amazonbr_productpage2.png'
import amJpProduct1 from '../../assets/images/amazonjp_productpage1.png'
import amJpProduct2 from '../../assets/images/amazonjp_productpage2.png'

import mcUsHome from '../../assets/images/mcdonaldsus_home.png'
import mcBrHome from '../../assets/images/mcdonaldsbr_home.png'
import mcJpHome from '../../assets/images/mcdonaldsjp_home.png'

const SCREENSHOTS = {
  'Amazon': {
    US: { home: [amUsHome], product: [amUsProduct] },
    BR: { home: [amBrHome], product: [amBrProduct1, amBrProduct2] },
    JP: { home: [amJpHome], product: [amJpProduct1, amJpProduct2] },
  },
  "McDonald's": {
    US: { home: [mcUsHome] },
    BR: { home: [mcBrHome] },
    JP: { home: [mcJpHome] },
  },
}

const URLS = {
  US: 'amazon.com',
  BR: 'amazon.com.br',
  JP: 'amazon.co.jp',
}

export default function BrowserFrame({ country, screen, brand }) {
  const url = URLS[country.code] || 'amazon.com'
  const shots = SCREENSHOTS[brand]?.[country.code]?.[screen]

  return (
    <div className="browser-frame">
      {/* Chrome bar */}
      <div className="browser-chrome">
        <div className="chrome-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <div className="chrome-nav">
          <button className="chrome-arrow">‹</button>
          <button className="chrome-arrow">›</button>
        </div>
        <div className="chrome-address">
          <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
            <path d="M5 0a3.5 3.5 0 0 0-3.5 3.5C1.5 6.5 5 12 5 12s3.5-5.5 3.5-8.5A3.5 3.5 0 0 0 5 0zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="#94a3b8"/>
          </svg>
          <span className="address-text">https://www.{url}</span>
        </div>
        <div className="chrome-menu">⋮</div>
      </div>

      {/* Viewport */}
      <div className={`browser-viewport${shots ? ' screenshot-mode' : ''}`}>
        {shots ? (
          <div className="screenshot-stack">
            {shots.map((src, i) => (
              <img key={i} src={src} alt="" className="screenshot-img" />
            ))}
          </div>
        ) : brand === 'Amazon' ? (
          <div className="mockup-scale-wrapper">
            <AmazonMockup country={country.code} screen={screen} />
          </div>
        ) : (
          <div className="browser-placeholder">
            <span className="browser-placeholder-label">Screenshot coming soon</span>
            <span className="browser-placeholder-meta">{country.name} · {screen}</span>
          </div>
        )}
      </div>
    </div>
  )
}
