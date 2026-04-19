import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'
import { experience } from '../data/experience'

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-surface-light dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-16 px-2">
          Professional <span className="text-primary">Journey</span>
        </h2>

        <div className="space-y-12">
          {experience.map((item, idx) => (
            <motion.div
              key={item.company + idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative pl-10 border-l-2 border-slate-200 dark:border-slate-800 ml-4 pb-4"
            >
              <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-4 border-primary shadow-lg" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Briefcase size={20} className="text-primary" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {item.role} @ <span className="text-primary">{item.company}</span>
                  </h3>
                </div>
                <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400 mt-2 md:mt-0 font-medium">
                  <Calendar size={16} />
                  <span>{item.period}</span>
                </div>
              </div>
              
              <p className="text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
