import React from "react";
import { HiBadgeCheck } from "react-icons/hi";

const AdminTableBody = ({ user, index, handleUpdate, setDeleteUser }) => {
  // eslint-disable-next-line no-unused-vars

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{user?.name}</td>
        <td>{user?.email}</td>
        <td>
          {user?.role === "seller" && !user?.status ? (
            <button
              onClick={() => handleUpdate(user?._id)}
              className="btn btn-xs bg-amber-400 border-0 text-black hover:rounded-full hover:text-white"
            >
              Verify
            </button>
          ) : (
            user?.role === "seller" && (
              <div className="text-blue-600 font-bold flex items-center">
                <p>Verified</p>
                <HiBadgeCheck />
              </div>
            )
          )}
        </td>
        <td>
          <label
            onClick={() => setDeleteUser(user)}
            htmlFor="confirmation-modal"
            className="btn btn-xs btn-error"
          >
            Delete
          </label>
        </td>
        <td>{user?.role}</td>
      </tr>
    </>
  );
};

export default AdminTableBody;
