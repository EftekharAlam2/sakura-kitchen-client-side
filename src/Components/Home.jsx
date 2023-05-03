import React from "react";

import Banner from "./HomeSection/Banner";
import AllChef from "./HomeSection/AllChef";
import Discover from "./HomeSection/Discover";
import Order from "./HomeSection/Order";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AllChef></AllChef>
      <Discover></Discover>
      <Order></Order>
    </div>
  );
};

export default Home;
