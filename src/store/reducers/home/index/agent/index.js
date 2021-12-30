function redAgent(state = { aAgent: [] }, action) {
  switch (action.type) {
    case "agent":
      return { ...state, ...action.data };
    default:
      return state;
  }
}
export default redAgent;
