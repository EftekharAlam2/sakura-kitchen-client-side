import { Input } from "postcss";
import React from "react";

const Login = () => {
  return (
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-md shadow-md">
      <form>
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
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2"
          />
        </div>

        <div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
