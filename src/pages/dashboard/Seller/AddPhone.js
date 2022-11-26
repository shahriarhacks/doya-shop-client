import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import useHeaderGET from "../../../hooks/useHeaderGET";
import Loading from "../../shared/Loading";
import { format } from "date-fns";
import useHeadersPOST from "../../../hooks/useHeaderPOST";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-toastify";
import useTitle from "../../../hooks/useTitle";

const AddPhone = () => {
  useTitle("Add Product");
  const header = useHeaderGET();
  const headers = useHeadersPOST();
  const imgBbKey = process.env.REACT_APP_IMGbb_KEY;
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { data: options, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URl}/categories-add-product`,
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

  const handelAddPhone = (data) => {
    const date = new Date();
    const time = format(date, "PP");
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgBbKey}`;

    const seller = {
      name: user?.displayName,
      email: user?.email,
    };

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          console.log(data);
          const image = imageData?.data?.url;
          const phone = { ...data, image, time, seller };
          fetch(`${process.env.REACT_APP_API_URl}/phones`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(phone),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.acknowledged) {
                toast.success(`${data?.phoneName} added success as a Product`);
                navigate("/dashboard/manage-phones");
              }
            });
          reset();
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="m-10">
      <form onSubmit={handleSubmit(handelAddPhone)}>
        <div>
          <label className="label">
            <span className="label-text">Phone Name</span>
          </label>
          <input
            {...register("phoneName", {
              required: "Name is Required",
            })}
            type="text"
            className="input input-ghost w-full my-4  input-bordered"
            required
          />
          {errors.phoneName && (
            <p className="text-red-500">{errors.phoneName.message}</p>
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label className="label">
              <span className="label-text">Resale Price</span>
            </label>
            <input
              {...register("resalePrice", {
                required: "Resale Price is Required",
              })}
              type="text"
              className="input input-ghost w-full  input-bordered"
            />
            {errors.resalePrice && (
              <p className="text-red-500">{errors.resalePrice.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Original Price</span>
            </label>
            <input
              {...register("originalPrice", {
                required: "Original Price is Required",
              })}
              type="text"
              className="input input-ghost w-full  input-bordered"
            />
            {errors.originalPrice && (
              <p className="text-red-500">{errors.originalPrice.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Purchase of Year</span>
            </label>
            <input
              {...register("purchaseYear", {
                required: "Purchase year is Required",
              })}
              type="text"
              className="input input-ghost w-full  input-bordered"
            />
            {errors.purchaseYear && (
              <p className="text-red-500">{errors.purchaseYear.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Used of Time</span>
            </label>
            <input
              {...register("usedTime", {
                required: "Used time  is Required",
              })}
              type="text"
              className="input input-ghost w-full  input-bordered"
            />
            {errors.usedTime && (
              <p className="text-red-500">{errors.usedTime.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Seller Location</span>
            </label>
            <input
              {...register("sellerLocation", {
                required: "Seller location is Required",
              })}
              type="text"
              className="input input-ghost w-full  input-bordered"
              required
            />
            {errors.sellerLocation && (
              <p className="text-red-500">{errors.sellerLocation.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Seller Phone Number</span>
            </label>
            <input
              {...register("sellerPhone", {
                required: "Seller Phone Number is Required",
              })}
              type="text"
              className="input input-ghost w-full  input-bordered"
            />
            {errors.sellerPhone && (
              <p className="text-red-500">{errors.sellerPhone.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Condition Type</span>
            </label>
            <select
              {...register("condition")}
              className="select select-ghost w-full max-w-xs"
            >
              <option value="good">Good</option>
              <option value="excellent">Excellent</option>
              <option value="fair">Fair</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              {...register("categoryId", {
                required: true,
              })}
              className="select select-ghost w-full max-w-xs"
            >
              {options?.map((option, idx) => (
                <option key={option?._id} value={idx}>
                  {option?.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Phone Photo</span>
          </label>
          <input
            type="file"
            {...register("image", {
              required: "Photo is Required",
            })}
            className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
          />
          {errors.image && (
            <p className="text-red-500">{errors.image.message}</p>
          )}
        </div>
        <div>
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            {...register("description", {
              required: "Description is Required",
            })}
            className="textarea textarea-bordered h-44 my-4 w-full"
          ></textarea>
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>

        <input
          className="btn btn-primary btn-outline w-full hover:rounded-full"
          type="submit"
          value="Add Phone"
        />
      </form>
    </section>
  );
};

export default AddPhone;
