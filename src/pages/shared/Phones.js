import React from "react";
import Card from "./Card";

const Phones = ({ phones }) => {
  return (
    <>
      <div className="m-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {phones?.map((phone) => (
            <Card key={phone?._id} data={phone} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Phones;
