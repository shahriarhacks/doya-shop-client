import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Doya Shop `;
  }, [title]);
};

export default useTitle;
