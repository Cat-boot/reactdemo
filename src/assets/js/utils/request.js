/*eslint-disable*/
// import ReactDom from "react-dom";
import axios from "axios";
// let oLoading = ReactDom.findDOMNode(document.getElementById("loading"));
// import { fetch } from "whatwg-fetch";
export default function request(
  url,
  method = "get",
  headersConfig = {},
  data = {},
  config = {}
) {
  // showLoad();
  return axiosRequest(url, method, headersConfig, data, config);
  // return fetchRequest(url, method, headersConfig, data);
}
function axiosRequest(url, method, headersConfig, data, config) {
  let headers = {};
  if (headersConfig !== undefined) {
    for (let key in headersConfig) {
      headers[key] = headersConfig[key];
    }
  }
  if (method.toLocaleLowerCase() === "post") {
    let params = new URLSearchParams();
    if (data instanceof Object) {
      for (let key in data) {
        params.append(key, data[key]);
      }
      data = params;
    }
  } else if (method.toLocaleLowerCase() === "file") {
    method = "post";
    let params = new FormData();
    if (data instanceof Object) {
      for (let key in data) {
        params.append(key, data[key]);
      }
      data = params;
    }
  }
  let axiosConfig = {
    method: method.toLocaleLowerCase(),
    url: url,
    data: data,
    headers: headers,
  };
  if (config instanceof Object) {
    for (let key in config) {
      axiosConfig[key] = config[key];
    }
  }

  return axios(axiosConfig).then((res) => {
    // hideLoad();
    return res.data;
  });
}
//
// function fetchRequest(url, method, headersConfig, data) {
//   let fetchConfig = {};
//   let headers = { "Content-Type": "application/x-www-form-urlencoded" };
//   if (headersConfig !== undefined) {
//     for (let key in headersConfig) {
//       headers[key] = headersConfig[key];
//     }
//   }
//   fetchConfig.headers = headers;
//   if (method.toLocaleLowerCase() === "post") {
//     if (data instanceof Object) {
//       let body = "";
//       for (let key in data) {
//         body += "&" + key + "=" + encodeURIComponent(data[key]);
//       }
//       data = body.slice(1);
//     }
//     fetchConfig["body"] = data;
//   } else if (method.toLocaleLowerCase() === "file") {
//     method = "post";
//     let param = new FormData();
//     if (data instanceof Object) {
//       for (let key in data) {
//         param.append(key, data[key]);
//       }
//       data = param;
//       fetchConfig["body"] = data;
//     }
//   }
//
//   fetchConfig["method"] = method.toLocaleLowerCase();
//   return fetch(url, fetchConfig).then((res) => {
//     // hideLoad()
//     return res.json();
//   });
// }

// function showLoad() {
//   oLoading.style.display = "block";
// }
// function hideLoad() {
//   oLoading.style.display = "none";
// }
