import React from "react";

const Order = () => {
  return (
    <div>
      <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Order?</h2>
            <p className="text-lg mb-8">
              Explore our menu and place your order for delicious Japanese
              cuisine. Experience the flavors of Japan in the comfort of your
              own home.
            </p>
            <a
              href="#"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
            >
              Order Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
