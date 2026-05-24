import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sun, Moon, Rocket, Menu, X } from 'lucide-react'

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Refactored nav links: Home and About are page links, others are section anchors
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Experience', path: '/#experience' },
    { name: 'Gallery', path: '/#gallery' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex-shrink-0 flex items-center group">
            <span className="text-2xl font-display font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
              Sharat<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.path.startsWith('/#') ? (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.path) 
                      ? 'text-primary' 
                      : 'text-slate-600 dark:text-slate-300 hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
            >
              {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-600" />}
            </button>
            <a
              href="https://trading-system.sharatpatnayakuni.site"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full premium-gradient text-white text-sm font-semibold flex items-center space-x-2 glow-hover"
              aria-label="Launch Trading System Dashboard"
              title="View Live Algorithmic Trading Platform"
            >
              <Rocket size={16} />
              <span>Trading System</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-900 dark:text-white"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              title="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass mt-2 mx-4 rounded-2xl p-4 flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              link.path.startsWith('/#') ? (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-600 dark:text-slate-300 hover:text-primary"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                   onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    isActive(link.path) 
                      ? 'text-primary' 
                      : 'text-slate-600 dark:text-slate-300 hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
            <a
              href="https://trading-system.sharatpatnayakuni.site"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full justify-center px-5 py-3 rounded-xl premium-gradient text-white text-base font-semibold flex items-center space-x-2"
            >
              <Rocket size={18} />
              <span>Trading System</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

import { AnimatePresence, motion } from 'framer-motion'
export default Navbar
