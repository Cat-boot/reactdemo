let aRedResultURl = localStorage["redResultURl"]
  ? JSON.parse(localStorage["redResultURl"])
  : [];
function redResult(state = { redResultURl: aRedResultURl }, action) {
  switch (action.type) {
    case "result":
      return { ...state, ...action.data };
    default:
      return state;
  }
}
export default redResult;
