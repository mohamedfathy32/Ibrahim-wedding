import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'
import { weddingData } from '../data/weddingData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FaHeart className="mx-auto mb-4 text-2xl text-rose-gold-400" />
          <p className="mb-2 font-serif text-xl text-gold-300 md:text-2xl">
            {weddingData.footerMessage}
          </p>
          <p className="mb-6 text-gray-400">{weddingData.groom}</p>
          <div className="mx-auto mb-6 h-px w-24 bg-gold-600/50" />
          <p className="text-sm text-gray-500">
            © {year} جميع الحقوق محفوظة
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
