import React from 'react'
import { Button } from '../ui/button'

function HeroSection() {
  return (
    <div className="hero-section flex flex-col items-center py-40">
      <h1 className="text-6xl font-medium text-primary">
        Ignite Your Tech Career with <b className="text-accent">CodSpark</b>
      </h1>
      <h2 className="text-3xl my-10">Join Our Exciting Internship Journey</h2>
      <a href="https://forms.gle/CuyecjvGywQUu7iQ9" target='_blank'><Button>Apply Now</Button></a>
      
    </div>
  )
}

export default HeroSection
