import { useEffect, useState } from "react";
import useCounter from "../hooks/useCounter";

const useFetch = (url) => {
  const [state, setstate] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setstate({ ...state, isLoading: true });
    const resp = await fetch(url);
    const data = await resp.json();
    setstate({ data, isLoading: false, hasError: null });
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return { ...state, state };
};

export default useFetch;
