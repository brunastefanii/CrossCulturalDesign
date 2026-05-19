import { useState } from 'react'
import LandingPage from './components/screens/LandingPage'
import ComparisonView from './components/screens/ComparisonView'
import LibraryPage from './components/screens/LibraryPage'

export default function App() {
  const [screen, setScreen] = useState('landing')
  const [config, setConfig] = useState(null)

  const handleCompare = (data) => {
    setConfig(data)
    setScreen('comparison')
  }

  if (screen === 'comparison' && config) {
    return <ComparisonView config={config} onBack={() => setScreen('landing')} />
  }

  if (screen === 'library') {
    return <LibraryPage onCompare={handleCompare} onBack={() => setScreen('landing')} />
  }

  return <LandingPage onCompare={handleCompare} onLibrary={() => setScreen('library')} />
}
