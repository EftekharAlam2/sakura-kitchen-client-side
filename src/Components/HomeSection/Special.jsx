import React from "react";
import food1 from "/food1.jpg";
import food2 from "/food2.jpg";
import food3 from "/food3.jpg";

const Special = () => {
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Discover Our Specials
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 rounded-lg shadow-lg p-6">
                <img
                  className="w-full h-48 object-cover object-center mb-6 rounded-md"
                  src={food3}
                  alt="Special Dish 3"
                />
                <h3 className="text-lg font-bold mb-2">Ramen</h3>
                <p className="text-gray-600">
                  Ramen is a Japanese noodle soup, with a combination of a rich
                  flavoured broth, one of a variety of types of noodle and a
                  selection of meats or vegetables, often topped with a boiled
                  egg.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg shadow-lg p-6">
                <img
                  className="w-full h-48 object-cover object-center mb-6 rounded-md"
                  src={food1}
                  alt="Special Dish 1"
                />
                <h3 className="text-lg font-bold mb-2">Nigiri Sushi</h3>
                <p className="text-gray-600">
                  Nigiri sushi is that familiar style of sushi made up of an
                  oval-shaped mound of rice with a slice of (usually) raw fish
                  on top
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg shadow-lg p-6">
                <img
                  className="w-full h-48 object-cover object-center mb-6 rounded-md"
                  src={food2}
                  alt="Special Dish 2"
                />
                <h3 className="text-lg font-bold mb-2">Sushi Rice</h3>
                <p className="text-gray-600">
                  Sushi, a staple rice dish of Japanese cuisine, consisting of
                  cooked rice flavoured with vinegar and a variety of vegetable,
                  egg, or raw seafood garnishes and served cold
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Special;
