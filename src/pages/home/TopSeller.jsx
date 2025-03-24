import React, { useEffect, useState } from "react";
import BookCard from "../../components/BookCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const TopSeller = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

  const categories = [
    "Choose a genre",
    "business",
    "horror",
    "marketing",
    "fiction",
    "adventure",
  ];

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const filteredBooks =
    selectedCategory === "Choose a genre"
      ? books
      : books.filter((book) => book.category === selectedCategory);

  return (
    <div className="px-0 md:px-10">
      <h1 className="font-secondary text-secondary text-xl md:text-3xl font-bold mb-4">
        Top seller
      </h1>
      <div className="mb-8">
        <select
          name="category"
          onChange={(e) => setSelectedCategory(e.target.value)}
          id="category"
          className="border border-gray-500 bg-[#EAEAEA] rounded-md font-secondary py-1 pr-5 focus:outline-none select-none"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
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
            {filteredBooks.length > 0 &&
              filteredBooks.map((book, index) => (
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

export default TopSeller;
