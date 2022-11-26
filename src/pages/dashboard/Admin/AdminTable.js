import React from "react";
import { toast } from "react-toastify";
import useHeaderGET from "../../../hooks/useHeaderGET";
import AdminTableBody from "./AdminTableBody";

const AdminTable = ({ users, refetch }) => {
  const header = useHeaderGET();

  const handleDelete = (user) => {
    console.log(user);
  };

  const handleUpdate = (id) => {
    fetch(`${process.env.REACT_APP_API_URl}/users/admin/${id}`, {
      method: "PUT",
      headers: header,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          refetch();
          toast.success("Seller Verified successfully");
        }
      });
  };

  return (
    <>
      <table className="table w-full">
        <thead>
          <tr>
            <th>SL</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, idx) => (
            <AdminTableBody
              key={user?._id}
              user={user}
              index={idx}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AdminTable;
