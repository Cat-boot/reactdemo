import request from "../../../../assets/js/utils/request";
export function getAgentData() {
  let sUrl = window.base.config.baseUrl + "index/agent";
  return request(sUrl, "get");
}
