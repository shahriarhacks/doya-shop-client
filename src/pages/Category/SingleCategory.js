import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../shared/Card";

const SingleCategory = () => {
  const phones = useLoaderData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16">
      {phones?.map((phone) => (
        <Card key={phone?._id} data={phone} />
      ))}
    </div>
  );
};

export default SingleCategory;
