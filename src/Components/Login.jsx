import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "./AuthProviders/Providers";

const Login = () => {
  const { signIn, googleSignIn, githubSignIn } = useContext(Context);

  const [erroR, setError] = useState("");
  const [success, setSuccess] = useState("");

  const loginButtonClick = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    const email = event.target.email.value;
    const password = event.target.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setSuccess("Login Successfully");
        console.log(loggedUser);
        event.target.reset();
      })
      .catch(() => {
        setError("Enter the correct Email and password!!!");
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-md shadow-md">
      <form onSubmit={loginButtonClick}>
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
            required
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2"
          />
        </div>

        <div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Log In
          </button>
        </div>
        <div>
          <p className="mt-4 text-red-700">{erroR}</p>
          <p className="mt-4 text-green-700">{success}</p>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md mr-2"
          >
            Google
          </button>
          <button
            onClick={handleGithubSignIn}
            className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-md ml-2"
          >
            GitHub
          </button>
        </div>

        <div className="mt-4 text-center">
          Don't have an account?{" "}
          <p className="text-blue-500 hover:text-red-700">
            <Link to="/register">Go to the register page</Link>
          </p>{" "}
          .
        </div>
      </form>
    </div>
  );
};

export default Login;
