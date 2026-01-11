import About from '@/Component/About'
import Contact from '@/Component/Contact'
import HeroSection from '@/Component/HeroSection'
import NavBar from '@/Component/NavBar'
import Project from '@/Component/Project'
import Skills from '@/Component/Skills'

import React from 'react'

const Home = () => {
  return (
    <div className='   w-full overflow-x-hidden'>
      <NavBar/>
      
      <HeroSection/>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default Home