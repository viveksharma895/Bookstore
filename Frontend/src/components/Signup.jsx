import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  normalizeSpaces,
  spaceRules,
  createNormalizedChangeHandler,
} from "../utils/validation";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [signupError, setSignupError] = useState("");

  // use react hook form for form handling
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { name: "", email: "", password: "" },
  });

  const onSubmit = async (data) => {
    setSubmitting(true);
    setSignupError("");
    setSubmitted(false);

    try {
      await axios.post("http://localhost:4000/users/signup", {
        fullname: data.name,
        email: data.email,
        password: data.password,
      });
      setSubmitted(true);
    } catch (error) {
      setSignupError(
        error.response?.data?.message ||
          "Could not create your account. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const nameField = register("name", {
    required: "Name is required",
    minLength: { value: 2, message: "Name must be at least 2 characters" },
    validate: spaceRules,
    setValueAs: normalizeSpaces,
  });

  const emailField = register("email", {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Enter a valid email address",
    },
    validate: spaceRules,
    setValueAs: normalizeSpaces,
  });

  const passwordField = register("password", {
    required: "Password is required",
    minLength: {
      value: 6,
      message: "Password must be at least 6 characters",
    },
    validate: spaceRules,
    setValueAs: normalizeSpaces,
  });
  // use react hook form for form handling

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-50 px-4 pt-28 pb-20 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
        {/* Animated SVG background graphics */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          {/* Subtle dotted texture */}
          <svg
            className="absolute inset-0 h-full w-full text-indigo-200 dark:text-slate-700/60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="signup-dots"
                width="32"
                height="32"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.6" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#signup-dots)" />
          </svg>

          {/* Drifting soft blobs */}
          <svg
            className="signup-drift absolute -left-20 top-1/3 h-64 w-64 text-indigo-100 dark:text-indigo-950/60"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="100" cy="100" r="90" fill="currentColor" />
          </svg>
          <svg
            className="signup-drift-slow absolute -right-24 top-10 h-72 w-72 text-blue-100 dark:text-blue-950/60"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="100" cy="100" r="90" fill="currentColor" />
          </svg>

          {/* Floating open book */}
          <svg
            className="signup-float absolute left-[5%] top-28 h-24 w-24 text-indigo-300 dark:text-indigo-800/50 sm:h-36 sm:w-36"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M32 14c-5-4-12-5-20-3v34c8-2 15-1 20 3 5-4 12-5 20-3V11c-8-2-15-1-20 3Z" />
            <path d="M32 14v34" />
            <path d="M17 21c4-.5 7 0 10 2M17 28c4-.5 7 0 10 2M37 23c3-2 6-2.5 10-2M37 30c3-2 6-2.5 10-2" />
          </svg>

          {/* Floating stack of books */}
          <svg
            className="signup-float-slow absolute right-[6%] top-52 h-20 w-20 text-blue-300 dark:text-blue-900/50 sm:h-32 sm:w-32"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="10" y="42" width="44" height="9" rx="2" />
            <rect x="14" y="30" width="38" height="9" rx="2" />
            <rect x="12" y="18" width="40" height="9" rx="2" />
          </svg>

          {/* Floating book (lower right) */}
          <svg
            className="signup-float-delayed absolute bottom-16 right-[12%] h-20 w-20 text-violet-300 dark:text-violet-900/50"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M32 14c-5-4-12-5-20-3v34c8-2 15-1 20 3 5-4 12-5 20-3V11c-8-2-15-1-20 3Z" />
            <path d="M32 14v34" />
          </svg>

          {/* Twinkling sparkles */}
          <svg
            className="signup-twinkle absolute left-[18%] top-1/3 h-6 w-6 text-yellow-400 dark:text-yellow-600/60"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0c.7 6.6 4.7 10.6 12 12-7.3 1.4-11.3 5.4-12 12C11.3 17.4 7.3 13.4 0 12 7.3 10.6 11.3 6.6 12 0Z" />
          </svg>
          <svg
            className="signup-twinkle-delayed absolute right-[22%] top-24 h-5 w-5 text-pink-400 dark:text-pink-700/60"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0c.7 6.6 4.7 10.6 12 12-7.3 1.4-11.3 5.4-12 12C11.3 17.4 7.3 13.4 0 12 7.3 10.6 11.3 6.6 12 0Z" />
          </svg>
          <svg
            className="signup-twinkle absolute bottom-28 left-[12%] h-4 w-4 text-indigo-400 dark:text-indigo-700/60"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0c.7 6.6 4.7 10.6 12 12-7.3 1.4-11.3 5.4-12 12C11.3 17.4 7.3 13.4 0 12 7.3 10.6 11.3 6.6 12 0Z" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-md">
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="space-y-5"
            >
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
                  type="text"
                  placeholder="Enter your full name"
                  aria-invalid={errors.name ? "true" : "false"}
                  className={`w-full rounded-lg border bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-2 dark:bg-slate-700 dark:text-white dark:focus:bg-slate-700 ${
                    errors.name
                      ? "border-red-500 focus:border-red-500 focus:ring-red-100 dark:border-red-500"
                      : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-100 dark:border-slate-600"
                  }`}
                  {...nameField}
                  onChange={createNormalizedChangeHandler(nameField)}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.name.message}
                  </p>
                )}
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
                  type="email"
                  placeholder="Enter your email address"
                  aria-invalid={errors.email ? "true" : "false"}
                  className={`w-full rounded-lg border bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-2 dark:bg-slate-700 dark:text-white dark:focus:bg-slate-700 ${
                    errors.email
                      ? "border-red-500 focus:border-red-500 focus:ring-red-100 dark:border-red-500"
                      : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-100 dark:border-slate-600"
                  }`}
                  {...emailField}
                  onChange={createNormalizedChangeHandler(emailField)}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.email.message}
                  </p>
                )}
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
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    aria-invalid={errors.password ? "true" : "false"}
                    className={`w-full rounded-lg border bg-gray-50 px-4 py-3 pr-16 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-2 dark:bg-slate-700 dark:text-white dark:focus:bg-slate-700 ${
                      errors.password
                        ? "border-red-500 focus:border-red-500 focus:ring-red-100 dark:border-red-500"
                        : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-100 dark:border-slate-600"
                    }`}
                    {...passwordField}
                    onChange={createNormalizedChangeHandler(passwordField)}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-indigo-600 dark:text-indigo-400"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Signup Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white shadow-md shadow-indigo-100 transition-all duration-200 hover:bg-indigo-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Creating account..." : "Signup"}
              </button>
            </form>

            {signupError && (
              <p
                role="alert"
                className="mt-4 text-center text-sm font-medium text-red-600 dark:text-red-400"
              >
                {signupError}
              </p>
            )}

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
                onClick={() => navigate("/", { state: { openLogin: true } })}
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
