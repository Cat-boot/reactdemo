function redMeet(state = { aMeet: [] }, action) {
  switch (action.type) {
    case "meet":
      return { ...state, ...action.data };
    default:
      return state;
  }
}
export default redMeet;
