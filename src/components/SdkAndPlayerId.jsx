import { motion } from 'framer-motion'
import bg from '../assets/bg-sdk.png'
import builderSdk from '../assets/builder-sdk.png'
import playerId from '../assets/player-id1.png'
import daoImage from '../assets/dao1.png'


export default function SdkAndPlayerId() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-32"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#5a7cff]/25 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-[-200px] right-[-200px] h-[700px] w-[700px] rounded-full bg-[#00E5FF]/20 blur-[180px]" />

     <div className="relative z-10 mx-auto max-w-5xl px-6">


        {/* ================= SDK BLOCK ================= */}
      <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:justify-items-center">

          {/* LEFT TEXT */}
          <motion.div
           className="max-w-md"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white">
              TapCoins Builder SDK
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              An easy-to-use marketing and tracking API
            </p>

            <ul className="mt-6 space-y-3 text-sm text-gray-300">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#5a7cff]" />
                Simplifies the integration of TON Network features into games.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#5a7cff]" />
                Enables developers to tap into TapCoins' large user base and ecosystem,
                facilitating growth and engagement.
              </li>
            </ul>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* IMAGE GLOW */}
            <div className="absolute inset-0 h-[360px] w-[360px] rounded-full bg-[#5a7cff]/30 blur-[120px]" />
            <img
              src={builderSdk}
              alt="TapCoins Builder SDK"
              className="relative z-10 w-[360px] md:w-[420px]"
            />
          </motion.div>
        </div>

        {/* ================= PLAYER ID BLOCK ================= */}
        <div className="mt-32 grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:justify-items-center">
          {/* LEFT IMAGE */}
          <motion.div
          
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className=" max-w-md relative flex justify-center"
          >
            {/* IMAGE GLOW */}
            <div className="absolute inset-0 h-[420px] w-[420px] rounded-full bg-[#00E5FF]/25 blur-[140px]" />
            <img
              src={playerId}
              alt="TapCoins Player ID"
              className="relative z-10 w-[360px] md:w-[440px]"
            />
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white">
              TapCoins Player ID
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              A decentralized ID system built on the TON network
            </p>

            <ul className="mt-6 space-y-3 text-sm text-gray-300">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00E5FF]" />
                Allows users to create a unified ID to track progress, earn rewards,
                and access various games and tasks seamlessly.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00E5FF]" />
                Enhances user retention and engagement by providing a consistent
                identity across all games and activities.
              </li>
            </ul>

            <h4 className="mt-8 text-sm font-semibold text-yellow-400">
              The Benefit of get TapCoins Player ID
            </h4>

            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              {[
                'Free AirDrop (Token / NFT) from hundreds of Web3 Game projects.',
                'Unique account growth system.',
                'Build the credit from using TapCoins Player ID.',
                'In the future, it can be directly used to log in to Web3 Game and get incentives.',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-yellow-400">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
        </div>
        {/* ================= DAO / STAKING BLOCK ================= */}
<div className="mt-32 grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:justify-items-center">
  
  {/* LEFT TEXT */}
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="max-w-md"
  >
    <h3 className="text-2xl font-semibold text-white">
      TapCoins Builder SDK
    </h3>

    <p className="mt-2 text-sm text-gray-300">
      A staking and earning protocol
    </p>

    {/* HIGHLIGHT BOX */}
    <div className="mt-6 rounded-xl bg-white/5 p-5 text-sm text-gray-300 backdrop-blur">
      Users can stake tokens from various games to earn rewards. By staking
      TAP tokens through TapCoins DAO, you will have the opportunity to earn
      TAP, limited edition NFTs, and contribute to the development of the
      TapCoins ecosystem.
    </div>

    {/* CHECK LIST */}
    <ul className="mt-6 space-y-3 text-sm text-gray-300">
      <li className="flex gap-3">
        <span className="text-yellow-400">✓</span>
        Allows for community governance, enabling users to participate in
        decision-making processes related to the platform.
      </li>
      <li className="flex gap-3">
        <span className="text-yellow-400">✓</span>
        Encourages community involvement and investment in the ecosystem.
      </li>
    </ul>
  </motion.div>

  {/* RIGHT IMAGE */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="relative flex justify-center"
  >
    {/* IMAGE GLOW */}
    <div className="absolute h-[420px] w-[420px] rounded-full bg-[#7a5cff]/30 blur-[150px]" />

    <img
      src={daoImage}   
      alt="TapCoins DAO"
      className="relative z-10 w-[360px] md:w-[440px]"
    />
  </motion.div>
</div>

      </div>
      
    </section>
  )
}
