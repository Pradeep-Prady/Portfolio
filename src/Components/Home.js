import React from 'react'
import Navbar from './layouts/Navbar'
import Header from './layouts/Header/Header'
import About from './layouts/About'
import Skills from './layouts/Skills'
import Portfolio from './layouts/Portfolio/Portfolio'
import Contact from './layouts/Contact'
import Footer from './layouts/Footer'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}
