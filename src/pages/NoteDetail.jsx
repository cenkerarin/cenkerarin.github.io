import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NoteDetail = () => {
  const { slug } = useParams()

  // Sample note content - in a real app, this would come from a CMS or markdown files
  const noteContent = {
    'cs229': {
      title: 'CS229: Machine Learning',
      category: 'Machine Learning',
      date: '2024-01-15',
      content: `
# CS229: Machine Learning Notes

## Course Overview
Stanford's CS229 is a comprehensive introduction to machine learning, covering both theoretical foundations and practical applications.

## Key Topics Covered

### 1. Supervised Learning
- Linear regression and classification
- Logistic regression
- Support Vector Machines (SVMs)
- Neural networks and deep learning

### 2. Unsupervised Learning
- Clustering algorithms (K-means, hierarchical clustering)
- Dimensionality reduction (PCA, t-SNE)
- Anomaly detection

### 3. Learning Theory
- Bias-variance tradeoff
- Cross-validation techniques
- Model selection strategies

## Important Concepts

### Linear Regression
Linear regression models the relationship between a dependent variable and one or more independent variables using a linear function.

**Mathematical Formulation:**
\`\`\`
h_θ(x) = θ₀ + θ₁x₁ + θ₂x₂ + ... + θₙxₙ
\`\`\`

### Logistic Regression
Used for binary classification problems, logistic regression models the probability of a binary outcome.

**Sigmoid Function:**
\`\`\`
g(z) = 1 / (1 + e^(-z))
\`\`\`

## Practical Applications
- Image recognition and computer vision
- Natural language processing
- Recommendation systems
- Medical diagnosis
- Financial forecasting

## Resources
- Course materials: [CS229 Course Page](https://cs229.stanford.edu/)
- Additional readings and papers
- Practice problems and assignments
      `
    },
    'cs224n': {
      title: 'CS224n: Natural Language Processing',
      category: 'NLP',
      date: '2024-01-20',
      content: `
# CS224n: Natural Language Processing Notes

## Course Overview
CS224n provides a deep dive into natural language processing, covering modern techniques and neural network approaches.

## Key Topics

### 1. Word Vectors
- Word2Vec and GloVe
- Distributional semantics
- Word embeddings and their properties

### 2. Neural Networks for NLP
- Feedforward neural networks
- Backpropagation and optimization
- Regularization techniques

### 3. Recurrent Neural Networks
- LSTM and GRU architectures
- Vanishing gradient problem
- Bidirectional RNNs

### 4. Attention Mechanisms
- Self-attention and transformer architecture
- Multi-head attention
- Positional encoding

### 5. Language Models
- N-gram models
- Neural language models
- Transformer-based models (BERT, GPT)

## Important Concepts

### Word Embeddings
Word embeddings represent words as dense vectors in a continuous vector space where semantically similar words are mapped to nearby points.

### Attention Mechanism
Attention allows the model to focus on different parts of the input sequence when making predictions.

**Attention Formula:**
\`\`\`
Attention(Q,K,V) = softmax(QK^T/√d_k)V
\`\`\`

## Applications
- Machine translation
- Question answering
- Sentiment analysis
- Text summarization
- Named entity recognition

## Resources
- Course website: [CS224n](http://web.stanford.edu/class/cs224n/)
- Papers and research articles
- Implementation exercises
      `
    },
    'llm-fundamentals': {
      title: 'Large Language Model Fundamentals',
      category: 'LLMs',
      date: '2024-02-01',
      content: `
# Large Language Model Fundamentals

## Introduction
Large Language Models (LLMs) have revolutionized natural language processing and AI capabilities. This document covers the fundamental concepts and architectures.

## Core Concepts

### 1. Transformer Architecture
The transformer architecture, introduced in "Attention Is All You Need," forms the foundation of modern LLMs.

**Key Components:**
- Self-attention mechanism
- Multi-head attention
- Positional encoding
- Feed-forward networks
- Layer normalization

### 2. Pre-training and Fine-tuning
- **Pre-training**: Models learn general language patterns on large text corpora
- **Fine-tuning**: Models are adapted for specific tasks or domains

### 3. Scaling Laws
- Performance scales with model size, data size, and compute
- Chinchilla scaling laws provide optimal training parameters

## Popular LLM Architectures

### GPT (Generative Pre-trained Transformer)
- Decoder-only architecture
- Autoregressive language modeling
- Examples: GPT-3, GPT-4, ChatGPT

### BERT (Bidirectional Encoder Representations from Transformers)
- Encoder-only architecture
- Bidirectional context understanding
- Masked language modeling

### T5 (Text-to-Text Transfer Transformer)
- Encoder-decoder architecture
- Unified text-to-text framework

## Training Considerations

### Data Quality
- High-quality, diverse training data
- Proper preprocessing and cleaning
- Bias detection and mitigation

### Computational Requirements
- Massive computational resources needed
- Distributed training strategies
- Efficient attention mechanisms

### Ethical Considerations
- Bias and fairness
- Privacy concerns
- Misinformation and safety

## Applications
- Text generation and completion
- Code generation and analysis
- Question answering
- Summarization
- Translation
- Creative writing

## Future Directions
- Multimodal models
- Efficient training methods
- Better alignment with human values
- Reduced computational requirements
      `
    }
  }

  const note = noteContent[slug]

  if (!note) {
    return (
      <div className="container-custom py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Note Not Found
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            The note you're looking for doesn't exist.
          </p>
          <Link to="/notes" className="btn-primary">
            Back to Notes
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="container-custom py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        {/* Header */}
        <div className="space-y-4">
          <Link 
            to="/notes" 
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Notes
          </Link>
          
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              {note.title}
            </h1>
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
                {note.category}
              </span>
              <span>{note.date}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert max-w-none bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8"
        >
          <div 
            className="markdown-content"
            dangerouslySetInnerHTML={{ 
              __html: note.content
                .split('\n')
                .map(line => {
                  if (line.startsWith('# ')) {
                    return `<h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">${line.substring(2)}</h1>`
                  }
                  if (line.startsWith('## ')) {
                    return `<h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">${line.substring(3)}</h2>`
                  }
                  if (line.startsWith('### ')) {
                    return `<h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 mt-4">${line.substring(4)}</h3>`
                  }
                  if (line.startsWith('**')) {
                    return `<p class="font-semibold text-gray-900 dark:text-white mb-2">${line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>`
                  }
                  if (line.startsWith('```')) {
                    return `<pre class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto text-sm"><code>${line.substring(3)}</code></pre>`
                  }
                  if (line.trim() === '') {
                    return '<br>'
                  }
                  return `<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">${line}</p>`
                })
                .join('')
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default NoteDetail 