import { motion } from 'framer-motion'
import { FaMapMarkedAlt, FaExternalLinkAlt } from 'react-icons/fa'
import { weddingData } from '../data/weddingData'

export default function LocationSection() {
  const openMap = () => {
    window.open(weddingData.location.googleMapsUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <FaMapMarkedAlt className="mx-auto mb-4 text-4xl text-gold-600" />
          <h2 className="mb-4 font-serif text-2xl font-bold text-gray-800 md:text-3xl">
            موقع الحفل
          </h2>
          <p className="text-gray-600">{weddingData.details.address}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="overflow-hidden rounded-2xl border border-gold-100 shadow-xl"
        >
          <iframe
            title="موقع الحفل على الخريطة"
            src={weddingData.location.mapEmbedUrl}
            className="h-80 w-full md:h-[450px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={openMap}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-rose-gold-500 px-8 py-3 font-medium text-white shadow-lg transition-shadow hover:shadow-xl"
          >
            <FaExternalLinkAlt />
            فتح الموقع في Google Maps
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
