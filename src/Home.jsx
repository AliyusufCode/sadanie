import React from "react";
import Cart from "./Cart";

const Home = () => {
  return (
    <div className="home">
      <div className="contentCart">
        <Cart />
        <Cart />
      </div>
    </div>
  );
};

export default Home;
