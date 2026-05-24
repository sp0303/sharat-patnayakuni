import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import Education from '../components/Education'
import Leadership from '../components/Leadership'
import PhotoMarquee from '../components/PhotoMarquee'
import profileImg from '../assets/images/sp_cl_coat.webp'

const About = () => {
  return (
    <div className="pt-24 min-h-screen">
      <Helmet>
        <title>Journey of Sharat Patnaik | Independent Developer & Leader</title>
        <meta name="description" content="Explore the journey of Sharat Patnaik (Sharat Patnayakuni), an Independent Developer and Leader. From AU United Club presidency to building intelligent trading systems." />
        <meta name="keywords" content="Sharat Patnaik, Sharat Patnayakuni, Independent Developer, Leadership, AU United Club, Andhra University, Software Engineer" />
        <link rel="canonical" href="https://sharatpatnayakuni.site/about" />
      </Helmet>
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-20">
            <div className="flex-1 text-left">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6 leading-tight"
              >
                About <span className="text-primary text-glow font-extrabold">Sharat</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed font-medium"
              >
                A dedicated <span className="text-slate-900 dark:text-white font-semibold">Independent Developer</span> and Leader with a passion for building intelligent systems and fostering vibrant student communities. Explore my academic background and professional journey.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex-shrink-0 relative"
            >
              <div className="relative">
                <div className="absolute -inset-6 bg-primary/20 blur-3xl rounded-full animate-pulse" />
                <div className="relative glass p-2 rounded-full shadow-2xl border-white/20 w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80">
                  <img
                    src={profileImg}
                    alt="Sharat Patnayakuni - Software Engineer and Portfolio Hero Profile"
                    className="w-full h-full rounded-full object-cover shadow-inner"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="space-y-0">
        <Education />
        <Leadership />
        <PhotoMarquee />
      </div>
    </div>
  )
}

export default About
