import { motion } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'
import { FaHeart } from 'react-icons/fa'
import { weddingData } from '../data/weddingData'

export default function HeroSection() {
  const scrollToDetails = () => {
    document.querySelector('#details')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: 'easeOut' }}
      >
        <img
          src={weddingData.heroImage}
          alt={weddingData.groom}
          className="h-full w-full object-cover object-top"
        />
      </motion.div>

      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/45 to-black/80" />
      <div className="hero-vignette absolute inset-0" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full border border-gold-400/20" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full border border-gold-400/15" />
        <div className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-gold-300/40" />
        <div className="absolute top-1/3 right-1/3 h-1.5 w-1.5 rounded-full bg-rose-gold-300/50" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-3xl px-5 py-28 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="hero-frame relative border border-gold-400/35 bg-black/25 px-8 py-12 text-center  md:px-14 md:py-16"
        >
          <span className="hero-corner hero-corner-tl" />
          <span className="hero-corner hero-corner-tr" />
          <span className="hero-corner hero-corner-bl" />
          <span className="hero-corner hero-corner-br" />

          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.35em' }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-6 text-xs font-medium tracking-[0.35em] text-gold-200 uppercase md:text-sm"
          >
            دعوة زفاف
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mb-5 flex items-center justify-center gap-4"
          >
            <span className="h-px w-12 bg-linear-to-l from-gold-400/80 to-transparent md:w-20" />
            <FaHeart className="text-lg text-rose-gold-400 md:text-xl" />
            <span className="h-px w-12 bg-linear-to-r from-gold-400/80 to-transparent md:w-20" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="mb-3 font-serif text-4xl leading-tight font-bold text-white md:text-6xl lg:text-7xl"
          >
            {weddingData.groom}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-8 font-serif text-lg text-gold-300 md:text-2xl"
          >
            يتشرف بدعوتكم
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mb-8 flex flex-wrap items-center justify-center gap-3"
          >
            <span className="rounded-full border border-gold-400/40 bg-gold-500/15 px-5 py-2 text-sm text-gold-100 backdrop-blur-sm">
              {weddingData.details.date}
            </span>
            <span className="rounded-full border border-gold-400/40 bg-gold-500/15 px-5 py-2 text-sm text-gold-100 backdrop-blur-sm">
              {weddingData.details.time}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mx-auto mb-10 max-w-lg text-base leading-relaxed text-white/85 md:text-lg"
          >
            {weddingData.welcomeMessage}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.15 }}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 30px rgba(212,175,55,0.35)' }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={scrollToDetails}
            className="rounded-full bg-linear-to-r from-gold-500 to-gold-600 px-10 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-gold-900/30 transition-all hover:from-gold-400 hover:to-gold-500 md:text-base"
          >
            تفاصيل الحفل
          </motion.button>
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={scrollToDetails}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-gold-300/80 transition-colors hover:text-gold-200"
        aria-label="الانتقال للتفاصيل"
      >
        <span className="text-xs tracking-widest uppercase">اكتشف المزيد</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/40 bg-black/20 backdrop-blur-sm"
        >
          <HiChevronDown className="text-xl" />
        </motion.span>
      </motion.button>
    </section>
  )
}
