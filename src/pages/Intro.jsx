import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Intro = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-rose-50 to-pink-50 dark:from-gray-900 dark:to-rose-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-rose-800 dark:text-rose-200">
          Naber, Nasılsın?
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
          <Link
            to="/chat"
            className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-lg text-white bg-rose-500 hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-colors text-center"
          >
            Gs yendiği için üzgünüm
          </Link>
          <Link
            to="/chat"
            className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-lg border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-colors text-center"
          >
            Operatör üstümden geçiyordu, sence nasıl olabilirim
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default Intro

