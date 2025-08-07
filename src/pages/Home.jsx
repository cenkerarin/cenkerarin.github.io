import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className="container-custom py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center space-y-8"
      >
        <div className="space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white"
          >
            Hi, I'm <span className="text-primary-600 dark:text-primary-400">Cenker Arin</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300"
          >
            AI Researcher • Content Creator • Polymath in the Making
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          <p className="mb-6">
            I'm passionate about artificial intelligence, machine learning, and the intersection of technology with human creativity. 
            Currently focused on NLP, LLMs, and building systems that can understand and generate human language.
          </p>
          <p>
            When I'm not coding or researching, you'll find me learning French, working out, exploring art, 
            or diving into new domains that pique my curiosity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
        >
          <Link to="/about" className="btn-primary">
            Learn More About Me
          </Link>
          <Link to="/notes" className="btn-secondary">
            Browse My Notes
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">AI Research</div>
            <p className="text-gray-600 dark:text-gray-400">NLP, ML, LLMs, and beyond</p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">Content Creation</div>
            <p className="text-gray-600 dark:text-gray-400">Sharing knowledge and insights</p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">Polymath</div>
            <p className="text-gray-600 dark:text-gray-400">Always learning, always growing</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Home 