import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const [message, setMessage] = useState(null);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  const handleGoogleSignIn = () => {};

  return (
    <div className="h-[60vh] flex justify-center items-center">
      <div className="flex flex-col w-full max-w-sm rounded-md shadow-2xl p-4">
        <h2 className="font-secondary font-bold text-2xl text-secondary mb-4">
          Register
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-1">
            <label className="block text-gray-500 text-sm">Email</label>

            <input
              type="text"
              {...register("email", { required: true })}
              placeholder="Email Address"
              className="block border border-gray-200 focus:outline-0 p-1 rounded-sm"
            />
            <label className="block text-gray-500 text-sm">Password</label>

            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="password"
              className=" border border-gray-200 focus:outline-0 p-1 rounded-sm"
            />
          </div>
          {message && <p className="text-red-500 text-xs italic">{message}</p>}
          <button
            type="submit"
            className="bg-blue-600 w-20 text-white  font-secondary p-2 rounded-md mt-4 mb-4 cursor-pointer "
          >
            Register
          </button>
        </form>

        <small>
          Already haven an account? Please{" "}
          <Link to="/login">
            <span className="text-blue-500 hover:underline cursor-pointer">
              login
            </span>
          </Link>
        </small>
        <button
          onClick={handleGoogleSignIn}
          className="w-full max-w-sm bg-secondary flex justify-center items-center gap-2 text-white font-secondary p-3 rounded-md cursor-pointer mt-2"
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

export default Register;
