import { useState } from 'react'
import LandingPage from './components/screens/LandingPage'
import ComparisonView from './components/screens/ComparisonView'

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

  return <LandingPage onCompare={handleCompare} />
}
