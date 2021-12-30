function reducerCustom(state = { aCustom: [] }, action) {
  switch (action.type) {
    case "custom":
      return { ...state, ...action.data };
    default:
      return state;
  }
}
export default reducerCustom;
