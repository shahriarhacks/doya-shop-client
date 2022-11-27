import React from "react";
import useTitle from "../../hooks/useTitle";
import Banner from "./components/Banner";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <Banner />
    </>
  );
};

export default Home;
