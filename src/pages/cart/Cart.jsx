import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getImgUrl from "../../utils/getImgUrl";
import { clearCart, removeItem } from "../../redux/features/cart/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculatedTotal = cartItems?.cartItems?.reduce((acc, item) => {
      return acc + item.newPrice;
    }, 0);
    setTotal(calculatedTotal);
  }, [cartItems.cartItems]);

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-[80%] min-h-44 border border-gray-300 rounded-md mx-auto mt-10 p-4">
      <div className="flex justify-between">
        <h2>Shopping Cart</h2>
        <button
          onClick={handleClearCart}
          className="bg-red-800 rounded-lg text-white font-secondary p-1"
        >
          Clear Cart
        </button>
      </div>
      <div className="min-h-10 my-6">
        {cartItems &&
          cartItems?.cartItems.map((item) => (
            <div key={item._id}>
              <div className="flex justify-between my-3 border border-gray-300 rounded-md shadow-lg p-2">
                <div className="flex">
                  <img
                    src={getImgUrl(item.coverImage)}
                    className="w-12 rounded-md"
                  />
                  <div className="ml-4">
                    {" "}
                    <p className="font-semibold font-primary">{item.title}</p>
                    <p>
                      <span className="font-bold text-sm">Category: </span>
                      {item.category}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <p>Rs: {item.newPrice}</p>
                  <button
                    onClick={() => handleRemoveItem(item)}
                    className="hover:bg-gray-400 rounded-md p-1 cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-between">
        <h2>Subtotal</h2>
        <h2>Rs. {total}</h2>
      </div>
      <small className="text-gray-500">
        Shipping and taxes calculated at checkout.
      </small>
      <Link to="/checkout">
        <button className="mt-4 w-full rounded-md flex items-center justify-center bg-blue-600 text-white font-secondary cursor-pointer hover:font-bold">
          checkout
        </button>
      </Link>
      <small className="flex justify-center mt-2">or Continue Shopping</small>
    </div>
  );
};

export default Cart;
