import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ChatConcern = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-rose-50 to-pink-50 dark:from-gray-900 dark:to-rose-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-10"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-rose-800 dark:text-rose-200">
          Bunu duyduğuma üzüldüm ama benim aklıma takılan bir durum var
        </h1>

        <div className="flex justify-center">
          <Link
            to="/chat-name"
            className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-lg text-white bg-rose-500 hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-colors text-center"
          >
            Nedir O?
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default ChatConcern

