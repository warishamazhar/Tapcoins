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
  { title: 'Countries Covered', value: '200 +' },
]

// ecosystem items
const ecosystem = [
  {
    title: 'TapCoins Game Center',
    desc: 'Distribution & Marketplace platform',
    icon: gameCenter,
  },
  {
    title: 'TapCoins SDK',
    desc: 'Marketing & Tracking\nAPI for Builders',
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
      className="relative overflow-hidden bg-cover bg-center py-28"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* TOP TEXT */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-4 text-4xl md:text-5xl font-extrabold text-white">
          TapCoins
        </h2>

        <p className="text-base md:text-lg leading-relaxed text-gray-300">
          TapCoins is an innovative platform built on the TON network, designed to transform
          how users interact with Web3 knowledge and games.
          We help users explore, learn, and earn through gamified social interactions
          while providing developers with a powerful platform to publish and monetize
          their games in the Web3 ecosystem.
        </p>
      </div>

      {/* STATS CARDS */}
      <div className="relative z-10 mt-16 flex flex-wrap justify-center gap-8 px-6">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.25 }}
            className="relative h-[120px] w-[260px] rounded-xl border border-white/20 bg-cover bg-center p-6 text-center"
            style={{ backgroundImage: `url(${cardBg})` }}
          >
            <div className="text-xs uppercase tracking-widest text-gray-300">
              {item.title}
            </div>

            <div className="mt-3 text-2xl font-extrabold text-yellow-400">
              {item.value}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ECOSYSTEM TITLE */}
      <div className="relative z-10 mt-32 text-center">
        <h3 className="text-4xl md:text-5xl font-extrabold text-white">
          TapCoins Eco-System
        </h3>
      </div>

      {/* ECOSYSTEM GRID */}
      <div className="relative z-10 mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-14 px-6 md:grid-cols-4">
        {ecosystem.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
            className="text-center"
          >
            {/* ICON */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ y: -18, scale: 1.08 }}
              className="relative mx-auto mb-6 flex h-56 w-56 items-center justify-center"
            >
              {/* Glow */}
              <motion.div
                className="absolute inset-0 rounded-full bg-[#00E5FF] opacity-50 blur-[80px]"
                whileHover={{ opacity: 0.75 }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-[#5a7cff] opacity-40 blur-[150px]"
                whileHover={{ opacity: 0.6 }}
              />

              <img
                src={item.icon}
                alt={item.title}
                className="relative z-10 h-36 w-36 object-contain"
              />
            </motion.div>

            <h4 className="mb-3 text-xl font-semibold text-yellow-400">
              {item.title}
            </h4>

            <p className="text-base leading-relaxed text-gray-300 whitespace-pre-line">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
