import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import WorkExperience from './components/WorkExperience/WorkExperience'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'
import Environments from './components/Environments/Environments'

const App = () => {
  return (
  <>
      <Navbar />
      <div className="container">
        <Hero/>
        <Skills />
        <Environments />
        <WorkExperience />
        <ContactMe />
      </div>
      <Footer />
  </>
  )
}

export default App