import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useHeadersPOST from "../../../hooks/useHeaderPOST";

const AddCategory = () => {
  const imgBbKey = process.env.REACT_APP_IMGbb_KEY;
  const headers = useHeadersPOST();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleAddCategory = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgBbKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const image = imageData?.data?.url;
          const category = {
            name: data?.categoryName,
            image,
          };

          fetch(`${process.env.REACT_APP_API_URl}/categories`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(category),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.acknowledged) {
                toast.success(
                  `${data?.categoryName} added as a category success`
                );
                navigate("/dashboard/manage-category");
                reset();
              }
            });
        }
      });
  };
  return (
    <div className="h-[550px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Add Category</h2>
        <form onSubmit={handleSubmit(handleAddCategory)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Category Name</span>
            </label>
            <input
              type="text"
              {...register("categoryName", {
                required: "Name is Required",
              })}
              className="input input-secondary input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Category or Brand Photo</span>
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
          <input
            className="btn btn-primary w-full mt-4 hover:rounded-full"
            value="Add Category"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
