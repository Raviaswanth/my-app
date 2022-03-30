import axios from "axios";

const baseURL = "https://api.coingecko.com/api/";

// A mock function to mimic making an async request for data
export function fetchCount() {
  // https://api.coingecko.com/api/v3/coins/list
  // return new Promise<{ data: number }>((resolve) =>
  //   setTimeout(() => resolve({ data: amount }), 500)
  // );
  return axios.get(baseURL + 'v3/coins/markets').then((response) => {
    console.log(response);
    return { data: response };
    // setTimeout(() => resolve({ data: amount }), 500)
  });
}
