import React from "react";
import useTitle from "../../hooks/useTitle";
import Banner from "./components/Banner";
import Advertised from "./components/Advertised";
import { useQuery } from "@tanstack/react-query";
import Loading from "../shared/Loading";
import Catagories from "./Catagories";
import Contact from "../shared/Contact";
import Subscribed from "../shared/Subscribed";

const Home = () => {
  useTitle("Home");

  const { data: advertise, isLoading } = useQuery({
    queryKey: ["phones/ads"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URl}/phones/ads`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Banner />
      {advertise.length >= 0 && <Advertised phones={advertise} />}
      <Catagories />
      <Contact />
      <Subscribed />
    </>
  );
};

export default Home;
