import { motion } from 'framer-motion'
import phone from '../assets/phone2.png'
import logo from '../assets/topcoin.png'
import bg from '../assets/hero-bg.png'
import twitter from '../assets/twitter.png'
import telegram from '../assets/telegram.png'
import youtube from '../assets/youtube.png'
//import { FaTelegramPlane, FaXTwitter, FaYoutube } from 'react-icons/fa6'

export default function Hero() {
  return (
   <section
  className="relative min-h-screen overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage: `url(${bg})`,
  }}
>

      <div className="absolute right-[-200px] top-[-120px] h-[520px] w-[520px] rounded-full bg-[#5a7cff] opacity-30 blur-[140px]" />

      {/* Header */}
     <div className="absolute top-4 md:top-6 left-10 md:left-24 flex items-center">
  <img
    src={logo}
    alt="TapCoins"
    className="h-8 w-auto"
  />
</div>



     <div className="absolute top-4 md:top-6 right-16 md:right-40 flex items-center gap-8 opacity-80">

       <img
    src={twitter}
    className="h-7 md:h-8 hover:scale-110 transition cursor-pointer"
  />
  <img
    src={telegram}
    className="h-7 md:h-8 hover:scale-110 transition cursor-pointer"
  />
 
  <img
    src={youtube}
    className="h-7 md:h-8 hover:scale-110 transition cursor-pointer"
  />
</div>



      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between px-10 pt-40 md:flex-row">
        
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl"
        >
       <div className="relative -mt-36 md:-mt-56 ml-10 md:ml-24">
  <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
    THE LEADING
    <br />
    <span className="block bg-gradient-to-r from-[#5a7cff] to-[#facc15] bg-clip-text text-transparent whitespace-nowrap">
      WEB3 MOBILE GAME
    </span>
    <span className="text-[#5a7cff]">ECOSYSTEM</span>
  </h1>
</div>

<div className="relative mt-2 md:mt-4 ml-10 md:ml-24 flex items-center gap-6">
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
  animate={{ y: [0, -24, 0] }}
  transition={{
    duration: 3.5,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
  className="relative mt-16 md:-mt-16 md:-ml-28"
>
  {/* Neon blue glow */}
  <div className="absolute inset-0 -z-10 flex items-center justify-center">
    {/* Inner bright core */}
    <div className="absolute h-[260px] w-[260px] rounded-full bg-[#00E5FF] opacity-90 blur-[50px]" />

    {/* Outer soft glow */}
    <div className="absolute h-[520px] w-[520px] rounded-full bg-[#00B3FF] opacity-50 blur-[170px]" />
  </div>

  <img
    src={phone}
    alt="TapCoins App"
    className="w-[460px] md:w-[600px]"
  />
</motion.div>


      </div>
    </section>
  )
}
