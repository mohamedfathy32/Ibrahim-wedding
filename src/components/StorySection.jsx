import { motion } from 'framer-motion'
import { weddingData } from '../data/weddingData'

export default function StorySection() {
  return (
    <section id="story" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -top-4 -right-4 h-full w-full rounded-2xl border-2 border-gold-200" />
            <img
              src={weddingData.storyImage}
              alt="قصتنا"
              className="relative z-10 w-full rounded-2xl object-cover shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-right"
          >
            <p className="mb-2 text-sm tracking-widest text-gold-600 uppercase">
              قصتنا
            </p>
            <h2 className="mb-6 font-serif text-3xl font-bold text-gray-800 md:text-4xl">
              يوم مميز بانتظاركم
            </h2>
            <div className="mx-auto mb-6 h-px w-16 bg-gold-400 md:mr-0" />
            <p className="text-lg leading-relaxed text-gray-600">
              {weddingData.story}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
