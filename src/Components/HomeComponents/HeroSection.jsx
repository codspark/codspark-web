import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <div className="h-[95vh] pt-[30px] hero-section flex flex-col justify-center items-center">
      
      <div className='font-bold text-accent'>BEST IT SOLUTION COMPANY</div>
      <div className="text-3xl text-center lg:text-7xl font-bold text-primary">
        Web Design, SEO &<br/>Internet Marketing For<br/><div className="text-accent">Your Business</div>
      </div>
      <h2 className="text-md text-gray-700 text-center my-5 lg:text-lg lg:my-10 max-w-4xl">We are a leading company specializing in professional website design, web development, and digital marketing services—helping businesses grow with innovative technology and results-driven solutions.</h2>
      <div className='flex gap-3'>
        <Button size={"xl"}><Link to={'/contact'}>Get Start Now</Link></Button>
        <Button size={"xl"}><Link to={'/contact'}>Portfolio</Link></Button>
      </div>
      
    </div>
  )
}

export default HeroSection
