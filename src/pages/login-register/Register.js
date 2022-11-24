import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const { token } = useToken(createdUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleRegister = (data) => {
    setSignUpError("");
    createUser(data?.email, data?.password)
      .then((result) => {
        const userInfo = {
          displayName: data?.name,
        };
        updateUser(userInfo)
          .then(() => {
            savedUser(data?.name, data?.email, data?.role);
          })
          .catch((err) => setSignUpError(err.message));
      })
      .catch((err) => setSignUpError(err.message));
  };

  const savedUser = (name, email, role) => {
    const user = { name, email, role };
    fetch(`${process.env.REACT_APP_API_URl}/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          setCreatedUserEmail(email);
          reset();
          toast.success(`Created Successfully user email ${email}`);
        }
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Register</h2>
        <div>
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </div>
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters long",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, number and special characters",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Account Type</span>
            </label>
            <select
              {...register("role")}
              className="select select-ghost w-full max-w-xs"
            >
              <option value="user">User</option>
              <option value="seller">Seller</option>
            </select>
          </div>
          <input
            className="btn btn-accent w-full mt-4 hover:rounded-full"
            value="Register"
            type="submit"
          />
        </form>
        <p>
          Already have an account{" "}
          <Link className="text-secondary" to="/login">
            Login here
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full hover:rounded-full">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Register;
