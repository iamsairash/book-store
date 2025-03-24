import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ newsItem }) => {
  return (
    <div className="flex gap-2 md:gap-4 w-full sm:w-md hover:bg-gray-200 rounded-lg">
      <div className="w-36 h-52">
        <img alt="image of News" src={newsItem.image} className="w-full" />
      </div>
      <div className="w-full flex flex-col justify-center">
        <Link to="/">
          <h2 className="mt-1.5 line-clamp-1 font-bold font-secondary text-secondary hover:text-blue-400 cursor-pointer">
            {newsItem.title}
          </h2>
        </Link>
        <p className="mt-1.5 line-clamp-2 font-secondary text-gray-600 text-sm">
          {newsItem.description}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
