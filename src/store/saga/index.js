import { all } from "redux-saga/effects";
import reduxSaga from "./reduxSaga";
import sagaCustom from "./home/index/custom/sagaCustom";
import sagaAgent from "./home/index/agent";
import sagaNotice from "./home/index/notice";
import sagaMeet from "./home/index/meet";
import sagResult from "./process/search/result";
function* sagaIndex() {
  yield all([
    ...reduxSaga,
    ...sagaCustom,
    ...sagaAgent,
    ...sagaNotice,
    ...sagaMeet,
    ...sagResult,
  ]);
}
export default sagaIndex;
