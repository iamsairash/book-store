import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import BookCard from "../../components/BookCard";

const Recommended = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="px-0 md:px-10">
      <h1 className="font-secondary text-secondary text-xl md:text-3xl font-bold mb-4">
        Recommended For You
      </h1>
      <div className="mb-8">
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            964: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1490: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation]}
          navigation={true}
          className="mySwiper"
        >
          <div>
            {books &&
              books.slice(4, 14).map((book, index) => (
                <SwiperSlide key={index}>
                  {" "}
                  <BookCard book={book} />
                </SwiperSlide>
              ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Recommended;
