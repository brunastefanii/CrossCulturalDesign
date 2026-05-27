import { useState } from 'react'
import LandingPage from './components/screens/LandingPage'
import ComparisonView from './components/screens/ComparisonView'
import LibraryPage from './components/screens/LibraryPage'

export default function App() {
  const [screen, setScreen] = useState('landing')
  const [config, setConfig] = useState(null)
  const [recentlyViewed, setRecentlyViewed] = useState([])

  const handleCompare = (data) => {
    setConfig(data)
    setScreen('comparison')
    setRecentlyViewed(prev => [{ ...data, id: Date.now() }, ...prev].slice(0, 20))
  }

  if (screen === 'comparison' && config) {
    return <ComparisonView config={config} onBack={() => setScreen('landing')} onLibrary={() => setScreen('library')} />
  }

  if (screen === 'library') {
    return <LibraryPage recentlyViewed={recentlyViewed} onCompare={handleCompare} onBack={() => setScreen('landing')} />
  }

  return <LandingPage onCompare={handleCompare} onLibrary={() => setScreen('library')} />
}
