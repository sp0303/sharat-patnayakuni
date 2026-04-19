import { motion } from 'framer-motion'
import { Rocket, ArrowRight, ShieldCheck, Zap } from 'lucide-react'
import profileImg from '../assets/images/sp_cl_coat.webp'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl dark:bg-indigo-500/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-medium mb-6">
              <Zap size={14} className="text-primary" />
              <span>Available for serious engineering roles</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Sharat <br />
              <span className="text-primary">Patnayakuni</span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-xl">
              Software Engineer specializing in <span className="text-slate-900 dark:text-white font-semibold">AI & Machine Learning</span>. 
              Building intelligent systems and high-performance algorithmic trading engines.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#projects"
                className="px-8 py-4 rounded-full premium-gradient text-white font-bold flex items-center justify-center space-x-2 glow-hover"
              >
                <span>View Projects</span>
                <ArrowRight size={20} />
              </a>
              <a
                href="#"
                className="px-8 py-4 rounded-full border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold flex items-center justify-center space-x-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
              >
                <Rocket size={20} className="text-primary" />
                <span>Trading System</span>
              </a>
            </div>

            <div className="mt-12 flex items-center space-x-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="w-full h-full object-cover grayscale opacity-50" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-500">
                <span className="text-slate-900 dark:text-white font-bold">7+ Strategies</span> active in <br /> algorithmic trading engines.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group border-4 border-white dark:border-slate-800">
              <img 
                src={profileImg} 
                alt="Sharat Patnayakuni" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
