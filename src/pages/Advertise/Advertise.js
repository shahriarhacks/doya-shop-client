import { useQuery } from "@tanstack/react-query";
import React from "react";
import useTitle from "../../hooks/useTitle";
import Loading from "../shared/Loading";
import Phones from "../shared/Phones";

const Advertise = () => {
  useTitle("Advertisement");
  const { data: advertise = [], isLoading } = useQuery({
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
    <div>
      <Phones phones={advertise} />
    </div>
  );
};

export default Advertise;
