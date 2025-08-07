import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Notes from './pages/Notes'
import NoteDetail from './pages/NoteDetail'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/:slug" element={<NoteDetail />} />
      </Routes>
    </Layout>
  )
}

export default App 