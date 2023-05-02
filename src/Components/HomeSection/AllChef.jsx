import React, { useEffect, useState } from "react";

const AllChef = () => {
  const [chef, setChef] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chef")
      .then((res) => res.json())
      .then((data) => setChef(data))
      .catch((error) => console.log(error.message));
  }, []);

  console.log(chef);

  return (
    <div className="mb-10">
      <div className="text-center py-8 mt-5">
        <h2 className="font-bold text-4xl mb-4 our-chefs-heading">Our Chefs</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {chef.map((chef) => (
          <div
            key={chef.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              className="w-full h-64 object-cover object-center"
              src={chef.image_url}
              alt={chef.name}
            />
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
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllChef;
