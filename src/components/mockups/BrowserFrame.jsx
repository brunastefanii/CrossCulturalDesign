import AmazonMockup from './AmazonMockup'
import './BrowserFrame.css'

const URLS = {
  US: 'amazon.com',
  BR: 'amazon.com.br',
  JP: 'amazon.co.jp',
}

export default function BrowserFrame({ country, screen }) {
  const url = URLS[country.code] || 'amazon.com'

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
      <div className="browser-viewport">
        <div className="mockup-scale-wrapper">
          <AmazonMockup country={country.code} screen={screen} />
        </div>
      </div>
    </div>
  )
}
