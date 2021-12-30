import request from "../../../../assets/js/utils/request";
export default function servNotice() {
  let sUrl = window.base.config.baseUrl + "index/notice";
  return request(sUrl, "get");
}
