import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "./AuthProviders/Providers";

const Register = () => {
  const { createUser, updateUser } = useContext(Context);
  const [erroR, setError] = useState("");
  const [success, setSuccess] = useState("");

  const registerButtonClick = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const photo = event.target.photo.value;

    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const registerUser = result.user;
        updateUser(registerUser, name, photo)
          .then(() => {})
          .catch((error) => {
            console.log(error.message);
          });
        setSuccess("Login Successfully");
        console.log(registerUser);
        event.target.reset();
      })
      .catch(() => {});
  };

  return (
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-md shadow-md">
      <form onSubmit={registerButtonClick}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="photo" className="block text-gray-700 font-bold mb-2">
            Photo URL
          </label>
          <input
            type="text"
            id="photo"
            name="photo"
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2"
          />
        </div>

        <div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Register
          </button>
        </div>
        <div>
          <p className="mt-4 text-red-700">{erroR}</p>
          <p className="mt-4 text-green-700">{success}</p>
        </div>
        <div className="mt-4 text-center">
          Already have an account?{" "}
          <p className="text-blue-500 hover:text-red-700">
            <Link to="/login">Go to the login page</Link>
          </p>{" "}
          .
        </div>
      </form>
    </div>
  );
};

export default Register;
