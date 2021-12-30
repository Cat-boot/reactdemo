function redNotice(state = { aNotice: [] }, action) {
  switch (action.type) {
    case "notice":
      return { ...state, ...action.data };
    default:
      return state;
  }
}
export default redNotice;
