import React from "react";
import food1 from "/food1.jpg";
import food2 from "/food2.jpg";
import food3 from "/food3.jpg";

const Home = () => {
  return (
    <div>
      {/* banner section */}
      <div className="carousel rounded-box mt-6 md:mt-10 flex justify-center md:gap-5">
        <div className="carousel-item w-1/3 h-1/3 md:w-1/5 md:h-1/5">
          <img src={food1} alt="Burger" />
        </div>
        <div className="carousel-item w-1/3 h-1/3 md:w-1/5 md:h-1/5">
          <img src={food2} alt="Burger" />
        </div>
        <div className="carousel-item w-1/3 h-1/3 md:w-1/5 md:h-1/5">
          <img src={food3} alt="Burger" />
        </div>
      </div>

      {/* chef section */}
    </div>
  );
};

export default Home;
