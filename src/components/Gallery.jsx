import { motion } from 'framer-motion'
import { Image as ImageIcon, Layout, LineChart, Code } from 'lucide-react'

const Gallery = () => {
  const items = [
    { title: "Trading Dashboard", icon: LineChart, size: "md:col-span-2 md:row-span-2" },
    { title: "AI Model Evaluation", icon: Layout, size: "" },
    { title: "FastK API Docs", icon: Code, size: "" },
    { title: "Market Regime Classifier", icon: LineChart, size: "md:col-span-2" },
  ]

  return (
    <section id="gallery" className="py-24 bg-surface-light dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-16 px-2">
          Visual <span className="text-primary">Portfolio</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {items.map((item, idx) => (
            <motion.div
              key={item.title + idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-3xl overflow-hidden glass group ${item.size}`}
            >
              <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 flex flex-col items-center justify-center p-8 text-center transition-all duration-500 group-hover:scale-105 group-hover:bg-slate-100 dark:group-hover:bg-slate-700">
                <item.icon size={48} className="text-primary/50 mb-4 group-hover:text-primary transition-colors" />
                <h3 className="text-lg font-bold text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-600 mt-2 italic">Mockup Placeholder</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 text-white font-bold">
                {item.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
