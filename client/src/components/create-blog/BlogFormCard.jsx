import React, { useState } from 'react';

import api from '../../utils/axios.js';

const BlogFormCard = () => {

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    excerpt: '',
    content: '',
  });

  const [image, setImage] = useState(null);

  const [imageName, setImageName] = useState('');

  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleFileChange = (e) => {

    if (e.target.files && e.target.files[0]) {

      setImage(e.target.files[0]);

      setImageName(e.target.files[0].name);
    }
  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);


      // Create FormData
      const blogData = new FormData();

      blogData.append("title", formData.title);

      blogData.append("category", formData.category);

      blogData.append("excerpt", formData.excerpt);

      blogData.append("content", formData.content);

      blogData.append("image", image);


      // API Request
      const response = await api.post(
        "/blog/create",
        blogData
      );


      console.log(response.data);

      alert("Blog Published Successfully");


      // Reset Form
      setFormData({
        title: '',
        category: '',
        excerpt: '',
        content: '',
      });

      setImage(null);

      setImageName('');

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.message ||
        "Something went wrong"
      );

    } finally {

      setLoading(false);
    }
  };


  return (
    <section className="w-full bg-[#F8FAFC] pb-24 font-sans antialiased p-4">

      <div className="max-w-3xl mx-auto">

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-slate-200/60 rounded-2xl p-6 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.015),0_1px_3px_rgba(0,0,0,0.01)] space-y-6"
        >

          {/* Title */}
          <div className="space-y-1.5">

            <label
              className="text-xs font-bold text-slate-700 tracking-wider uppercase"
              htmlFor="title"
            >
              Blog Title
            </label>

            <input
              id="title"
              name="title"
              type="text"
              required
              value={formData.title}
              onChange={handleChange}
              placeholder="Blog title..."
              className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm"
            />
          </div>


          {/* Category */}
          <div className="space-y-1.5">

            <label
              className="text-xs font-bold text-slate-700 tracking-wider uppercase"
              htmlFor="category"
            >
              Category
            </label>

            <select
              id="category"
              name="category"
              required
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm"
            >
              <option value="">
                Select Category
              </option>

              <option value="engineering">
                Engineering
              </option>

              <option value="design">
                Design
              </option>

              <option value="growth">
                Growth
              </option>

              <option value="writing">
                Writing
              </option>
            </select>
          </div>


          {/* Image Upload */}
          <div className="space-y-1.5">

            <label className="text-xs font-bold text-slate-700 tracking-wider uppercase">
              Featured Image
            </label>

            <label className="relative flex flex-col items-center justify-center w-full min-h-[160px] bg-slate-50/50 border-2 border-dashed border-slate-200 rounded-xl cursor-pointer p-4">

              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              />

              <p className="text-sm font-semibold text-slate-700">
                {
                  imageName
                    ? imageName
                    : "Click to upload image"
                }
              </p>

            </label>
          </div>


          {/* Excerpt */}
          <div className="space-y-1.5">

            <label
              className="text-xs font-bold text-slate-700 tracking-wider uppercase"
              htmlFor="excerpt"
            >
              Short Excerpt
            </label>

            <textarea
              id="excerpt"
              name="excerpt"
              rows="2"
              required
              value={formData.excerpt}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm"
            />
          </div>


          {/* Content */}
          <div className="space-y-1.5">

            <label
              className="text-xs font-bold text-slate-700 tracking-wider uppercase"
              htmlFor="content"
            >
              Blog Content
            </label>

            <textarea
              id="content"
              name="content"
              rows="8"
              required
              value={formData.content}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm"
            />
          </div>


          {/* Submit */}
          <div className="flex items-center justify-end pt-4 border-t border-slate-100">

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-sm rounded-xl"
            >
              {
                loading
                  ? "Publishing..."
                  : "Publish Article"
              }
            </button>

          </div>

        </form>
      </div>
    </section>
  );
};

export default BlogFormCard;