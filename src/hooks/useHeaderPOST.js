const useHeadersPOST = () => {
  return {
    "content-type": "application/json",
    authorization: `SAST ${localStorage.getItem("access-token")}`,
  };
};

export default useHeadersPOST;
