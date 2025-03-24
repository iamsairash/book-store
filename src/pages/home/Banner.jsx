import React from "react";
import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse justify-between mt-10 px-10 py-10 mb-6">
      <div className="md:w-1/2 w-full flex items-center md:justify-end">
        <img src={bannerImg} className="" />
      </div>
      <div className="md:w-1/2 w-full mt-10">
        <h1 className="md:text-5xl text-2xl mb-8 text-secondary font-medium">
          New Releases This Week
        </h1>
        <p className="mb-10">
          It's time to update your reading list with some of the latest and
          greatest releases in the literary world. From heart-pumping thrillers
          to captivating memoirs, this week's new releases offer something for
          everyone
        </p>
        <button className="btn-primary">Subscribe</button>
      </div>
    </div>
  );
};

export default Banner;
