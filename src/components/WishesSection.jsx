import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa'
import { db } from '../firebase/firebaseConfig'
import WishesDisplay from './WishesDisplay'

export default function WishesSection() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) {
      setError('يرجى ملء جميع الحقول')
      return
    }

    setLoading(true)
    setError('')

    try {
      await addDoc(collection(db, 'wishes'), {
        name: name.trim(),
        message: message.trim(),
        createdAt: serverTimestamp(),
      })
      setSuccess(true)
      setName('')
      setMessage('')
      setTimeout(() => setSuccess(false), 4000)
    } catch {
      setError('حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="wishes" className="bg-beige-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="mb-2 text-sm tracking-widest text-gold-600 uppercase">
            التهاني
          </p>
          <h2 className="font-serif text-3xl font-bold text-gray-800 md:text-4xl">
            أرسلوا تهانيكم
          </h2>
          <p className="mt-4 text-gray-600">
            شاركونا فرحتنا بكلماتكم الجميلة
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="mx-auto max-w-2xl rounded-2xl border border-gold-100 bg-white p-8 shadow-lg"
        >
          <div className="mb-6">
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
              الاسم
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="اكتب اسمك هنا"
              className="w-full rounded-xl border border-gold-200 bg-beige-50 px-4 py-3 text-gray-800 outline-none transition-colors focus:border-gold-400 focus:ring-2 focus:ring-gold-200"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
              رسالة التهنئة
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="اكتب رسالتك هنا..."
              rows={4}
              className="w-full resize-none rounded-xl border border-gold-200 bg-beige-50 px-4 py-3 text-gray-800 outline-none transition-colors focus:border-gold-400 focus:ring-2 focus:ring-gold-200"
            />
          </div>

          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-4 flex items-center gap-2 rounded-xl bg-green-50 p-4 text-green-700"
              >
                <FaCheckCircle />
                تم إرسال تهنئتك بنجاح! شكراً لك
              </motion.div>
            )}
          </AnimatePresence>

          {error && (
            <p className="mb-4 rounded-xl bg-red-50 p-4 text-red-600">{error}</p>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-gold-500 to-rose-gold-500 py-3 font-medium text-white shadow-md transition-opacity disabled:opacity-60"
          >
            <FaPaperPlane />
            {loading ? 'جاري الإرسال...' : 'إرسال التهنئة'}
          </motion.button>
        </motion.form>

        <WishesDisplay />
      </div>
    </section>
  )
}
