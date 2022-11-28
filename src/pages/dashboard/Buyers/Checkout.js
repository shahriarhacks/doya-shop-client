import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useHeadersPOST from "../../../hooks/useHeaderPOST";

const Checkout = ({ phone }) => {
  const { price, email, name, _id } = phone;
  const stripe = useStripe();
  const elements = useElements();
  const headers = useHeadersPOST();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [fetchError, setFetchError] = useState("");
  const [success, setSuccess] = useState("");
  const [transID, setTransID] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URl}/create-payment-intent`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data?.clientSecret);
      })
      .catch((err) => setFetchError(err.message));
  }, [headers, price]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    // eslint-disable-next-line no-unused-vars
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
      //   console.log("[PaymentMethod]", paymentMethod);
    }
    const { paymentIntent, error: paymentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });

    if (paymentError) {
      setCardError(paymentError.message);
      return;
    }
    setSuccess("");
    setTransID("");
    if (paymentIntent.status === "succeeded") {
      const payment = {
        payAmount: price,
        transId: paymentIntent.id,
        email,
        name,
        bookingId: _id,
      };
      fetch(`${process.env.REACT_APP_API_URl}/payments`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            setSuccess("Congrats! Your Payment Complete");
            setTransID(paymentIntent?.id);
          }
        })
        .catch((err) => setFetchError(err.message));
    }
  };

  return (
    <>
      {cardError && <p className="py-3 text-red-500">{cardError}</p>}
      <form onSubmit={handleSubmit}>
        <CardElement
          className="bg-emerald-200 rounded p-3"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn btn-sm btn-primary hover:rounded-full my-4"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {success && <p className="text-green-500 my-4">{success}</p>}
      {transID && (
        <p className="text-green-500 my-4">
          Your TransID is{" "}
          <span className="text-orange-400 font-semibold">{transID}</span>
        </p>
      )}
      {fetchError && (
        <p className="text-red-500"> Fetching error is {fetchError}</p>
      )}
    </>
  );
};

export default Checkout;
