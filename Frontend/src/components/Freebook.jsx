import List from "../../public/list.json";
import SliderImport from "react-slick";
import Cards from "./Cards";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// react-slick is a CommonJS package. Depending on how the bundler resolves the
// default export it can be the module object ({ default: Slider }) instead of
// the Slider component itself, which makes React throw "Element type is invalid".
const Slider = SliderImport.default ?? SliderImport;

const freeBooks = List.filter((data) => data.category === "Free");

function Freebook() {
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
          {freeBooks.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Freebook;
