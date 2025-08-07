import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NoteCard = ({ note }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="group"
    >
      <Link 
        to={`/notes/${note.slug}`}
        className="block h-full p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-200 hover:shadow-lg"
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {note.title}
            </h3>
            <span className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
              {note.category}
            </span>
          </div>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
            {note.description}
          </p>
          
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
            <span>{note.date}</span>
            <span className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default NoteCard 