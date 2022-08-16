import { take, call, fork, put } from "redux-saga/effects";
import { getAgentData } from "../../../../../services/home/index/agent";
function* sagaAgent() {
  while (true) {
    yield take("AGENT");
    let payload = yield call(getAgentData);
    let data = [];
    if (payload.code === 200) {
        for (let i in payload.data){
            payload.data[i].key=i;
        };
      data = payload.data;
    }
    yield put({ type: "agent", data: { aAgent: data } });
  }
}
let aFork = [fork(sagaAgent)];
export default aFork;
