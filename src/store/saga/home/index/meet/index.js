import { take, call, put, fork } from "redux-saga/effects";
import servMeet from "../../../../../services/home/index/meet";
function* sagaMeet() {
  while (true) {
    yield take("MEET");
    let payload = yield call(servMeet);
    let data = [];
      if (payload.code === 200) {
          for (let i in payload.data){
              payload.data[i].key=i;
          }
      data = payload.data;
    }
    yield put({ type: "meet", data: { aMeet: data } });
  }
}
let aFork = [fork(sagaMeet)];
export default aFork;
