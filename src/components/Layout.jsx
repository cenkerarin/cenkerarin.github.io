import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  const { pathname } = useLocation()
  const isValentinePage =
    pathname === '/' ||
    pathname === '/chat' ||
    pathname === '/chat-name' ||
    pathname === '/valentine' ||
    pathname === '/yes'

  return (
    <div className="min-h-screen flex flex-col">
      {!isValentinePage && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!isValentinePage && <Footer />}
    </div>
  )
}

export default Layout 