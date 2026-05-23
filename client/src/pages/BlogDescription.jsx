import React, {
  useEffect,
  useState,
} from 'react';

import { useParams } from 'react-router-dom';

import Navbar from '../components/landing-page/Navbar';

import Footer from '../components/landing-page/Footer';

import BlogHeader from '../components/blogs-desc/BlogHeader';

import FeaturedImage from '../components/blogs-desc/FeaturedImage';

import BlogContent from '../components/blogs-desc/BlogContent';

import Comments from '../components/blogs-desc/Comments';

import api from '../utils/axios.js';


function BlogDescription() {

  const { id } = useParams();

  const [blog, setBlog] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);


  // Fetch Single Blog
  const fetchBlog = async () => {

    try {

      setLoading(true);

      const response = await api.get(
        `/blog/${id}`
      );


      setBlog(response.data.blog);

    } catch (error) {

      console.error(error);

      setError(
        error.response?.data?.message ||
        "Failed to fetch blog"
      );

    } finally {

      setLoading(false);
    }
  };


  useEffect(() => {
    fetchBlog();
  }, [id]);


  // Loading
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
        <p className="text-slate-500 text-sm font-medium">
          Loading article...
        </p>
      </div>
    );
  }


  // Error
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
        <p className="text-red-500 text-sm font-medium">
          {error}
        </p>
      </div>
    );
  }


  return (
    <div className="bg-[#F8FAFC] min-h-screen">

      <Navbar />

      <BlogHeader blog={blog} />

      <FeaturedImage image={blog.image} />

      <BlogContent content={blog.content} />

      <Comments />

      <Footer />

    </div>
  );
}

export default BlogDescription;