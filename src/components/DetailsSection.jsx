import { motion } from 'framer-motion'
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import { weddingData } from '../data/weddingData'

const detailItems = [
  {
    icon: FaCalendarAlt,
    label: 'التاريخ',
    value: weddingData.details.date,
  },
  {
    icon: FaClock,
    label: 'الوقت',
    value: weddingData.details.time,
  },
  {
    icon: FaMapMarkerAlt,
    label: 'العنوان',
    value: weddingData.details.address,
  },
]

export default function DetailsSection() {
  return (
    <section id="details" className="bg-beige-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-sm tracking-widest text-gold-600 uppercase">
            تفاصيل الحفل
          </p>
          <h2 className="font-serif text-3xl font-bold text-gray-800 md:text-4xl">
            ننتظركم بكل حب
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {detailItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-gold-100 bg-white p-6 text-center shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold-50">
                <item.icon className="text-2xl text-gold-600" />
              </div>
              <h3 className="mb-2 font-semibold text-gold-700">{item.label}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
