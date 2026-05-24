import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/sp0303' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/sharat-patnaik/' },
    { name: 'Email', icon: Mail, href: 'mailto:hello@sharatpatnayakuni.site' },
  ]

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Experience', path: '/#experience' },
    { name: 'Gallery', path: '/#gallery' },
  ]

  return (
    <footer className="py-12 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Brand & Mission */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-display font-bold text-slate-900 dark:text-white">
              Sharat<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
              Independent Developer & AI Specialist dedicated to building high-performance intelligence systems and algorithmic solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                link.path.startsWith('/#') ? (
                  <a
                    key={link.name}
                    href={link.path}
                    className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors py-1"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors py-1"
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4 md:items-end">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary dark:text-slate-500 dark:hover:text-primary transition-colors p-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800"
                  aria-label={`Visit my ${social.name} profile`}
                  title={`View Sharat on ${social.name}`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-50 dark:border-slate-800/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-slate-400 dark:text-slate-500 font-medium tracking-wider">
            © {currentYear} SHARAT PATNAIK (PATNAYAKUNI). ALL RIGHTS RESERVED.
          </p>
          {/* <div className="flex space-x-8 text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
