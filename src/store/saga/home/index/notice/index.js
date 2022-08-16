import { take, call, put, fork } from "redux-saga/effects";
import servNotice from "../../../../../services/home/index/notice";
function* sagaNotice() {
  while (true) {
    yield take("NOTICE");
    let payload = yield call(servNotice);
    let data = [];
    if (payload.code === 200) {
        for (let i in payload.data){
            payload.data[i].key=i;
        }
        data = payload.data;
    }
    yield put({ type: "notice", data: { aNotice: data } });
  }
}
let aFork = [fork(sagaNotice)];
export default aFork;
