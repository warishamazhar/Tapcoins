import { motion } from 'framer-motion'
import phone from '../assets/phone2.png'
import logo from '../assets/topcoin.png'
import bg from '../assets/hero-bg.png'
import twitter from '../assets/twitter.png'
import telegram from '../assets/telegram.png'
import youtube from '../assets/youtube.png'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Ambient Glow */}
      <div className="absolute right-[-200px] top-[-120px] h-[520px] w-[520px] rounded-full bg-[#5a7cff] opacity-30 blur-[140px]" />

      {/* Header */}
    <div className="absolute top-4 left-12 md:top-6 md:left-28 flex items-center">
  <img
    src={logo}
    alt="TapCoins"
    className="h-9 sm:h-10 md:h-12 w-auto"
  />
</div>




      {/* Social Icons */}
     <div className="absolute top-4 right-8 md:top-6 md:right-28 flex items-center gap-5 md:gap-7 opacity-80">
  <img
    src={twitter}
    className="h-8 sm:h-9 md:h-11 hover:scale-110 transition-transform cursor-pointer"
  />
  <img
    src={telegram}
    className="h-8 sm:h-9 md:h-11 hover:scale-110 transition-transform cursor-pointer"
  />
  <img
    src={youtube}
    className="h-8 sm:h-9 md:h-11 hover:scale-110 transition-transform cursor-pointer"
  />
</div>


      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between px-4 pt-24 md:flex-row md:px-6 md:pt-28">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:max-w-xl text-center md:text-left"
        >
          <div className="relative mt-0 md:-mt-56 md:ml-24">
            <h1 className="text-4xl leading-tight font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
  THE LEADING
  <br />
  <span className="block bg-gradient-to-r from-[#5a7cff] to-[#facc15] bg-clip-text text-transparent whitespace-nowrap">
    WEB3 MOBILE GAME
  </span>
  <span className="block text-[#5a7cff]">
    ECOSYSTEM
  </span>
</h1>

          </div>

          <div className="mt-6 md:mt-4 md:ml-24 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center md:justify-start">
            <button className="rounded-full bg-gradient-to-r from-[#5a7cff] to-[#7a5cff] px-8 py-4 font-semibold text-white transition hover:translate-y-[-2px]">
              Start Game
            </button>

            <button className="text-[#cfd6ff] opacity-80 hover:opacity-100">
              Learn More →
            </button>
          </div>
        </motion.div>

        {/* RIGHT PHONE */}
       <motion.div
  animate={{ y: [0, -28, 0] }}
  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
  className="relative mt-10 md:-mt-20 md:-ml-36 flex justify-center"
>
  {/* Glow */}
  <div className="absolute inset-0 -z-10 flex items-center justify-center">
    <div className="absolute h-[260px] w-[260px] md:h-[320px] md:w-[320px] rounded-full bg-[#00E5FF] opacity-90 blur-[60px]" />
    <div className="absolute h-[520px] w-[520px] md:h-[640px] md:w-[640px] rounded-full bg-[#00B3FF] opacity-45 blur-[200px]" />
  </div>

  <img
    src={phone}
    alt="TapCoins App"
    className="w-[340px] sm:w-[420px] md:w-[720px] lg:w-[820px]"
  />
</motion.div>


      </div>
    </section>
  )
}
