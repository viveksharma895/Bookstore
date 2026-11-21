import React from "react";
import heroBooks from "../assets/hero-books.svg";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mt-10 md:mt-32 order-2 md:order-1 flex flex-col justify-center dark:text-white">
          <div className="space-y-3">
            <h1 className="font-bold text-[16px] md:text-[22px] lg:text-[28px] mb-6">
              Hello... Welcome here to learn something..
              <span className="text-blue-600 block">New Everyday!!</span>
            </h1>
            <p className="text-gray-600 text-[16px] md:text-[18px] lg:text-[16px] dark:text-white">
              Hello, and welcome! Every day is a new opportunity to learn
              something different, explore new ideas, and discover your hidden
              potential. Our goal is to make learning simple, interesting, and
              enjoyable through fresh knowledge, useful insights, and exciting
              discoveries. Whether it's technology, science, creativity,
              personal growth, or everyday life, there's always something new
              waiting to be explored. Stay curious, keep asking questions, and
              never stop learning. Remember, even a small lesson learned today
              can make a big difference in your tomorrow!
            </p>
            <div className="flex items-center space-x-3 mt-6">
              <label className="input validator">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 0-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input
                  type="email"
                  placeholder="Please Enter Your Email for Subscribe"
                  required
                />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
              <button className="btn btn-primary font-medium">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center order-1 md:order-2">
          <img
            src="/banner.png"
            alt="Open book with pages flying out, surrounded by books"
            className="mx-auto select-none w-[60%] md:w-[90%] lg:w-[60%] pt-20 md:pt-22"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
