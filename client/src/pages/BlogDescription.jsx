import React from 'react'
import BlogHeader from '../components/blogs-desc/BlogHeader'
import Navbar from '../components/landing-page/Navbar'
import FeaturedImage from '../components/blogs-desc/FeaturedImage'
import BlogContent from '../components/blogs-desc/BlogContent'
import Comments from '../components/blogs-desc/Comments'
import Footer from '../components/landing-page/Footer'

function BlogDescription() {
  return (
    <div>
      <Navbar/>
      <BlogHeader/>
      <FeaturedImage/>
      <BlogContent/>
      <Comments/>
      <Footer/>
    </div>
  )
}

export default BlogDescription
