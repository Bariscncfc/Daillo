import React, { useState } from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toogle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
    <Sidebar isOpen={isOpen} toogle={toogle} />
    <Navbar toogle={toogle} />
    <Hero/>
    </>
  )
}

export default Home