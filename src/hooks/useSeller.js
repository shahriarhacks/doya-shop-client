import { useEffect, useState } from "react";
import useHeaderGET from "./useHeaderGET";

const useSeller = (email) => {
  const [isSeller, setIsSeller] = useState(false);
  const [isSellerLoading, setIsSellerLoading] = useState(true);
  const header = useHeaderGET();
  useEffect(() => {
    if (email) {
      fetch(`${process.env.REACT_APP_API_URl}/users/seller/${email}`, {
        headers: header,
      })
        .then((res) => res.json())
        .then((data) => {
          setIsSeller(data.isSeller);
          setIsSellerLoading(false);
        });
    }
  }, [email, header]);
  return { isSeller, isSellerLoading };
};

export default useSeller;
