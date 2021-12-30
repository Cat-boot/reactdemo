import request from "../../../../assets/js/utils/request";
export function getCustomData() {
  return request(window.base.config.baseUrl + "index/custom");
}
