import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
    >
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © 2024 Cenker Arin. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/cenkerarin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/cenkerarin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://twitter.com/cenkerarin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer 