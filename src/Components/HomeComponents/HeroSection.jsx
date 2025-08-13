import React from 'react'
import { Button } from '../ui/button'

function HeroSection() {
  return (
    <div className="px-5 hero-section flex flex-col items-center py-40">
      <h1 className="text-3xl text-center lg:text-6xl font-medium text-primary">
        Ignite Your Tech Career with <b className="text-accent font-bold">CodSpark</b>
      </h1>
      <h2 className="text-lg text-center my-5 lg:text-3xl lg:my-10">Join Our Exciting Internship Journey</h2>
      <a href="https://forms.gle/CuyecjvGywQUu7iQ9" target='_blank'><Button>Apply Now</Button></a>
      
    </div>
  )
}

export default HeroSection
