import React from "react";
import { useRouteError } from "react-router-dom";
import img404 from "../../assets/404-pages.jpg";
import Navbar from "./Navbar";

const ErrorRoute = () => {
  const error = useRouteError();
  return (
    <section
      style={{
        background: `url(${img404})`,
      }}
    >
      <Navbar />
      <div className="text-center text-error">
        {error?.statusText} {error?.status}
      </div>
      <div>
        <img src={img404} alt="" />
      </div>
    </section>
  );
};

export default ErrorRoute;
