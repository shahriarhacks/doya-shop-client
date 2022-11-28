import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Checkout from "./Checkout";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const phone = useLoaderData();

  const { phoneName, price } = phone;
  return (
    <div>
      <h3 className="text-4xl">
        Payment for <strong>{}</strong>
      </h3>
      <p className="text-lg my-4">
        You need to pay for <strong>{phoneName}</strong> amount of{" "}
        <strong>${price}</strong>
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <Checkout phone={phone} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
