import React from "react";
import { useForm } from "react-hook-form";

const AddPhone = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handelAddPhone = (data) => {
    console.log(data);
  };
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
                required: "Resale Price is Required",
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
                required: "Resale Price is Required",
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
                required: "Resale Price is Required",
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
                required: "Resale Price is Required",
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
                required: "Resale Price is Required",
              })}
              type="text"
              className="input input-ghost w-full  input-bordered"
            />
            {errors.sellerPhone && (
              <p className="text-red-500">{errors.sellerPhone.message}</p>
            )}
          </div>
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
            <span className="label-text">Description</span>
          </label>
          <textarea
            {...register("description", {
              required: "Resale Price is Required",
            })}
            className="textarea textarea-bordered h-44 my-4 w-full"
          ></textarea>
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>

        <input
          className="btn btn-primary btn-outline hover:rounded-full"
          type="submit"
          value="Add Phone"
        />
      </form>
    </section>
  );
};

export default AddPhone;
