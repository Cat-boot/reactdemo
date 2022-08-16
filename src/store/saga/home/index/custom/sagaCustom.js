import { take, fork, put, call } from "redux-saga/effects";
import { getCustomData } from "../../../../../services/home/index/custom/index";
function* sagaCustom() {
  while (true) {
    yield take("CUSTOM");
    let payload = yield call(getCustomData);
      let data = [];
    if (payload.code === 200) {
      data = payload.data;
    }
      yield put({ type: "custom", data: { aCustom: data } });
  }
}
let aFork = [fork(sagaCustom)];
export default aFork;
