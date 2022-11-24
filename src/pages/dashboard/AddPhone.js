import React from "react";
import { useForm } from "react-hook-form";

const AddPhone = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <section className="m-10">
      <form>
        <div>
          <label className="label">
            <span className="label-text">Phone Name</span>
          </label>
          <input
            type="text"
            className="input input-ghost w-full my-4  input-bordered"
            required
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              className="input input-ghost w-full  input-bordered"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              className="input input-ghost w-full  input-bordered"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              className="input input-ghost w-full  input-bordered"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              className="input input-ghost w-full  input-bordered"
              required
            />
          </div>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <textarea
            name="about"
            className="textarea textarea-bordered h-24 my-4 w-full"
            required
          ></textarea>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <textarea
            name="details"
            className="textarea textarea-bordered h-44 my-4 w-full"
            required
          ></textarea>
        </div>

        <input
          className="btn btn-primary btn-outline hover:rounded-full"
          type="submit"
          value="Add Package"
        />
      </form>
    </section>
  );
};

export default AddPhone;
