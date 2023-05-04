import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChefDetails = () => {
  const chef = useLoaderData();

  const notify = () => toast("This recipe is my favourite");

  const [disabledvalue, setDisabledvalue] = useState(null);

  const buttonClickFunctions = [
    () => {
      setDisabledvalue(0);
    },
    () => {
      setDisabledvalue(1);
    },
    () => {
      setDisabledvalue(2);
    },
  ];

  const isButtonDisabled = (value) => disabledvalue === value;

  const handleClick = (value) => {
    if (!isButtonDisabled(value)) {
      buttonClickFunctions[value]();
    }
  };

  return (
    <div>
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-8">
              <img
                className="w-32 h-32 rounded-full object-cover mr-4"
                src={chef.image_url}
                alt={chef.name}
              />
              <div>
                <h2 className="font-bold text-2xl mb-2">{chef.name}</h2>
                <p className="text-gray-600 mb-2">{chef.short_bio}</p>
                <div className="flex items-center">
                  <p className="text-gray-600 mr-4">Likes {chef.likes}</p>
                  <p className="text-gray-600 mr-4">
                    {chef.recipes_number} Recipes
                  </p>
                  <p className="text-gray-600">
                    {chef.experience} Years of Experience
                  </p>
                </div>
              </div>
            </div>
            {chef.recipes.map((chef, value) => (
              <div key={chef.recipe_name}>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-bold mb-4">{chef.recipe_name}</h3>
                  <ul className="list-disc ml-4 mb-4">
                    {chef.ingredients.map((ingredient) => (
                      <li key={ingredient}>{ingredient}</li>
                    ))}
                  </ul>
                  <p className="mb-4">{chef.cooking_method}</p>
                  <div className="flex items-center mb-4">
                    <span className="inline-block rounded-full bg-yellow-400 text-white text-xs font-bold mr-1 py-1 px-2">
                      {chef.rating}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      notify();
                      handleClick(value);
                    }}
                    disabled={isButtonDisabled(value)}
                    className="bg-blue-500 text-white rounded-full py-2 px-4 hover:bg-blue-700"
                  >
                    {isButtonDisabled(value)
                      ? "Favourite Added"
                      : "Add to Favourite"}
                  </button>
                  <ToastContainer />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChefDetails;
