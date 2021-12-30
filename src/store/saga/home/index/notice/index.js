import { take, call, put, fork } from "redux-saga/effects";
import servNotice from "../../../../../services/home/index/notice";
function* sagaNotice() {
  while (true) {
    yield take("NOTICE");
    let payload = yield call(servNotice);
    let data = [];
    if (payload.status === "200") {
      data = payload.data;
    }
    yield put({ type: "notice", data: { aNotice: data } });
  }
}
let aFork = [fork(sagaNotice)];
export default aFork;
