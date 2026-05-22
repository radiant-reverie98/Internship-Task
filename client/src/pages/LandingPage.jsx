import React from 'react'
import Navbar from '../components/landing-page/Navbar'
import Hero from '../components/landing-page/Hero'
import FeaturedBlogs from '../components/landing-page/FeaturedBlogs'
import WhyChooseUs from '../components/landing-page/WhyChooseUs'
import CallToAction from '../components/landing-page/CallToAction'
import Footer from '../components/landing-page/Footer'

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
