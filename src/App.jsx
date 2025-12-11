import React from 'react'
import Hero from './sections/hero'
import NavBar from './components/NavBar'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Footer from './sections/Footer'
import ContactMe from './sections/ContactMe'

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
