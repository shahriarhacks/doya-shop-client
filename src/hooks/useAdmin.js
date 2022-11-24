import { useEffect, useState } from "react";
import useHeaderGET from "./useHeaderGET";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  const header = useHeaderGET();
  useEffect(() => {
    if (email) {
      fetch(`${process.env.REACT_APP_API_URl}/users/admin/${email}`, {
        headers: header,
      })
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.isAdmin);
          setIsAdminLoading(false);
        });
    }
  }, [email, header]);
  return { isAdmin, isAdminLoading };
};

export default useAdmin;
