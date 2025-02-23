import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../Components/ui/button'

function Services() {
  return (
    <div>
      <div className='bg-primary'>
        <div className='h-[40vh] container mx-auto flex flex-col items-start justify-center text-white '>
          <h1 className='font-bold text-5xl'>Services</h1>
          <p className='flex items-center gap-2'><Link to='/' >Home</Link> <ArrowRight size={15} /> Services</p>
        </div>
      </div>

      <div>
        <div className='container mx-auto my-10 text-center'>
          <h1 className='font-bold text-3xl text-accent'>Our Services</h1>
          <p className='text-lg my-5'>At CodSpark, we offer a wide range of affordable and high-quality tech solutions to help businesses establish and grow their digital presence. Whether you need a website, mobile app, or e-commerce platform, we have the expertise to bring your vision to life.</p>
        </div>
      </div>

      <div>
        <div className='container mx-auto my-10 grid grid-cols-2 flex items-center'>
          <img src="img1.gif" alt="" />
          <div>
            <h1 className='text-2xl font-bold'>Web Development – Build Your Online Presence</h1>
            <p className='text-lg my-5'>In today’s digital world, a website is a must-have for any business. Whether you run a small startup or a large enterprise, having a professional website helps you:<br /><br />
              Establish credibility and build trust with customers<br />
              Increase brand visibility and attract more clients<br />
              Provide seamless access to your products and services 24/7<br />
              <br />
              Our team specializes in custom website development, ensuring your site is fast, responsive, and user-friendly.</p>
            <a href="https://forms.gle/giCYZqAttDrjTQxCA"><Button>Hire Us</Button></a>
          </div>
        </div>
      </div>

      <div>
        <div className='container mx-auto my-10 grid grid-cols-2 flex items-center'>
          <div>
            <h1 className='text-2xl font-bold'>Mobile App Development – Power Your Business on the Go</h1>
            <p className='text-lg my-5'>With the increasing use of smartphones, having a mobile app can take your business to the next level. We create Android and iOS apps that are:<br /><br />
              <b>Custom-Built</b> – Designed to fit your business needs<br />
              <b>User-Friendly</b>User-Friendly – Smooth navigation and intuitive UI<br />
              <b>Scalable & Secure</b> – Apps that grow with your business<br />
              <br />
              From business apps to on-demand services, we bring your app ideas to life with cutting-edge technology.</p>
              <a href="https://forms.gle/giCYZqAttDrjTQxCA"><Button>Hire Us</Button></a>
          </div>
          <img src="mobileDevelopment.gif" alt="" />
        </div>
      </div>

      <div>
        <div className='container mx-auto my-10 grid grid-cols-2 flex items-center'>
          <img src="img2.gif" alt="" />
          <div>
            <h1 className='text-2xl font-bold'>E-Commerce Development – Sell Your Products Online</h1>
            <p className='text-lg my-5'>Want to launch your online store and start selling your products or services? We build feature-rich and high-performance e-commerce websites that help you:<br /><br />
              Expand your reach and attract online customers<br />
              Provide secure payment gateways for smooth transactions<br />
              Manage inventory, orders, and customers with ease<br />
              <br />
              No matter the size of your business, we create custom e-commerce solutions tailored to your needs.</p>
              <a href="https://forms.gle/giCYZqAttDrjTQxCA"><Button>Hire Us</Button></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
