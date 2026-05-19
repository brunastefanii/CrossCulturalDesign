import './PhoneFrame.css'

export default function PhoneFrame({ country, screen }) {
  return (
    <div className="phone-outer">
      <div className="phone-chrome">
        <div className="phone-screen-area">

          {/* Status Bar */}
          <div className="phone-status-bar">
            <span className="phone-time">9:41</span>
            <div className="phone-island" />
            <div className="phone-status-right">
              <span className="signal-bars">
                <i /><i /><i /><i />
              </span>
              <svg className="wifi-svg" width="16" height="12" viewBox="0 0 16 12" fill="white">
                <path d="M8 9a1.5 1.5 0 110 3A1.5 1.5 0 018 9z"/>
                <path d="M4.2 6.2C5.3 5.1 6.6 4.5 8 4.5s2.7.6 3.8 1.7l1.1-1.1C11.5 3.6 9.8 3 8 3s-3.5.6-4.9 2.1l1.1 1.1z" opacity=".6"/>
                <path d="M1.3 3.3C3 1.6 5.4.5 8 .5s5 1.1 6.7 2.8L16 2C14 .7 11.1 0 8 0S2 .7 0 2l1.3 1.3z" opacity=".3"/>
              </svg>
              <div className="phone-battery">
                <div className="battery-body"><div className="battery-fill" /></div>
                <div className="battery-cap" />
              </div>
            </div>
          </div>

          {/* Viewport */}
          <div className="phone-viewport">
            <div className="phone-placeholder">
              <span className="phone-placeholder-label">Screenshot coming soon</span>
              <span className="phone-placeholder-meta">{country?.name} · {screen}</span>
            </div>
          </div>

          {/* Home Bar */}
          <div className="phone-home-bar">
            <div className="home-indicator" />
          </div>

        </div>
      </div>
    </div>
  )
}
