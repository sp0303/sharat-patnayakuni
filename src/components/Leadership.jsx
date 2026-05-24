import { motion } from 'framer-motion'
import { Award, Users, Zap, CheckCircle2 } from 'lucide-react'
import { leadership } from '../data/leadership'

const Leadership = () => {
  return (
    <section id="leadership" className="py-24 bg-surface-light dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">
            Leadership & <span className="text-primary">Impact</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Leading large-scale student communities and high-impact fests at Andhra University, fostering innovation and collaborative growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {leadership.map((item, idx) => (
            <motion.div
              key={item.role + idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl glow-hover relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Award size={120} className="text-primary" />
              </div>

              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                    <Users size={24} />
                  </div>
                  <span className="text-sm font-bold text-primary px-3 py-1 rounded-full bg-primary/5 uppercase tracking-wider">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                  {item.role}
                </h3>
                <p className="text-primary font-semibold mb-4 tracking-wide text-sm uppercase">
                  {item.organization}
                </p>

                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-auto space-y-3">
                  <h4 className="flex items-center space-x-2 text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest">
                    <Zap size={14} className="text-primary" />
                    <span>Key Impacts</span>
                  </h4>
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start space-x-2 text-sm text-slate-500 dark:text-slate-400">
                        <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leadership
