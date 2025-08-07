import { motion } from 'framer-motion'
import { useState } from 'react'
import NoteCard from '../components/NoteCard'

const Notes = () => {
  const notes = [
    {
      slug: 'cs229',
      title: 'CS229: Machine Learning',
      description: 'Comprehensive notes from Stanford\'s CS229 course covering supervised learning, unsupervised learning, and deep learning fundamentals.',
      category: 'Machine Learning',
      date: '2024-01-15'
    },
    {
      slug: 'cs224n',
      title: 'CS224n: Natural Language Processing',
      description: 'Detailed notes from Stanford\'s CS224n course on NLP, including word vectors, RNNs, transformers, and language models.',
      category: 'NLP',
      date: '2024-01-20'
    },
    {
      slug: 'llm-fundamentals',
      title: 'Large Language Model Fundamentals',
      description: 'Core concepts, architectures, and training methodologies for large language models and transformer-based systems.',
      category: 'LLMs',
      date: '2024-02-01'
    },
    {
      slug: 'attention-mechanisms',
      title: 'Attention Mechanisms Deep Dive',
      description: 'In-depth exploration of attention mechanisms, from basic concepts to advanced implementations in transformers.',
      category: 'Deep Learning',
      date: '2024-02-10'
    },
    {
      slug: 'reinforcement-learning',
      title: 'Reinforcement Learning Notes',
      description: 'Study notes covering RL fundamentals, algorithms, and applications in AI systems.',
      category: 'RL',
      date: '2024-02-15'
    },
    {
      slug: 'computer-vision',
      title: 'Computer Vision Fundamentals',
      description: 'Notes on computer vision techniques, CNN architectures, and visual understanding in AI systems.',
      category: 'Computer Vision',
      date: '2024-02-20'
    },
    {
      slug: 'optimization-methods',
      title: 'Optimization Methods in ML',
      description: 'Comprehensive overview of optimization techniques used in machine learning, from gradient descent to advanced methods.',
      category: 'Optimization',
      date: '2024-03-01'
    },
    {
      slug: 'neural-networks',
      title: 'Neural Network Architectures',
      description: 'Study of different neural network architectures, their design principles, and applications.',
      category: 'Deep Learning',
      date: '2024-03-05'
    }
  ]

  const categories = ['All', 'Machine Learning', 'NLP', 'LLMs', 'Deep Learning', 'RL', 'Computer Vision', 'Optimization']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredNotes = selectedCategory === 'All' 
    ? notes 
    : notes.filter(note => note.category === selectedCategory)

  return (
    <div className="container-custom py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto space-y-8"
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
          >
            Study Notes
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            My public study notes on AI, ML, and related topics
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Notes Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredNotes.map((note, index) => (
            <motion.div
              key={note.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <NoteCard note={note} />
            </motion.div>
          ))}
        </motion.div>

        {filteredNotes.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400">
              No notes found for the selected category.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default Notes 