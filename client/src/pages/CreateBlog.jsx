import React from 'react'
import BlogHeader from '../components/create-blog/BlogHeader'
import Navbar from '../components/landing-page/Navbar'
import BlogFormCard from '../components/create-blog/BlogFormCard'
import Footer from '../components/landing-page/Footer'

function CreateBlog() {
  return (
    <div>
        <Navbar/>
      <BlogHeader/>
      <BlogFormCard/>
      <Footer/>
    </div>
  )
}

export default CreateBlog
