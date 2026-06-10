import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { motion } from 'framer-motion'
import { FaLock, FaEnvelope, FaHeart } from 'react-icons/fa'
import { auth } from '../firebase/firebaseConfig'
import { weddingData } from '../data/weddingData'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/dashboard')
    } catch {
      setError('البريد الإلكتروني أو كلمة المرور غير صحيحة')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-beige-50 via-white to-gold-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="mb-8 text-center">
          <FaHeart className="mx-auto mb-4 text-3xl text-gold-500" />
          <h1 className="font-serif text-3xl font-bold text-gray-800">
            تسجيل الدخول
          </h1>
          <p className="mt-2 text-gray-500">
            لوحة تحكم زفاف {weddingData.groom}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-gold-100 bg-white p-8 shadow-xl"
        >
          <div className="mb-6">
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
              البريد الإلكتروني
            </label>
            <div className="relative">
              <FaEnvelope className="absolute top-1/2 right-4 -translate-y-1/2 text-gold-400" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                required
                className="w-full rounded-xl border border-gold-200 bg-beige-50 py-3 pr-12 pl-4 text-gray-800 outline-none transition-colors focus:border-gold-400 focus:ring-2 focus:ring-gold-200"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
              كلمة المرور
            </label>
            <div className="relative">
              <FaLock className="absolute top-1/2 right-4 -translate-y-1/2 text-gold-400" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full rounded-xl border border-gold-200 bg-beige-50 py-3 pr-12 pl-4 text-gray-800 outline-none transition-colors focus:border-gold-400 focus:ring-2 focus:ring-gold-200"
              />
            </div>
          </div>

          {error && (
            <p className="mb-4 rounded-xl bg-red-50 p-3 text-center text-sm text-red-600">
              {error}
            </p>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-gold-500 to-rose-gold-500 py-3 font-medium text-white shadow-md transition-opacity disabled:opacity-60"
          >
            {loading ? 'جاري تسجيل الدخول...' : 'دخول'}
          </motion.button>
        </form>

        <p className="mt-6 text-center">
          <Link to="/" className="text-sm text-gold-600 transition-colors hover:text-gold-700">
            العودة للصفحة الرئيسية
          </Link>
        </p>
      </motion.div>
    </div>
  )
}
