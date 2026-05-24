import { motion } from 'framer-motion'
import { ExternalLink, Code2, Rocket } from 'lucide-react'
import { projects } from '../data/projects'

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 px-2">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl">
              A selection of high-impact engineering projects, from algorithmic trading engines to intelligent APIs.
            </p>
          </div>
          <motion.div
            whileHover={{ x: 5 }}
            className="mt-6 md:mt-0"
          >
            <a href="https://github.com/sp0303" className="flex items-center space-x-2 text-primary font-bold group">
              <span>View all on GitHub</span>
              <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-3xl group transition-all duration-300 ${project.featured
                ? 'premium-gradient text-white shadow-2xl md:col-span-2'
                : 'glass glow-hover'
                }`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-2xl ${project.featured ? 'bg-white/20' : 'bg-primary/10'}`}>
                  {project.featured ? <Rocket size={28} /> : <Code2 size={24} className="text-primary" />}
                </div>
                {!project.featured && (
                  <div className="flex space-x-3">
                    <a href={project.link} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      <ExternalLink size={20} className="text-slate-500" />
                    </a>
                  </div>
                )}
              </div>

              <h3 className={`text-2xl font-bold mb-3 ${project.featured ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                {project.title}
              </h3>

              <p className={`mb-8 leading-relaxed ${project.featured ? 'text-white/90' : 'text-slate-600 dark:text-slate-400'}`}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${project.featured
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.featured && (
                <div className="mt-8 flex space-x-4">
                  <a href="#" className="px-6 py-3 rounded-xl bg-white text-primary font-bold shadow-lg hover:shadow-xl transition-all">
                    View Strategy Docs
                  </a>
                  <a href="#" className="px-6 py-3 rounded-xl bg-white/10 text-white font-bold backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
                    GitHub Link
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
