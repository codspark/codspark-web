import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import CommunitySection from '../Components/HomeComponents/CommunitySection'

function AboutUs() {
  return (
    <div>
      <div className=' bg-primary '>
        <div className='h-[40vh] container mx-auto flex flex-col items-start justify-center text-white '>
          <h1 className='font-bold text-5xl'>About Us</h1>
          <p className='flex items-center gap-2'><Link to='/' >Home</Link> <ArrowRight size={15} /> About Us</p>
        </div>
      </div>
      <div>
        {/* <div className='flex flex-col items-center my-10'>
          <img src="CodSpark.png" alt="CodSpark" width={200}/>
          <div className="flex justify-center mb-8">
            <div className="bg-accent w-40 h-1"></div>
          </div>
        </div> */}
        <div className='container mx-auto my-10'>
          <h1 className='font-bold text-3xl text-accent'>Welcome to CodSpark – Where Innovation Meets Excellence!</h1>
          <p className='text-lg my-5'>At <b>CodSpark</b>, we are more than just a technology company—we are a hub of innovation, expertise, and growth. We specialize in IT services, IT consulting, web development, app development, and software solutions, helping businesses leverage the power of technology to thrive in the digital era.</p>
        </div>

        <div className='container mx-auto my-10'>
          <h1 className='font-bold text-3xl text-accent'>Who We Are</h1>
          <p className='text-lg my-5'><b>CodSpark</b> was founded with a vision to empower businesses and aspiring tech professionals by providing cutting-edge technology solutions and hands-on learning opportunities. Our team consists of experienced industry experts who are passionate about building world-class digital products and nurturing the next generation of tech leaders.</p>
        </div>

        <div className='container mx-auto my-10'>
          <h1 className='font-bold text-3xl text-accent'>What We Do</h1>
          <p className='text-lg my-5'><b>IT Services & Consulting</b> – We provide expert guidance and tailor-made solutions to help businesses navigate the complexities of modern technology.<br />
            <b>Web & App Development</b> – From dynamic websites to feature-rich mobile apps, we create seamless digital experiences that drive success.<br />
            <b>Software Solutions</b> – We develop scalable, secure, and high-performance software tailored to meet unique business needs.<br />
            <b>Internship Program</b> – We offer a free, hands-on internship where students work on real-world projects under the mentorship of industry experts.</p>
        </div>

        <div className='container mx-auto my-10'>
          <h1 className='font-bold text-3xl text-accent'>Why Choose CodSpark?</h1>
          <p className='text-lg my-5'><b>Innovative Solutions</b> – We blend creativity with technology to deliver solutions that stand out.<br />
            <b>Expert Team</b> – Our professionals bring years of experience in IT services and software development.<br />
            <b>Hands-On Learning</b> – We believe in practical experience, offering training and internships to shape future tech leaders.<br />
            <b>Client-Centric Approach</b> – We work closely with our clients to understand their needs and deliver results that exceed expectations.</p>
        </div>

        <div className='container mx-auto my-10'>
          <h1 className='font-bold text-3xl text-accent'>Our Vision & Mission</h1>
          <p className='text-lg my-5'>At <b>CodSpark</b>, our mission is to bridge the gap between theory and practice by providing innovative solutions for businesses and valuable learning opportunities for aspiring developers. We are committed to driving digital transformation and shaping the future of technology.<br/><br/>
            Let’s build the future, together!<br/>
            <br/>
            Ready to collaborate? Contact us today!</p>
        </div>
      </div>
      <CommunitySection />
    </div>
  )
}

export default AboutUs
