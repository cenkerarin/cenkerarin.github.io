import { motion } from 'framer-motion'

const About = () => {
  const interests = [
    { name: 'AI & Machine Learning', description: 'NLP, LLMs, Computer Vision, and the future of AI' },
    { name: 'French Language', description: 'Learning French for cultural enrichment and global communication' },
    { name: 'Fitness & Health', description: 'Strength training, nutrition, and maintaining a healthy lifestyle' },
    { name: 'Art & Creativity', description: 'Exploring various art forms and creative expression' },
    { name: 'Technology', description: 'Software development, new technologies, and innovation' },
    { name: 'Philosophy', description: 'Deep thinking about life, consciousness, and human nature' },
  ]

  const skills = [
    'Python', 'JavaScript', 'React', 'TensorFlow', 'PyTorch', 'NLP', 'Machine Learning', 'Git', 'Docker', 'AWS'
  ]

  return (
    <div className="container-custom py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto space-y-12"
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
          >
            About Me
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            AI Researcher, Content Creator, and Polymath
          </motion.p>
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Background</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm an AI researcher and content creator with a deep passion for artificial intelligence and machine learning. 
                My journey in tech started with a curiosity about how machines can learn and understand human language, 
                which led me to specialize in Natural Language Processing and Large Language Models.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                I believe in the power of interdisciplinary learning and constantly seek to expand my knowledge across 
                different domains. This polymathic approach helps me bring unique perspectives to my research and content creation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Interests & Passions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                  >
                    <h3 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                      {interest.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {interest.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">What I'm Working On</h2>
              <div className="space-y-4">
                <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                    Research & Development
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Currently focused on advancing NLP techniques, exploring new approaches to language understanding, 
                    and contributing to the broader AI research community.
                  </p>
                </div>
                <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                    Content Creation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Sharing insights, tutorials, and research findings through various platforms to help others 
                    learn and grow in the AI space.
                  </p>
                </div>
                <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                    Personal Growth
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Continuously learning new skills, languages, and exploring different domains to maintain 
                    a well-rounded perspective on life and technology.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About 