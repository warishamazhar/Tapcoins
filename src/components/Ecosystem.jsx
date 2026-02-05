import { motion } from 'framer-motion'
import bg from '../assets/bg-tapcoin.png'
import cardBg from '../assets/cards-bg.png'
import gameCenter from '../assets/game.png'
import sdk from '../assets/sdk.png'
import playerId from '../assets/player-id.png'
import dao from '../assets/dao.png'

// stats cards
const stats = [
  { title: 'Players', value: '15 MILLION +' },
  { title: 'DAU', value: '2 MILLION +' },
  { title: 'COUNTRIES COVERED', value: '200 +' },
]

// ecosystem items (icons will be images later)
const ecosystem = [
  {
    title: 'TapCoins Game Center',
    desc: 'Distribution & Marketplace platform',
    icon: gameCenter,
  },
  {
    title: 'TapCoins SDK',
    desc: 'Marketing & Tracking\nApi for Builders',
     icon: sdk,
  },
  {
    title: 'TapCoins Player ID',
    desc: 'The Unique Decentralized\nID System',
     icon: playerId,
  },
  {
    title: 'TapCoins DAO',
    desc: 'Staking & Earning Protocol',
     icon: dao,
  },
]

export default function Ecosystem() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-32"
      style={{ backgroundImage: `url(${bg})` }}
    >
     {/* TOP TEXT */}
<div className="relative z-10 mx-auto max-w-[620px] px-6 text-center">
  <h2 className="mb-3 text-2xl font-semibold text-white">
    TapCoins
  </h2>

  <p className="text-[12px] leading-relaxed text-gray-300">
    TapCoins is an innovative platform built on the TON network, designed to transform
    <br />
   how users interact with Web3 knowledge and games. We help users explore,
    <br />
   learn, and earn through gamified social interactions while providing developers
    <br />
     with a powerful platform to publish and monetize their games in the Web3 ecosystem.

  </p>
</div>


     {/* STATS CARDS */}
<div className="relative z-10 mt-12 flex justify-center gap-5 px-6">
  {stats.map((item, i) => (
    <motion.div
      key={i}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.25 }}
      className="relative h-[84px] w-[190px] rounded-md border border-white/15 bg-cover bg-center p-3 text-center"
      style={{ backgroundImage: `url(${cardBg})` }}
    >
      <div className="text-[9px] uppercase tracking-widest text-gray-300">
        {item.title}
      </div>

      <div className="mt-1.5 text-base font-extrabold text-yellow-400">
        {item.value}
      </div>
    </motion.div>
  ))}
</div>


      {/* ECOSYSTEM TITLE */}
      <div className="relative z-10 mt-28 text-center">
        <h3 className="text-2xl font-semibold text-white">
          TapCoins Eco-System
        </h3>
      </div>

      {/* ECOSYSTEM GRID */}
   <div className="relative z-10 mx-auto mt-14 grid max-w-5xl place-items-center grid-cols-1 gap-8 px-6 md:grid-cols-4">
  {ecosystem.map((item, i) => (
    <motion.div
      key={i}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="text-center"
    >
      {/* ICON */}
    <motion.div
  animate={{ y: [0, -8, 0] }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
  whileHover={{ y: -14, scale: 1.06 }}
  className="relative mx-auto mb-3 flex h-40 w-40 items-center justify-center"
>
  {/* Neon / royal glow */}
  <motion.div
    className="absolute inset-0 rounded-full bg-[#00E5FF] opacity-45 blur-[60px]"
    whileHover={{ opacity: 0.7 }}
  />
  <motion.div
    className="absolute inset-0 rounded-full bg-[#5a7cff] opacity-35 blur-[120px]"
    whileHover={{ opacity: 0.55 }}
  />

  {/* Icon */}
  <img
    src={item.icon}
    alt={item.title}
    className="relative z-10 h-28 w-28 object-contain"
  />
</motion.div>



      <h4 className="mb-1 text-sm font-semibold text-yellow-400">
        {item.title}
      </h4>

      <p className="text-[11px] leading-snug text-gray-300 whitespace-pre-line">
        {item.desc}
      </p>
    </motion.div>
  ))}
</div>


    </section>
  )
}
