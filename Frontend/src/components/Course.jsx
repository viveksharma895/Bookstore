import React from "react";
import List from "../../public/list.json"
import Cards from "./Cards";

function Course() {
  return (
    <>
      <main className="max-w-screen-2xl container mx-auto items-center justify-center px-4 pt-28 pb-20">
        <div className="text-center">
          <h1 className="text-3xl md:text-3xl font-bold rainbow-text mb-3">
            We're delighted to have you here!
          </h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.

          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-8">
          {List.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Course;
