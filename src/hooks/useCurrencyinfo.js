import { useEffect, useState } from "react";

function useCurrencyinfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/e9dd172243412514ec1fc505/latest/${currency}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((res) => setData(res.conversion_rates))
      .catch((error) => console.error("Error fetching currency data:", error));
  }, [currency]);

  console.log(data);
  return data;
}

export default useCurrencyinfo;
