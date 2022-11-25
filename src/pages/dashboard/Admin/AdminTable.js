import React from "react";
import AdminTableBody from "./AdminTableBody";

const AdminTable = ({ users }) => {
  const handleDelete = (user) => {
    console.log(user);
  };

  const handleUpdate = (user) => {
    console.log(user);
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
