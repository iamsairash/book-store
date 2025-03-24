import React from "react";
import { news } from "../../utils/constants";
import NewsCard from "../../components/NewsCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper/modules";

const News = () => {
  return (
    <div className="px-0 md:px-10">
      <h2 className="text-secondary font-bold font-primary text-2xl">News</h2>
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
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        navigation={true}
        className="mySwiper mt-4 md:mt-8"
      >
        <div className="flex gap-6">
          {news.map((newsItem) => (
            <SwiperSlide key={newsItem.id}>
              <NewsCard newsItem={newsItem} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default News;
