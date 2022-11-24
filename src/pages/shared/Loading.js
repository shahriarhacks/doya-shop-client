import React from "react";
import { DotLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <DotLoader color="#00FFFF" size={176} />
    </div>
  );
};

export default Loading;
