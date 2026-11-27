import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  normalizeSpaces,
  spaceRules,
  createNormalizedChangeHandler,
} from "../utils/validation";
import axios from "axios";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const dialogRef = useRef(null);
  const openedRef = useRef(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Open the popup only for the redirect from the signup page, then clear the
  // flag so refreshing the home page does not show the popup again
  useEffect(() => {
    if (
      location.state?.openLogin &&
      !openedRef.current &&
      dialogRef.current &&
      !dialogRef.current.open
    ) {
      dialogRef.current.showModal();
      openedRef.current = true;

      navigate(location.pathname + location.search + location.hash, {
        replace: true,
        state: null,
      });
    }
  }, [location, navigate]);

  // use react hook form for form handling
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "", remember: false },
  });

  const onSubmit = (data) => console.log(data);

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
      <div>
        <dialog ref={dialogRef} id="my_modal_3" className="modal">
          <div className="modal-box relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl sm:p-8">
            {/* Close Button */}
            <form method="dialog">
              <button
                type="submit"
                className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3"
                aria-label="Close login dialog"
              >
                ✕
              </button>
            </form>

            {/* Login Header */}
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800">
                Welcome Back!
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Login to continue your journey
              </p>
            </div>

            {/* Login Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="space-y-5"
            >
              {/* Email */}
              <div>
                <label
                  htmlFor="login-email"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Email Address
                </label>
                <input
                  id="login-email"
                  type="email"
                  placeholder="Enter your email address"
                  aria-invalid={errors.email ? "true" : "false"}
                  className={`w-full rounded-lg border bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-2 ${
                    errors.email
                      ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                      : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-100"
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
                  htmlFor="login-password"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    aria-invalid={errors.password ? "true" : "false"}
                    className={`w-full rounded-lg border bg-gray-50 px-4 py-3 pr-16 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-2 ${
                      errors.password
                        ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                        : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-100"
                    }`}
                    {...passwordField}
                    onChange={createNormalizedChangeHandler(passwordField)}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-indigo-600"
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

              {/* Remember & Forgot Password */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 accent-indigo-600"
                    {...register("remember")}
                  />
                  Remember me
                </label>

                <a
                  href="#forgot-password"
                  className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white shadow-md shadow-indigo-100 transition-all duration-200 hover:bg-indigo-700 active:scale-[0.98]"
              >
                Login
              </button>
            </form>

            {/* Register Link */}
            <div className="mt-6 border-t border-gray-100 pt-5 text-center text-sm text-gray-500">
              Not registered?
              <Link
                to="/signup"
                className="ml-1 inline-block rounded-md bg-indigo-50 px-3 py-1 font-semibold text-indigo-600 transition hover:bg-indigo-100 hover:underline"
              >
                Signup
              </Link>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
