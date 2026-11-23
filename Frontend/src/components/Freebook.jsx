import { useEffect, useState } from "react";
import axios from "axios";
import SliderImport from "react-slick";
import Cards from "./Cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// react-slick is a CommonJS package. Depending on how the bundler resolves the
// default export it can be the module object ({ default: Slider }) instead of
// the Slider component itself, which makes React throw "Element type is invalid".
const Slider = SliderImport.default ?? SliderImport;

function Freebook() {
  // Hooks must live inside the component. Calling them at module scope throws
  // "Invalid hook call" and crashes the whole home page on load.
  const [book, setBook] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4000/books");
        if (isMounted) {
          setBook(res.data.filter((data) => data.category === "Free"));
        }
      } catch (error) {
        // Backend unavailable: keep the list empty instead of crashing.
        if (import.meta.env.DEV) {
          console.warn("Could not fetch books from the backend:", error.message);
        }
      }
    };

    getBook();
    return () => {
      isMounted = false;
    };
  }, []);

  // Slick Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // Slick Slider settings

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-10">
        <h2 className="font-bold text-[14px] md:text-[14px] lg:text-[18px] mb-6">
          Free Offers Cources
        </h2>
        <p>
          The Law of Attraction is the power key to unlock your destiny, to
          consciously attract more of what you want and less of what you don’t
          want. This book teaches you how to use the hidden energy within you to
          alter your life circumstances to create abundance of happiness and
          success.
        </p>
      </div>

      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pb-10">
        <Slider {...settings}>
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Freebook;
