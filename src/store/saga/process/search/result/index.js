import { take, put, fork } from "redux-saga/effects";
function* sagResult() {
  while (true) {
    let actions = yield take("RESULT");
    yield put({
      type: "result",
      data: { redResultURl: actions.data.redResultURl },
    });
  }
}

let tFork = [fork(sagResult)];
export default tFork;
