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

const BREAKPOINT = {
  mobile: 640,
  tablet: 1024,
  desktop: 1280,
};

function Freebook() {
  // Hooks must live inside the component. Calling them at module scope throws
  // "Invalid hook call" and crashes the whole home page on load.
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);

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
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    getBook();
    return () => {
      isMounted = false;
    };
  }, []);

  const count = book.length;
  // Never ask slick to show more slides than we actually have, otherwise it
  // renders empty gaps on smaller screens or when the API returns few books.
  const perView = (wanted) => Math.min(wanted, Math.max(count, 1));

  // Slick breakpoints are max-width values: base = desktop, then each entry
  // applies at or below its breakpoint. slidesToScroll stays at 1 so swiping
  // and the arrow buttons move one card at a time on every screen size.
  const settings = {
    dots: count > 1,
    arrows: count > 1,
    infinite: count > 4,
    speed: 500,
    slidesToShow: perView(4),
    slidesToScroll: 1,
    swipeToSlide: true,
    touchMove: true,
    accessibility: true,
    responsive: [
      {
        breakpoint: BREAKPOINT.desktop,
        settings: { slidesToShow: perView(3), slidesToScroll: 1 },
      },
      {
        breakpoint: BREAKPOINT.tablet,
        settings: { slidesToShow: perView(2), slidesToScroll: 1 },
      },
      {
        breakpoint: BREAKPOINT.mobile,
        // On phones the arrows sit over the card; dots are hidden there.
        settings: { slidesToShow: 1, slidesToScroll: 1, dots: false, arrows: true },
      },
    ],
  };

  return (
    <section className="mx-auto max-w-screen-2xl px-4 py-10 md:px-20">
      <div className="mb-6 max-w-3xl">
        <h2 className="text-[14px] font-bold lg:text-[18px]">
          Free Offers Cources
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          The Law of Attraction is the power key to unlock your destiny, to
          consciously attract more of what you want and less of what you don’t
          want. This book teaches you how to use the hidden energy within you to
          alter your life circumstances to create abundance of happiness and
          success.
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 4 }, (_, index) => (
            <div
              key={index}
              className="h-80 animate-pulse rounded-2xl bg-slate-200 dark:bg-slate-700 sm:h-[420px]"
            />
          ))}
        </div>
      ) : count > 0 ? (
        <div className="freebook-slider -mx-2 px-2 pb-6 sm:mx-0 sm:px-0 sm:pb-10">
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id ?? item._id} />
            ))}
          </Slider>
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 px-6 py-12 text-center text-sm text-slate-500 dark:border-slate-600 dark:text-slate-400">
          No free books are available right now. Please check back later.
        </div>
      )}
    </section>
  );
}

export default Freebook;
