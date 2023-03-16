import { useEffect, useState } from "react";

export const useScroll = () => {
  const [size, setSize] = useState(12);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPageNumber((prev) => prev + 1);
    }
  };

  return { size, pageNumber };
};
