import { motion } from 'framer-motion'
import { skills } from '../data/skills'

const SkillsCarousel = () => {
  // Triple the skills to ensure smooth infinite loop
  const duplicatedSkills = [...skills, ...skills, ...skills]

  return (
    <section id="skills" className="py-24 bg-surface-light dark:bg-slate-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white text-center">
          Technical <span className="text-primary">Ecosystem</span>
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400 text-center max-w-2xl mx-auto">
          A robust set of tools and technologies I've mastered to build intelligence-driven software solutions.
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-infinite-scroll flex space-x-8 whitespace-nowrap py-10">
          {duplicatedSkills.map((skill, idx) => (
            <motion.div
              key={`${skill.category}-${idx}`}
              whileHover={{ y: -5 }}
              className="flex-shrink-0 w-64 p-8 rounded-3xl glass glow-hover flex flex-col items-center justify-center text-center group/card"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 group-hover/card:text-primary transition-colors">
                {skill.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsCarousel
