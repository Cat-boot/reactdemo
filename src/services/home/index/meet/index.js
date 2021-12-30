import request from "../../../../assets/js/utils/request";
export default function servMeet() {
  let sUrl = window.base.config.baseUrl + "index/meet";
  return request(sUrl);
}
