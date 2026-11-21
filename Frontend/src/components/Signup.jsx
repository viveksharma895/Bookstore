import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 px-4 pt-28 pb-20 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
        <div className="mx-auto w-full max-w-md">
          <div className="rounded-2xl bg-white p-6 shadow-xl shadow-indigo-100 sm:p-8 dark:bg-slate-800 dark:shadow-none">
            {/* Signup Header */}
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Create Your Account
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                Join the bookstore and start your journey today
              </p>
            </div>

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="signup-name"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200"
                >
                  Name
                </label>
                <input
                  id="signup-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:focus:bg-slate-700"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="signup-email"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200"
                >
                  Email
                </label>
                <input
                  id="signup-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:focus:bg-slate-700"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="signup-password"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="signup-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    minLength={6}
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 pr-16 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:focus:bg-slate-700"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-indigo-600 dark:text-indigo-400"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Signup Button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white shadow-md shadow-indigo-100 transition-all duration-200 hover:bg-indigo-700 active:scale-[0.98]"
              >
                Signup
              </button>
            </form>

            {submitted && (
              <p className="mt-4 text-center text-sm font-medium text-green-600 dark:text-green-400">
                Your account has been created successfully!
              </p>
            )}

            {/* Login Popup Link */}
            <div className="mt-6 border-t border-gray-100 pt-5 text-center text-sm text-gray-500 dark:border-slate-700 dark:text-gray-300">
              Already have an account?
              <button
                type="button"
                onClick={() => document.getElementById("my_modal_3")?.showModal()}
                className="ml-1 font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Signup;
