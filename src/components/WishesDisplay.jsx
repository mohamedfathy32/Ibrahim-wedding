import { motion } from 'framer-motion'
import { FaHeart, FaQuoteRight } from 'react-icons/fa'
import { useWishes } from '../hooks/useWishes'
import { formatWishDate } from '../utils/formatDate'

function WishCard({ wish, index }) {
  const initial = wish.name?.trim()?.charAt(0) || '?'

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.4) }}
      className="group relative overflow-hidden rounded-2xl border border-gold-100 bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
    >
      <div className="absolute top-0 right-0 h-1 w-full bg-linear-to-l from-gold-400 to-rose-gold-400 opacity-80" />
      <FaQuoteRight className="mb-4 text-2xl text-gold-200 transition-colors group-hover:text-gold-300" />

      <p className="mb-6 min-h-16 text-base leading-relaxed text-gray-700">
        {wish.message}
      </p>

      <div className="flex items-center justify-between gap-3 border-t border-gold-50 pt-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-gold-400 to-gold-600 font-semibold text-white shadow-sm">
            {initial}
          </div>
          <div className="text-right">
            <h3 className="font-semibold text-gray-800">{wish.name}</h3>
            {wish.createdAt && (
              <p className="text-xs text-gray-400">{formatWishDate(wish.createdAt)}</p>
            )}
          </div>
        </div>
        <FaHeart className="text-sm text-rose-gold-300 opacity-60" />
      </div>
    </motion.article>
  )
}

export default function WishesDisplay() {
  const { wishes, loading, error } = useWishes()

  return (
    <div className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-center"
      >
        <p className="mb-2 text-sm tracking-widest text-gold-600 uppercase">
          رسائل المحبة
        </p>
        <h3 className="font-serif text-2xl font-bold text-gray-800 md:text-3xl">
          تهاني الاصدقاء والأحباء
        </h3>
        {!loading && wishes.length > 0 && (
          <p className="mt-2 text-sm text-gray-500">
            {wishes.length} تهنئة
          </p>
        )}
      </motion.div>

      {loading && (
        <div className="flex justify-center py-12">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-gold-300 border-t-gold-600" />
        </div>
      )}

      {error && (
        <p className="rounded-xl bg-red-50 p-4 text-center text-sm text-red-600">
          تعذر تحميل التهاني حالياً
        </p>
      )}

      {!loading && !error && wishes.length === 0 && (
        <div className="rounded-2xl border border-dashed border-gold-200 bg-white/60 py-14 text-center">
          <FaHeart className="mx-auto mb-3 text-3xl text-gold-300" />
          <p className="text-gray-500">كن أول من يرسل تهنئة جميلة</p>
        </div>
      )}

      {!loading && !error && wishes.length > 0 && (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {wishes.map((wish, index) => (
            <WishCard key={wish.id} wish={wish} index={index} />
          ))}
        </div>
      )}
    </div>
  )
}
