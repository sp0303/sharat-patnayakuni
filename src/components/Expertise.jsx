import { motion } from 'framer-motion'
import { Brain, Cpu, BarChart3, Database } from 'lucide-react'

const Expertise = () => {
  const expertises = [
    {
      title: "AI & Machine Learning",
      description: "Developing predictive models and intelligent systems using XGBoost, TensorFlow, and advanced NLP transformers.",
      icon: Brain,
      color: "bg-blue-500",
    },
    {
      title: "Full Stack Development",
      description: "Crafting end-to-end applications with React, Node.js, and FastAPI, focused on performance and scalability.",
      icon: Cpu,
      color: "bg-indigo-500",
    },
    {
      title: "Trading Systems",
      description: "Designing low-latency algorithmic trading engines and quantitative research pipelines for market analysis.",
      icon: BarChart3,
      color: "bg-emerald-500",
    },
    {
      title: "Data Engineering",
      description: "Building robust data pipelines and processing high-frequency financial data for real-time intelligence.",
      icon: Database,
      color: "bg-sky-500",
    }
  ]

  return (
    <section id="expertise" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-16 text-center">
          Areas of <span className="text-primary">Expertise</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertises.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl glass glow-hover text-center group"
            >
              <div className={`w-16 h-16 rounded-2xl ${item.color} mx-auto flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise
