import React from "react";
import { BsCart3 } from "react-icons/bs";
import getImgUrl from "../../utils/getImgUrl";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/features/cart/cartSlice";

const BookCard = ({ book }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (book) => {
    dispatch(addItem(book));
  };

  return (
    <div className="flex gap-2 md:justify-between rounded-lg hover:bg-gray-200 md:flex-row md:gap-4 p-2 m-2 w-md h-[280px]">
      <div className=" w-36 h-52 md:w-46 md:h-64">
        <img src={getImgUrl(book.coverImage)} className="w-full " />
      </div>
      <div className="relative mt-8 md:mt-18 w-44 md:w-56 h-46  font-secondary">
        <h1 className="font-primary text-secondary line-clamp-1 text-md mb-1.5">
          {book.title}
        </h1>
        <p className=" text-[#0D0842] text-sm line-clamp-2 mb-1.5">
          {book.description}
        </p>
        <span className="flex gap-2.5 ">
          <p className="mb-5">Rs. {book.newPrice}</p>
          Rs.<del className="text-[#43434a]">{book.oldPrice}</del>
        </span>

        <button
          onClick={() => handleAddToCart(book)}
          className="flex items-center gap-2 px-1 md:px-4 py-2 bg-primary text-white font-bold rounded-md transition-all hover:bg-secondary hover:scale-105"
        >
          <BsCart3 size={22} className="text-white" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default BookCard;
