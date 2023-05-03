import React from "react";
import Banner from "./HomeSection/Banner";
import AllChef from "./HomeSection/AllChef";
import Order from "./HomeSection/Order";
import Special from "./HomeSection/Special";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AllChef></AllChef>
      <Order></Order>
      <Special></Special>
    </div>
  );
};

export default Home;
