import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { weddingData } from '../data/weddingData'

const navLinks = [
  { href: '#countdown', label: 'العد التنازلي' },
  { href: '#story', label: 'قصتنا' },
  { href: '#details', label: 'التفاصيل' },
  { href: '#schedule', label: 'الجدول' },
  { href: '#gallery', label: 'المعرض' },
  { href: '#wishes', label: 'التهاني' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (href) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 right-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <a
          href="#hero"
          className="font-serif text-xl font-semibold text-gold-700 md:text-2xl"
        >
          {weddingData.groom}
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => handleClick(link.href)}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-gold-600"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="text-2xl text-gold-700 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="القائمة"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-gold-100 bg-white md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleClick(link.href)}
                    className="block w-full rounded-lg px-3 py-2 text-right text-gray-700 transition-colors hover:bg-gold-50 hover:text-gold-700"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
