import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SkillsCarousel from './components/SkillsCarousel'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Expertise from './components/Expertise'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <SkillsCarousel />
        <Projects />
        <Experience />
        <Expertise />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}

export default App
