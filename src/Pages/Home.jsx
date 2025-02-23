import React from 'react'
import HeroSection from '../Components/HomeComponents/HeroSection'
import AboutUs from '../Components/HomeComponents/AboutUs'
import Services from '../Components/HomeComponents/Services'
import Ecommerce from '../Components/HomeComponents/Ecommerce'
import ContactToBuildWeb from '../Components/HomeComponents/ContactToBuildWeb'
import CommunitySection from '../Components/HomeComponents/CommunitySection'
import InternshipSection from '../Components/HomeComponents/InternshipSection'
import FeaturesSection from '../Components/HomeComponents/FeaturesSection'
import WhyChooseUs from '../Components/HomeComponents/WhyChooseUs'

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Services />
      <Ecommerce />
      <ContactToBuildWeb />
      <InternshipSection />
      <FeaturesSection />
      <WhyChooseUs />
      <CommunitySection />
    </div>
  )
}

export default Home
