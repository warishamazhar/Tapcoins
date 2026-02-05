import { motion } from 'framer-motion'
import bg from '../assets/bg-game-center.png'

// ICONS
import market from '../assets/gamemarket.png'
import token from '../assets/gametoken.png'
import nft from '../assets/NFT.png'
import guild from '../assets/phone1.png'

const cards = [
  {
    title: 'Game Market',
    desc: 'A marketplace for discovering,\ndownloading, and playing Web3 games.',
    icon: market,
    rotate: '-6deg',
    gradient: 'from-[#5B2EFF] to-[#3A0CA3]',
  },
  {
    title: 'Game Token\nLaunchPad',
    desc: 'A platform for launching game-specific tokens, enabling developers to fundraise and engage users.',
    icon: token,
    rotate: '-2deg',
    gradient: 'from-[#7B2EFF] to-[#B5179E]',
  },
  {
    title: 'NFT Minting',
    desc: 'Tools for developers to create and distribute in-game assets as NFTs.',
    icon: nft,
    rotate: '2deg',
    gradient: 'from-[#4361EE] to-[#3A0CA3]',
  },
  {
    title: 'TON Game\nGuild Center',
    desc: 'A community hub for game guilds, fostering collaboration and competition.',
    icon: guild,
    rotate: '6deg',
    gradient: 'from-[#5B2EFF] to-[#7209B7]',
  },
]

export default function GameCenter() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-28 md:py-36"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* TITLE */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          TapCoins Game Center
        </h2>

        <p className="mt-4 text-base md:text-lg text-gray-300 leading-relaxed">
          A comprehensive distribution and marketplace platform for Web3 games
        </p>
      </div>

      {/* CARDS */}
      <div className="relative z-10 mt-20 flex flex-col items-center gap-14 md:flex-row md:justify-center px-6">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -14, rotate: 0, scale: 1.06 }}
            transition={{ type: 'spring', stiffness: 200, damping: 14 }}
            className="relative w-[92%] max-w-[320px] md:w-[300px]"
            style={{ transform: `rotate(${card.rotate})` }}
          >
            {/* PIN */}
            <div className="absolute -top-6 left-1/2 z-20 h-10 w-10 -translate-x-1/2 rounded-full bg-gradient-to-br from-orange-400 to-red-500 shadow-xl" />

            {/* CARD */}
            <div
              className={`relative rounded-3xl bg-gradient-to-br ${card.gradient} p-8 text-center shadow-2xl`}
            >
              {/* GLOW */}
              <div className="absolute inset-0 -z-10 rounded-3xl bg-purple-500/40 blur-3xl" />

              {/* ICON */}
              <img
                src={card.icon}
                alt={card.title}
                className="mx-auto mb-6 h-32 w-32 md:h-36 md:w-36 object-contain"
              />

              <h3 className="mb-3 whitespace-pre-line text-xl font-semibold text-white">
                {card.title}
              </h3>

              <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
                {card.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
