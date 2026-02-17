import { motion } from 'framer-motion'
import selinImage from '../../WhatsApp Image 2026-02-15 at 16.08.15.jpeg'

const YesPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-rose-50 to-pink-50 dark:from-gray-900 dark:to-rose-950">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-rose-800 dark:text-rose-200">
          brilliant choice darling
        </h1>
        <div className="flex justify-center">
          <motion.img
            src={selinImage}
            alt="Selin"
            className="max-h-[400px] w-auto rounded-3xl shadow-2xl border-4 border-rose-200 dark:border-rose-400 object-cover"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </div>
      </motion.div>
    </div>
  )
}

export default YesPage
