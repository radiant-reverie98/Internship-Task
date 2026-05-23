import React, { useEffect, useState } from 'react';

import BlogCard from './BlogCard';

import EmptyState from './EmptyState';

import api from '../../utils/axios.js';


const BlogsGrid = () => {

  const [blogs, setBlogs] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);


  // Fetch Blogs
  const fetchBlogs = async () => {

    try {

      setLoading(true);

      const response = await api.get(
        "/blog/all"
      );


      setBlogs(response.data.blogs);

    } catch (error) {

      console.error(error);

      setError(
        error.response?.data?.message ||
        "Failed to fetch blogs"
      );

    } finally {

      setLoading(false);
    }
  };


  useEffect(() => {
    fetchBlogs();
  }, []);


  // Loading State
  if (loading) {
    return (
      <section className="w-full min-h-[60vh] flex items-center justify-center bg-[#F8FAFC]">
        <p className="text-slate-500 text-sm font-medium">
          Loading blogs...
        </p>
      </section>
    );
  }


  // Error State
  if (error) {
    return (
      <section className="w-full min-h-[60vh] flex items-center justify-center bg-[#F8FAFC]">
        <p className="text-red-500 text-sm font-medium">
          {error}
        </p>
      </section>
    );
  }


  const hasBlogs = blogs.length > 0;


  return (
    <section
      className={`w-full bg-[#F8FAFC] font-sans antialiased ${
        hasBlogs
          ? 'pt-10 md:pt-16 pb-24 md:pb-32'
          : 'py-12 md:py-16'
      }`}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {
          hasBlogs ? (

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">

              {
                blogs.map((post) => (

                  <BlogCard
                    key={post.id}
                    post={post}
                  />
                ))
              }

            </div>

          ) : (

            <EmptyState />

          )
        }

      </div>
    </section>
  );
};

export default BlogsGrid;