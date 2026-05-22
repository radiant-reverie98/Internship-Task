import React from 'react'
import BlogsHeader from '../components/blogs/BlogsHeader'
import BlogsGrid from '../components/blogs/BlogsGrid'
import Navbar from '../components/landing-page/Navbar'
import Footer from '../components/landing-page/Footer'

function BlogsPage() {
  return (
    <div>
      <Navbar/>
      <BlogsHeader/>
      <BlogsGrid/>
      <Footer/>
    </div>
  )
}

export default BlogsPage
