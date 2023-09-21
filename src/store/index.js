import { createStore } from "redux";
const initialState = {
  counter: 0,
  visible: true
};
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      visible: state.visible
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      visible: state.visible
    };
  }
  if (action.type === "incrementByAmountHandler") {
    return {
      counter: state.counter + action.amount,
      visible: state.visible
    };
  }

  if (action.type === "clear") {
    return {
      counter: 0,
      visible: state.visible
    };
  }

  if (action.type === "toggle") {
    return {
      visible: !state.visible,
      counter: state.counter
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
