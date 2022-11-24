const useHeaderGET = () => {
  return {
    authorization: `SAST+SYJT ${localStorage.getItem("access-token")}`,
  };
};

export default useHeaderGET;
