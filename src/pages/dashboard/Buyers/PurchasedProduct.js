import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import useTitle from "../../../hooks/useTitle";
import Loading from "../../shared/Loading";

const PurchasedProduct = () => {
  useTitle("Purchased History");
  const { user } = useContext(AuthContext);
  const { data: histories, isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URl}/bookings?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>SL</th>
            <th>Date</th>
            <th>Name</th>
            <th>Price</th>
            <th>Meet Location</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {histories.map((history, i) => (
            <tr key={history?._id}>
              <th>{i + 1}</th>
              <td>{history?.bookingDate}</td>
              <td>{history?.phoneName}</td>
              <td>{history?.price}</td>
              <td>{history?.location}</td>
              <td>
                {history?.payment === "paid" && (
                  <p className="text-green-600 font-semibold">Paid</p>
                )}
                {history?.payment !== "paid" && (
                  <Link to={`payment/${history?._id}`}>
                    <button className="btn btn-secondary btn-xs hover:rounded-full btn-outline">
                      Pay Now
                    </button>
                  </Link>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PurchasedProduct;
