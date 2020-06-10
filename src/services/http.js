import axios from 'axios'

let baseURL

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:5000'
} else {
  // TO BE DEFINED
}

// console.log(baseURL);

export const http = axios.create(
  {
    baseURL: baseURL
  })

http.successCallback = response => {
  return response;
}

const interceptResErrors = err => {
    console.log('err', err);
    try {
        err = Object.assign(new Error(), err.response.data.error);
      } catch (e) {
    }
    return Promise.reject(err);
};

const interceptResponse = res => {
    try {
        return res.data;
    } catch (e) {
        return res;
    }
};

http.interceptors.response.use(interceptResponse, interceptResErrors);

export default http;