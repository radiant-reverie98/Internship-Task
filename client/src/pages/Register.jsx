import React, { useState } from 'react';

import api from '../utils/axios.js';

const Register = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await api.post(
        "/auth/register",
        formData
      );

      console.log(response.data);

      alert("Registration Successful");

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
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F8FAFC] p-4">

      <div className="w-full max-w-[400px] bg-white/80 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.02),0_1px_3px_rgba(0,0,0,0.01)] rounded-2xl p-8">

        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
          Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="space-y-1">
            <label
              className="text-xs font-semibold text-slate-600 uppercase tracking-wider"
              htmlFor="name"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all"
            />
          </div>


          <div className="space-y-1">
            <label
              className="text-xs font-semibold text-slate-600 uppercase tracking-wider"
              htmlFor="email"
            >
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className="w-full px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all"
            />
          </div>


          <div className="space-y-1">
            <label
              className="text-xs font-semibold text-slate-600 uppercase tracking-wider"
              htmlFor="password"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all"
            />
          </div>


          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold py-2.5 px-4 rounded-xl transition-all active:scale-[0.99] disabled:opacity-70"
          >
            {
              loading
                ? "Creating Account..."
                : "Create Account"
            }
          </button>

        </form>


        <p className="text-sm text-center text-slate-500 mt-6">
          Already have an account?{' '}

          <a
            href="/login"
            className="font-medium text-cyan-600 hover:text-cyan-500 transition-colors"
          >
            Log In
          </a>
        </p>

      </div>
    </div>
  );
};

export default Register;