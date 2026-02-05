import Hero from './components/Hero'
import Stats from './components/Stats'
import Ecosystem from './components/Ecosystem'

import GameCenter from './components/GameCenter'
import SdkAndPlayerId from './components/SdkAndPlayerId'
import Roadmap from './components/Roadmap'

export default function App() {
  return (
    <div className="overflow-hidden">
      <Hero />
      {/* <Stats /> */}
      <Ecosystem />
      <GameCenter />
      <SdkAndPlayerId />
      <Roadmap />
    </div>
  )
}