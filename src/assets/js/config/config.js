let devUrl = "/api/"; //开发环境
let prodUrl = "//127.0.0.1:3001/mock/18/api/"; //生产环境

let devUrls = "/sapi/"; //开发环境
let prodUrls = "http://mgr-portal.services.dev.ofc/"; //生产环境

let token = " ";
let path = "/";
let config = {
  baseUrl: process.env.NODE_ENV === "production" ? prodUrl : devUrl,
  baseUrls: process.env.NODE_ENV === "production" ? prodUrls : devUrls,
  path: path,
  token: token,
};
export default config;
