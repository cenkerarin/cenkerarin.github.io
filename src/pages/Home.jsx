import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const RUNWAY_THRESHOLD = 100
const PADDING = 24

const Home = () => {
  const noButtonRef = useRef(null)
  const [noButtonPosition, setNoButtonPosition] = useState(null)
  const [noButtonSize, setNoButtonSize] = useState(null)
  const [yesScale, setYesScale] = useState(1)
  const rafRef = useRef(null)

  // Measure No button once it's in the DOM, then switch to fixed positioning
  useEffect(() => {
    if (!noButtonRef.current || noButtonPosition !== null) return
    const rect = noButtonRef.current.getBoundingClientRect()
    setNoButtonSize({ w: rect.width, h: rect.height })
    setNoButtonPosition({ x: rect.left, y: rect.top })
  }, [noButtonPosition])

  // Move No button away when cursor gets near
  useEffect(() => {
    if (noButtonPosition === null || noButtonSize === null) return

    const handleMouseMove = (e) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        const mx = e.clientX
        const my = e.clientY
        const cx = noButtonPosition.x + noButtonSize.w / 2
        const cy = noButtonPosition.y + noButtonSize.h / 2
        const distance = Math.hypot(mx - cx, my - cy)
        if (distance >= RUNWAY_THRESHOLD) return

        // Push the button away from the cursor along the direction cursor→center
        const dx = cx - mx
        const dy = cy - my
        const len = Math.hypot(dx, dy) || 1
        const ux = dx / len
        const uy = dy / len
        const escapeDistance = RUNWAY_THRESHOLD + 80
        const newCx = mx + ux * escapeDistance
        const newCy = my + uy * escapeDistance
        let newX = newCx - noButtonSize.w / 2
        let newY = newCy - noButtonSize.h / 2
        newX = Math.max(PADDING, Math.min(window.innerWidth - noButtonSize.w - PADDING, newX))
        newY = Math.max(PADDING, Math.min(window.innerHeight - noButtonSize.h - PADDING, newY))
        setNoButtonPosition({ x: newX, y: newY })
        setYesScale((prev) => prev + 0.12)
        rafRef.current = null
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [noButtonPosition, noButtonSize])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-rose-50 to-pink-50 dark:from-gray-900 dark:to-rose-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-rose-800 dark:text-rose-200">
          Size sevgilim demek istiyorum Selin Hanım
        </h1>

        <div className="flex flex-row gap-4 justify-center items-center flex-wrap">
          <motion.div
            animate={{ scale: yesScale }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <Link
              to="/yes"
              className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-lg text-white bg-rose-500 hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-colors"
            >
              Demelisin
            </Link>
          </motion.div>

          {noButtonPosition === null ? (
            <button
              ref={noButtonRef}
              type="button"
              className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-lg border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-default"
              onClick={(e) => e.preventDefault()}
            >
              hayır.
            </button>
          ) : (
            <>
              <div
                className="invisible inline-flex items-center px-6 py-3 text-lg font-medium rounded-lg border-2 border-transparent"
                style={{ width: noButtonSize?.w, height: noButtonSize?.h }}
                aria-hidden
              />
              <motion.button
                type="button"
                className="fixed inline-flex items-center px-6 py-3 text-lg font-medium rounded-lg border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-default z-10"
                style={{
                  left: noButtonPosition.x,
                  top: noButtonPosition.y,
                }}
                initial={false}
                animate={{ left: noButtonPosition.x, top: noButtonPosition.y }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                onClick={(e) => e.preventDefault()}
              >
                hayır.
              </motion.button>
            </>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default Home
