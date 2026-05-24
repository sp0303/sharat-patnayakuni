import { motion } from 'framer-motion'
import { moments } from '../data/moments'

const PhotoMarquee = () => {
  const speed = 60

  const marqueeVariants = {
    animate: {
      x: [0, -2880], // (18 items * (256px width + 24px gap)) / 2
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        },
      },
    },
  }

  // The inner track needs to be exactly the same for both layers
  const MarqueeTrack = ({ isColor }) => (
    <motion.div
      className="flex space-x-6 px-3"
      variants={marqueeVariants}
      animate="animate"
    >
      {[...moments, ...moments].map((photo, idx) => (
        <div
          key={photo.id + '-' + idx}
          className={`flex-shrink-0 w-64 h-80 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-end p-6 group relative overflow-hidden transition-all duration-500 shadow-xl border border-slate-100 dark:border-slate-800`}
        >
          <img
            src={photo.src}
            alt={photo.label}
            className={`absolute inset-0 w-full h-full object-cover brightness-90 transition-all duration-700 ${
              isColor ? 'grayscale-0' : 'grayscale'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
        </div>
      ))}
    </motion.div>
  )

  return (
    <section className="py-24 overflow-hidden bg-white dark:bg-slate-900 border-t border-slate-50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 mb-16 px-2">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">
          Featured <span className="text-primary text-glow">Moments</span>
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl">
          Glimpses into campus leadership, national fests, and social impact initiatives.
        </p>
      </div>

      <div className="relative group min-h-[350px]">
        {/* Base Layer: Grayscale Marquee */}
        <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20">
             <MarqueeTrack isColor={false} />
        </div>

        {/* Top Layer: Spotlight Color Marquee */}
        <div 
          className="relative z-10 pointer-events-none"
          style={{
            maskImage: 'linear-gradient(to right, transparent 5%, black 25%, black 75%, transparent 95%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 5%, black 25%, black 75%, transparent 95%)'
          }}
        >
          <div className="pointer-events-auto">
             <MarqueeTrack isColor={true} />
          </div>
        </div>

        {/* Decorative Spotlight Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-full bg-primary/5 blur-[100px] pointer-events-none rounded-full" />
      </div>
    </section>
  )
}

export default PhotoMarquee
