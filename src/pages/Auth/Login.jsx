import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Login = () => {
  const [message, setMessage] = useState(null);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  const handleGoogleSignIn = () => {};

  return (
    <div className="h-[60vh] flex justify-center items-center">
      <div className="flex flex-col w-full max-w-sm rounded-md shadow-2xl p-4">
        <h2 className="font-secondary font-bold text-2xl text-secondary mb-4">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-1">
            <label className="block text-gray-500 text-sm">Email</label>

            <input
              type="text"
              placeholder="Email Address"
              {...register("email", { required: true })}
              className="block border border-gray-200 focus:outline-0 p-1 rounded-sm"
            />
            <label className="block text-gray-500 text-sm">Password</label>

            <input
              type="password"
              placeholder="password"
              {...register("password", { required: true })}
              className=" border border-gray-200 focus:outline-0 p-1 rounded-sm"
            />
          </div>
          {message && <p className="text-red-500 text-xs italic">{message}</p>}
          <button
            type="submit"
            className="bg-blue-600 w-20 text-white font-secondary p-2 rounded-md mt-4 mb-4 cursor-pointer "
          >
            Login
          </button>
        </form>

        <small>
          Haven't an account? Please{" "}
          <Link to="/register">
            <span className="text-blue-500 hover:underline cursor-pointer">
              Register
            </span>
          </Link>
        </small>
        <button
          onClick={handleGoogleSignIn}
          className="w-full max-w-sm flex justify-center items-center gap-2 bg-secondary text-white font-secondary p-3 rounded-md cursor-pointer mt-2"
        >
          <FaGoogle /> Continue with Google
        </button>
        <small className="mt-2">
          ©{new Date().getFullYear()} Book Store. All rights reserved
        </small>
      </div>
    </div>
  );
};

export default Login;
