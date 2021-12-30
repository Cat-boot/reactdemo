import { take, call, fork, put } from "redux-saga/effects";
import { getAgentData } from "../../../../../services/home/index/agent";
function* sagaAgent() {
  while (true) {
    yield take("AGENT");
    let payload = yield call(getAgentData);
    let data = [];
    if (payload.status === "200") {
      data = payload.data;
    }
    yield put({ type: "agent", data: { aAgent: data } });
  }
}
let aFork = [fork(sagaAgent)];
export default aFork;
