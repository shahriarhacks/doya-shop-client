import React from "react";

const AdminTableBody = ({ user, index, handleDelete, handleUpdate }) => {
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{user?.name}</td>
        <td>{user?.email}</td>
        <td>
          {user?.role === "seller" && (
            <button
              onClick={() => handleUpdate(user)}
              className="btn btn-xs bg-amber-400 border-0 text-black hover:rounded-full hover:text-white"
            >
              Verify
            </button>
          )}
        </td>
        <td>
          <button
            onClick={() => handleDelete(user)}
            className="btn btn-xs bg-red-400 border-0 text-black hover:rounded-full hover:text-white"
          >
            Delete
          </button>
        </td>
        <td>{user?.role}</td>
      </tr>
    </>
  );
};

export default AdminTableBody;
