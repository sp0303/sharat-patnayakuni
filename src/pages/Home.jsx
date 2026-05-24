import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import SkillsCarousel from '../components/SkillsCarousel'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Expertise from '../components/Expertise'
import Gallery from '../components/Gallery'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Sharat Patnaik (Patnayakuni) | Independent Developer & AI Specialist</title>
        <meta name="description" content="Official portfolio of Sharat Patnaik (also known as Sharat Patnayakuni), an Independent Developer specializing in AI/ML, Trading Systems, and High-Performance Engineering." />
        <meta name="keywords" content="Sharat Patnaik, Sharat Patnayakuni, Independent Developer, Software Engineer, AI Trading, Algorithmic Trading, Quant Finance, React Developer, Python Developer" />
        <link rel="canonical" href="https://sharatpatnayakuni.site/" />
      </Helmet>
      <Hero />
      <SkillsCarousel />
      <Projects />
      <Experience />
      <Expertise />
      <Gallery />
    </>
  )
}

export default Home
