import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import InternshipSection from '../Components/HomeComponents/InternshipSection'
import WhyChooseUs from '../Components/HomeComponents/WhyChooseUs'

function Internships() {
  return (
    <div>
      <div className='bg-primary px-10 lg:px-0'>
        <div className='h-[40vh] container m-auto flex flex-col items-start justify-center text-white '>
          <h1 className='font-bold text-3xl lg:text-5xl '>Internships</h1>
          <p className='flex items-center gap-2'><Link to='/' >Home</Link> <ArrowRight size={15} /> Internships</p>
        </div>
      </div>

      <div>
        <div className='container px-5 mx-auto my-10 '>
          <h1 className='font-bold text-3xl text-accent text-center'>Our Internships</h1>
          <p className='text-lg my-5 text-justify'>At <b>CodSpark</b>, we are passionate about technology, innovation, and learning. We believe that hands-on experience is the key to mastering the tech industry, and our internship program is one of the ways we invest in the future of aspiring developers and tech enthusiasts.<br/><br/>

            Our program is designed to bridge the gap between theory and practice, providing students with real-world experience by working on live projects under the mentorship of industry experts. Through this approach, we help individuals enhance their technical skills, build confidence, and prepare for a successful career in web development, app development, and software engineering.<br/><br/>

            At <b>CodSpark</b>, we foster an inclusive and innovative environment that encourages creativity, collaboration, and continuous learning. Our team is dedicated to guiding interns, equipping them with the right skills and knowledge to thrive in the ever-evolving tech world.<br/>

            🚀 Join us and take the first step towards a bright future in tech!</p>
        </div>
      </div>
      <InternshipSection />
      <WhyChooseUs />
    </div>
  )
}

export default Internships
