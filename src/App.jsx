import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Bio from './sections/Bio.jsx'
import NavBar from './components/NavBar.jsx'
import Experience from './sections/Experience.jsx'
import Skills from './sections/Skills.jsx'
import Footer from './sections/Footer.jsx'
import ContactMe from './sections/ContactMe.jsx'

const App = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <About/>
      <Bio/>
      <Experience />
      <Skills />
      <ContactMe/>
      <Footer />
    </>
  )
}

export default App
