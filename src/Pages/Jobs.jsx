import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function Jobs() {
  return (
    <div>
          <div className='bg-primary'>
          <div className='h-[40vh] container m-auto flex flex-col items-start justify-center text-white '>
            <h1 className='font-bold text-5xl'>Jobs</h1>
            <p className='flex items-center gap-2'><Link to='/' >Home</Link> <ArrowRight size={15}/> Jobs</p>
          </div>
          </div>
          <div>
            <h1 className='font-medium text-3xl text-accent'>Welcome to CodSpark – Where Innovation Meets Excellence!</h1>
          </div>
        </div>
  )
}

export default Jobs
