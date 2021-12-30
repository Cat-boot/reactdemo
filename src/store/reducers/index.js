import { combineReducers } from "redux";
import reduxReducer from "./reduxReducer";
import reducerCustom from "./home/index/custom/reducerCustom";
import redAgent from "./home/index/agent";
import redNotice from "./home/index/notice";
import redMeet from "./home/index/meet";
import redResult from "./process/search/result";
let reducers = combineReducers({
  reduxReducer: reduxReducer,
  reducerCustom: reducerCustom,
  redAgent: redAgent,
  redNotice: redNotice,
  redMeet: redMeet,
  redResult: redResult,
});

export default reducers;
