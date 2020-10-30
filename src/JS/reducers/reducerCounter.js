import { DECREMENT, INCREMENT, TOOGLE } from "../constants/actionsTypes";

const intialState = {
  counter: 0,
  show: false,
};

const reducerCounter = (state = intialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case TOOGLE:
      return { ...state, show: !state.show };

    default:
      return state;
  }
};

export default reducerCounter;
