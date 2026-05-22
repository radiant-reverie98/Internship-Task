import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeaturedBlogs from '../components/FeaturedBlogs'
import WhyChooseUs from '../components/WhyChooseUs'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'

function LandingPage() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FeaturedBlogs/>
      <WhyChooseUs/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default LandingPage
