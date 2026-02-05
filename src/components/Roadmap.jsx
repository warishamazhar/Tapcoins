import { motion } from 'framer-motion'
import bg from '../assets/bg.png'
import twitter from '../assets/twitter.png'
import telegram from '../assets/telegram.png'
import youtube from '../assets/youtube.png'

const steps = [
  {
    step: 1,
    title: 'Introduction to Web3 Gaming',
    position: 'bottom',
    items: [
      'Launch of TON Miniapp',
      'Commitment to Web3 knowledge learning',
      'Introduction of the Tap to Earn model',
      'Open invitation reward mechanism',
    ],
  },
  {
    step: 2,
    title: 'Immersive Learning Experience',
    position: 'top',
    items: [
      'Launch of Web3 knowledge mining feature',
      'Introduction of daily bounty activities',
      'Expansion of the knowledge base',
      'Regular organization of community events',
      'Open task achievement system',
      'Integration of YouTube for Web3 video education',
      'Initiation of video code interactive gameplay',
    ],
  },
  {
    step: 3,
    title: 'Ecosystem Co-Creation and Collaboration',
    position: 'bottom',
    items: [
      'Launch of task airdrop (USDT/TON) activities',
      'Enrichment of in-game application scenarios',
      'Completion of the first round of $TAP token airdrop',
      'Collaboration with more applications and ecosystems',
      'Launch of TapCoins application platform',
      'Establishment of TapCoins Game Center',
      'Launch of TapCoins SDK',
      'Launch of TapCoins Player ID',
    ],
  },
  {
    step: 4,
    title: 'Knowledge Application and Value Enhancement',
    position: 'top',
    items: [
      'Multiple rounds of $TAP token airdrops',
      '$TAP listed on exchanges and issued',
      '$TAP listed on more mainstream exchanges',
      'Launch of TapCoins DAO',
      'Provision of staking and earning protocols',
    ],
  },
]

export default function Roadmap() {
  const positions = ['5%', '30%', '55%', '80%']

  return (
    <section
      className="relative bg-cover bg-center py-20 md:py-28"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* TITLE */}
     <h2 className="mb-20 md:mb-28 text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
  TAPCOINS ROADMAP
</h2>


      {/* DESKTOP TIMELINE */}
      <div className="relative mx-auto max-w-6xl hidden md:block">

        {/* TOP */}
    <div className="relative mb-28 h-[260px]">
  {steps.map(
    (s, i) =>
      s.position === 'top' && (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: -28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute w-[340px]"
          style={{
            left: positions[i],
            top: 0,

            transform:
              i === 3
                ? 'translateX(-78%)' // strong left shift (prevents text cutting)
                : 'translateX(-80%)',
          }}
        >
          <h3 className="mb-3 text-lg font-semibold text-white">
            {s.title}
          </h3>

          <ul className="space-y-2 text-sm text-gray-300">
            {s.items.map((item, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="mt-[7px] h-2 w-2 rounded-full bg-[#5a7cff]" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      )
  )}
</div>



        {/* LINE */}
        <div className="relative mb-20">
          <div className="absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-[#E6D8B8]/80" />
          <div className="relative h-14">
            {steps.map((s, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  left: positions[i],
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-white font-bold">
                  {s.step}
                </div>
                <div className="mt-1 text-center text-[10px] text-white">
                  STEP
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM */}
       <div className="relative h-[260px]">
  {steps.map(
    (s, i) =>
      s.position === 'bottom' && (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute w-[340px]"
          style={{
            left: positions[i],
            top: 0,
            transform: 'translateX(-50%)',
          }}
        >
          <h3 className="mb-3 text-lg font-semibold text-white">
            {s.title}
          </h3>

          <ul className="space-y-2 text-sm text-gray-300">
            {s.items.map((item, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="mt-[7px] h-2 w-2 rounded-full bg-[#5a7cff]" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      )
  )}
</div>
      </div>

      {/* MOBILE STACK */}
      <div className="md:hidden px-6 space-y-12">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-white font-bold">
              {s.step}
            </div>

            <h3 className="mb-2 text-sm font-semibold text-white">
              {s.title}
            </h3>

            <ul className="space-y-1 text-xs text-gray-300">
              {s.items.map((item, idx) => (
                <li key={idx} className="flex justify-center gap-2">
                  <span className="mt-[6px] h-1 w-1 rounded-full bg-[#5a7cff]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-28 md:mt-40 text-center">
        <h3 className="text-2xl font-semibold text-white">
          Join <span className="text-yellow-400">TapCoins</span>
        </h3>

        <p className="mt-2 text-lg text-gray-300">
          Explore Web3, Earn Rewards!
        </p>

        <div className="mt-6 flex justify-center gap-8 opacity-80">
          <img src={telegram} className="h-7 md:h-8 hover:scale-110 transition" />
          <img src={twitter} className="h-7 md:h-8 hover:scale-110 transition" />
          <img src={youtube} className="h-7 md:h-8 hover:scale-110 transition" />
        </div>
      </div>
    </section>
  )
}
