import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const AllChef = () => {
  const [chef, setChef] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://b7a10-chef-recipe-hunter-server-side-eftekhar-ala-eftekharalam2.vercel.app/chef"
    )
      .then((res) => res.json())
      .then((data) => {
        setChef(data);
        setLoading(false);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="mb-10">
      <div className="text-center py-8 mt-5">
        <h2 className="font-bold text-4xl mb-4 our-chefs-heading">Our Chefs</h2>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="spinner ease-linear rounded-full border-8 border-t-8 border-red-500 h-32 w-32"></div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {chef.map((chef) => (
            <div
              key={chef.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <LazyLoad height={262}>
                <img
                  className="w-full h-64 object-cover object-center"
                  src={chef.image_url}
                  alt={chef.name}
                />
              </LazyLoad>

              <div className="p-4">
                <h2 className="font-bold text-2xl mb-2">{chef.name}</h2>
                <p className="text-gray-600 mb-4">
                  {chef.experience} years of experience
                </p>
                <div className="flex justify-between mb-4">
                  <div>
                    <p className="text-gray-600">Recipes</p>
                    <p className="font-bold">{chef.recipes_number}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Likes</p>
                    <p className="font-bold">{chef.likes}</p>
                  </div>
                </div>
                <Link to={`/chefdetails/${chef.id}`}>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full">
                    View Profile
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllChef;
