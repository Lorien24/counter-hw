import { createStore } from "redux";

function reduser(state = { value: 0 }, action) {
  switch (action.type) {
    case "plus":
      return { value: state.value + 1 };
    case "minus":
      return { value: state.value - 1 };
    case "reset":
      return { value: state.value = 0 };
    default:
      return state;
  }
}
const store = createStore(reduser);
export default store;
