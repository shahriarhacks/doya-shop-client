import React from "react";
import Card from "../../shared/Card";

const Advertised = ({ phones }) => {
  return (
    <>
      <div className="m-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {phones?.slice(0, 3).map((phone) => (
            <Card key={phone?._id} data={phone} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Advertised;
