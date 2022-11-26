import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/AuthProvider";
import useHeaderGET from "../../../hooks/useHeaderGET";
import useTitle from "../../../hooks/useTitle";
import Loading from "../../shared/Loading";

const ManagePhone = () => {
  useTitle("Manage Product");
  const header = useHeaderGET();
  const { user } = useContext(AuthContext);

  const {
    data: phones,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URl}/phones/for-seller?email=${user?.email}`,
          {
            headers: header,
          }
        );
        const data = await res.json();
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  });

  const handleAdvertised = (id) => {
    fetch(`${process.env.REACT_APP_API_URl}/phones/for-seller/${id}`, {
      method: "PUT",
      headers: header,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          refetch();
          toast.success("Advertised Added successfully");
        }
      });
  };

  const handleSold = (id) => {
    fetch(`${process.env.REACT_APP_API_URl}/phones/for-sold/${id}`, {
      method: "PATCH",
      headers: header,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          refetch();
          toast.success("Product Sold Successfully");
        }
      });
  };

  const handleUnSold = (id) => {
    fetch(`${process.env.REACT_APP_API_URl}/phones/for-unsold/${id}`, {
      method: "PATCH",
      headers: header,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          refetch();
          toast.success("Product Unsold Successfully");
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>SL</th>
            <th>Photo</th>
            <th>Product Name</th>
            <th>Status</th>
            <th>Become Ad</th>
            <th>Update Status</th>
          </tr>
        </thead>
        <tbody>
          {phones.map((phone, i) => (
            <tr key={phone?._id}>
              <td>{i + 1}</td>
              <td>
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src={phone?.image} alt="" />
                  </div>
                </div>
              </td>
              <td>{phone?.phoneName}</td>
              <td>{phone?.stokeStatus}</td>
              <td>
                {!phone?.isAd && (
                  <button
                    onClick={() => handleAdvertised(phone?._id)}
                    className="btn btn-primary btn-xs hover:rounded-full  text-black hover:text-white"
                  >
                    Advertised
                  </button>
                )}
                {phone?.isAd && (
                  <p className="text-green-500 font-semibold">
                    Already Advertised
                  </p>
                )}
              </td>
              <td>
                {phone?.stokeStatus === "unsold" && (
                  <button
                    onClick={() => handleSold(phone?._id)}
                    className="btn btn-xs bg-amber-400 border-0 hover:rounded-full text-black hover:text-white"
                  >
                    Sold It
                  </button>
                )}
                {phone?.stokeStatus === "sold" && (
                  <button
                    onClick={() => handleUnSold(phone?._id)}
                    className="btn btn-xs bg-amber-400 border-0 hover:rounded-full text-black hover:text-white"
                  >
                    Unsold It
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagePhone;
