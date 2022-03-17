import { useState } from "react";

export default () => {
  const [results, setResults] = useState({
    data: null,
    loading: false,
    erorr: null,
  });

  const searhAPI = async (term) => {
    setResults({
      data: null,
      loading: true,
      erorr: null,
    });
    try {
      const response = await openApi.get("/", {
        params: {
          REPRSNT_FOOD_NM: term,
        },
      });
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
  return [results, setResults];
};
