import { motion } from 'framer-motion'
import { weddingData } from '../data/weddingData'
import { useCountdown } from '../hooks/useCountdown'

function TimeUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-gold-200 bg-white shadow-lg md:h-28 md:w-28">
        <span className="font-serif text-3xl font-bold text-gold-700 md:text-5xl">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="mt-3 text-sm font-medium text-gray-600 md:text-base">
        {label}
      </span>
    </div>
  )
}

export default function CountdownSection() {
  const { days, hours, minutes, seconds, completed } = useCountdown(
    weddingData.weddingDate,
  )

  return (
    <section id="countdown" className="bg-beige-50 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-sm tracking-widest text-gold-600 uppercase">
            العد التنازلي
          </p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-gray-800 md:text-4xl">
            نتطلع لرؤيتكم قريباً
          </h2>

          {completed ? (
            <p className="font-serif text-2xl text-gold-700 md:text-3xl">
              اليوم هو يومنا المميز! 🎉
            </p>
          ) : (
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <TimeUnit value={days} label="يوم" />
              <TimeUnit value={hours} label="ساعة" />
              <TimeUnit value={minutes} label="دقيقة" />
              <TimeUnit value={seconds} label="ثانية" />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
