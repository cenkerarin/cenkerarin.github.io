import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Intro from './pages/Intro'
import ChatConcern from './pages/ChatConcern'
import ChatName from './pages/ChatName'
import Home from './pages/Home'
import YesPage from './pages/YesPage'
import About from './pages/About'
import Notes from './pages/Notes'
import NoteDetail from './pages/NoteDetail'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/chat" element={<ChatConcern />} />
        <Route path="/chat-name" element={<ChatName />} />
        <Route path="/valentine" element={<Home />} />
        <Route path="/yes" element={<YesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/:slug" element={<NoteDetail />} />
      </Routes>
    </Layout>
  )
}

export default App 