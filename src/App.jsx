import Hero from './sections/Hero.jsx'
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
      <Experience />
      <Skills />
      <ContactMe/>
      <Footer />
    </>
  )
}

export default App
