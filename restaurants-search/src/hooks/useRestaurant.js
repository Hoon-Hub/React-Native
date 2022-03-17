import { useState } from "react";

export default () => {
  const [results, setResults] = useState({
    data: null,
    loading: false,
    erorr: null,
  });

  const searhAPI = async (id) => {
    setResults({
      data: null,
      loading: true,
      erorr: null,
    });
    try {
      const response = await openApi.get(`/${id}`);
      setResults({
        data: response.data,
        loading: false,
        erorr: null,
      });
    } catch (error) {
      setResults({
        data: null,
        loading: false,
        erorr: "something went wrong..",
      });
    }
  };
  return [results, searhAPI];
};
