import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'
import { weddingData } from '../data/weddingData'

export default function ScheduleSection() {
  return (
    <section id="schedule" className="bg-beige-50 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-sm tracking-widest text-gold-600 uppercase">
            جدول الحفل
          </p>
          <h2 className="font-serif text-3xl font-bold text-gray-800 md:text-4xl">
            برنامج اليوم
          </h2>
        </motion.div>

        <div className="relative space-y-6">
          <div className="absolute top-0 bottom-0 right-6 w-px bg-gold-200 md:right-1/2" />

          {weddingData.schedule.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center gap-6 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              <div className="hidden flex-1 md:block" />
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gold-300 bg-white shadow-md">
                <FaHeart className="text-gold-500" />
              </div>
              <div className="flex-1 rounded-2xl border border-gold-100 bg-white p-6 shadow-md">
                <h3 className="mb-1 font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gold-600">{item.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
