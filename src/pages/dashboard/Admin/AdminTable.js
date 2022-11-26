import React, { useState } from "react";
import { toast } from "react-toastify";
import useHeaderGET from "../../../hooks/useHeaderGET";
import ConfirmationModal from "../../shared/ConfirmationModal";
import AdminTableBody from "./AdminTableBody";

const AdminTable = ({ users, refetch }) => {
  const header = useHeaderGET();

  const [deleteUser, setDeleteUser] = useState(null);

  const closeModal = () => {
    setDeleteUser(null);
  };

  const handleDelete = (user) => {
    console.log(user);
    fetch(`${process.env.REACT_APP_API_URl}/users/admin/${user?._id}`, {
      method: "DELETE",
      headers: header,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch();
          toast.success(
            `Delete confirm ${deleteUser?.role} ${deleteUser?.name}`
          );
        }
      });
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
              setDeleteUser={setDeleteUser}
            />
          ))}
        </tbody>
      </table>
      <ConfirmationModal
        deleteAction={handleDelete}
        closeModal={closeModal}
        modalData={deleteUser}
        title={`Are you sure you want to delete ${deleteUser?.role} ${deleteUser?.name}`}
        message={`If you delete ${deleteUser?.role} ${deleteUser?.name} it can't be undone previous position`}
        actionButton="Delete"
      />
    </>
  );
};

export default AdminTable;
