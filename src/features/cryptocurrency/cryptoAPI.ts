import axios from "axios";

const baseURL = "https://api.coingecko.com/api/";

// A mock function to mimic making an async request for data
export function fetchCount(currencycode: string) {
 
  return axios.get(baseURL + 'v3/coins/markets?vs_currency=' + currencycode + '&order=market_cap_desc&per_page=100&page=1&sparkline=false').then((response) => {
    console.log(response);
    return { data: response };
    // setTimeout(() => resolve({ data: amount }), 500)
  });
}

export function fetchParticularCrypto(cryptoId :string) {
  
  return axios.get(baseURL + 'v3/coins/' + cryptoId + '?tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=true').then((response) => {
    console.log(response);
    return { data: response };
    
  });
}
