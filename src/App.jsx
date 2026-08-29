import BackgroundFX from './components/BackgroundFX.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TechMarquee from './components/TechMarquee.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Process from './components/Process.jsx'
import WhyZeeLux from './components/WhyZeeLux.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <BackgroundFX />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Process />
        <WhyZeeLux />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
