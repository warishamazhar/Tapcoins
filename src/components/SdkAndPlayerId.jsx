import { motion } from 'framer-motion'
import bg from '../assets/bg-sdk.png'
import builderSdk from '../assets/builder-sdk.png'
import playerId from '../assets/player-id1.png'
import daoImage from '../assets/dao1.png'

export default function SdkAndPlayerId() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-28 md:py-40"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute -top-48 -left-48 h-[700px] w-[700px] rounded-full bg-[#5a7cff]/30 blur-[180px]" />
      <div className="pointer-events-none absolute bottom-[-240px] right-[-240px] h-[800px] w-[800px] rounded-full bg-[#00E5FF]/25 blur-[200px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* ================= SDK BLOCK ================= */}
        <div className="grid grid-cols-1 items-center gap-20 md:grid-cols-2 md:justify-items-center">

          {/* LEFT TEXT */}
          <motion.div
            className="max-w-xl text-center md:text-left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <h3 className="text-4xl md:text-5xl font-extrabold text-white">
              TapCoins Builder SDK
            </h3>

            <p className="mt-4 text-lg md:text-xl text-gray-300">
              An easy-to-use marketing and tracking API
            </p>

            <ul className="mt-8 space-y-5 text-lg text-gray-300">
              <li className="flex gap-4 justify-center md:justify-start">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#5a7cff]" />
                Simplifies the integration of TON Network features into games.
              </li>
              <li className="flex gap-4 justify-center md:justify-start">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#5a7cff]" />
                Enables developers to tap into TapCoins’ large user base and ecosystem,
                accelerating growth and engagement.
              </li>
            </ul>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative flex justify-center"
          >
            <div className="absolute h-[380px] w-[380px] md:h-[520px] md:w-[520px] rounded-full bg-[#5a7cff]/35 blur-[160px]" />
            <img
              src={builderSdk}
              alt="TapCoins Builder SDK"
              className="relative z-10 w-[360px] md:w-[520px]"
            />
          </motion.div>
        </div>

        {/* ================= PLAYER ID BLOCK ================= */}
        <div className="mt-36 grid grid-cols-1 items-center gap-20 md:grid-cols-2 md:justify-items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative flex justify-center"
          >
            <div className="absolute h-[420px] w-[420px] md:h-[560px] md:w-[560px] rounded-full bg-[#00E5FF]/30 blur-[180px]" />
            <img
              src={playerId}
              alt="TapCoins Player ID"
              className="relative z-10 w-[360px] md:w-[560px]"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="max-w-xl text-center md:text-left"
          >
            <h3 className="text-4xl md:text-5xl font-extrabold text-white">
              TapCoins Player ID
            </h3>

            <p className="mt-4 text-lg md:text-xl text-gray-300">
              A decentralized ID system built on the TON network
            </p>

            <ul className="mt-8 space-y-5 text-lg text-gray-300">
              <li className="flex gap-4 justify-center md:justify-start">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#00E5FF]" />
                Allows users to create a unified ID to track progress and rewards.
              </li>
              <li className="flex gap-4 justify-center md:justify-start">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#00E5FF]" />
                Enhances user retention across games and activities.
              </li>
            </ul>

            <h4 className="mt-10 text-xl font-semibold text-yellow-400">
              Benefits of TapCoins Player ID
            </h4>

            <ul className="mt-6 space-y-4 text-lg text-gray-300">
              {[
                'Free AirDrop (Token / NFT) from Web3 Game projects.',
                'Unique account growth system.',
                'Build on-chain reputation & credit.',
                'Future Web3 login incentives.',
              ].map((item, i) => (
                <li key={i} className="flex gap-4 justify-center md:justify-start">
                  <span className="text-yellow-400 text-xl">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ================= DAO BLOCK ================= */}
        <div className="mt-36 grid grid-cols-1 items-center gap-20 md:grid-cols-2 md:justify-items-center">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="max-w-xl text-center md:text-left"
          >
            <h3 className="text-4xl md:text-5xl font-extrabold text-white">
              TapCoins DAO
            </h3>

            <p className="mt-4 text-lg md:text-xl text-gray-300">
              A staking and earning protocol
            </p>

            <div className="mt-8 rounded-2xl bg-white/10 p-6 text-lg text-gray-300 backdrop-blur">
              Stake tokens to earn rewards, NFTs, and contribute to the growth of
              the TapCoins ecosystem.
            </div>

            <ul className="mt-8 space-y-5 text-lg text-gray-300">
              <li className="flex gap-4 justify-center md:justify-start">
                <span className="text-yellow-400 text-xl">✓</span>
                Community governance & decision making
              </li>
              <li className="flex gap-4 justify-center md:justify-start">
                <span className="text-yellow-400 text-xl">✓</span>
                Encourages long-term ecosystem investment
              </li>
            </ul>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative flex justify-center"
          >
            <div className="absolute h-[420px] w-[420px] md:h-[560px] md:w-[560px] rounded-full bg-[#7a5cff]/35 blur-[180px]" />
            <img
              src={daoImage}
              alt="TapCoins DAO"
              className="relative z-10 w-[360px] md:w-[560px]"
            />
          </motion.div>
        </div>

      </div>
    </section>
  )
}
