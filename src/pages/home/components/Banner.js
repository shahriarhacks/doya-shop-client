import React from "react";
import Lottie from "lottie-react";
import e_com from "../../../assets/Lottie/e-commerce.json";
import { Link } from "react-router-dom";
import GradientButton from "../../../components/GradientButton";

const Banner = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse">
      <div className="w-full md:w-1/2">
        <Lottie animationData={e_com} loop={true} />
      </div>
      <div className="flex-1">
        <div className="hero md:mt-48">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold ">Doya Shop</h1>
              <h1 className="text-2xl font-bold">Buy Sell Bazar</h1>
              <p className="py-6">
                Buy and sell everything from second mobile phones, or even find
                a new home. Find a great deal in Dhaka or search all of
                Bangladesh!
              </p>
              <Link to="/categories">
                <GradientButton>Get Started</GradientButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
