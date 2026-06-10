import { useState } from 'react'
import { deleteDoc, doc } from 'firebase/firestore'
import { signOut } from 'firebase/auth'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaSignOutAlt,
  FaTrash,
  FaHeart,
  FaHome,
  FaComments,
  FaQuoteRight,
} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db } from '../firebase/firebaseConfig'
import { weddingData } from '../data/weddingData'
import { useWishes } from '../hooks/useWishes'
import { formatWishDate } from '../utils/formatDate'

export default function Dashboard() {
  const { wishes, loading } = useWishes()
  const [deletingId, setDeletingId] = useState(null)
  const navigate = useNavigate()

  const handleDelete = async (id) => {
    if (!window.confirm('هل أنت متأكد من حذف هذه التهنئة؟')) return
    setDeletingId(id)
    try {
      await deleteDoc(doc(db, 'wishes', id))
    } catch {
      alert('حدث خطأ أثناء الحذف')
    } finally {
      setDeletingId(null)
    }
  }

  const handleLogout = async () => {
    await signOut(auth)
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-beige-50">
      <header className="border-b border-gold-100 bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <FaHeart className="text-gold-500" />
            <div>
              <h1 className="font-serif text-xl font-bold text-gray-800">
                لوحة التحكم
              </h1>
              <p className="text-sm text-gray-500">
                تهاني زفاف {weddingData.groom}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-gray-600 transition-colors hover:bg-gold-50 hover:text-gold-700"
            >
              <FaHome />
              <span className="hidden sm:inline">الرئيسية</span>
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600 transition-colors hover:bg-red-100"
            >
              <FaSignOutAlt />
              <span className="hidden sm:inline">خروج</span>
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="rounded-2xl border border-gold-100 bg-white p-6 shadow-md">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-50">
                <FaComments className="text-2xl text-gold-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">إجمالي التهاني</p>
                <p className="font-serif text-3xl font-bold text-gold-700">
                  {wishes.length}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              الحذف متاح هنا فقط — الزوار يرون التهاني بدون إمكانية حذفها
            </p>
          </div>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-gold-300 border-t-gold-600" />
          </div>
        ) : wishes.length === 0 ? (
          <div className="rounded-2xl border border-gold-100 bg-white py-20 text-center shadow-md">
            <FaComments className="mx-auto mb-4 text-4xl text-gold-300" />
            <p className="text-gray-500">لا توجد تهاني بعد</p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            <AnimatePresence>
              {wishes.map((wish, index) => (
                <motion.div
                  key={wish.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl border border-gold-100 bg-white p-6 shadow-md"
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-100 font-semibold text-gold-700">
                        {wish.name?.trim()?.charAt(0) || '?'}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{wish.name}</h3>
                        <p className="text-xs text-gray-400">
                          {formatWishDate(wish.createdAt) || '—'}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleDelete(wish.id)}
                      disabled={deletingId === wish.id}
                      className="flex items-center gap-1.5 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-500 transition-colors hover:bg-red-100 hover:text-red-700 disabled:opacity-50"
                      aria-label="حذف التهنئة"
                    >
                      <FaTrash />
                      <span className="hidden sm:inline">حذف</span>
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <FaQuoteRight className="mt-1 shrink-0 text-gold-200" />
                    <p className="leading-relaxed text-gray-600">{wish.message}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </main>
    </div>
  )
}
