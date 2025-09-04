import React from "react";
import Banner from "./Banner";
import Works from "./Works";
import Services from "./Services";
import Counter from "./Counter";
import ContactButton from "./ContactButton";
import Brands from "./Brands";

const Home = () => {
  return (
    <div>
      <Banner />
      <Brands />
      <Services />
      <Works />
      <Counter />
      <ContactButton />
    </div>
  );
};

export default Home;
