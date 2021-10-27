import { useReducer } from "react";
export enum actionTypes {
  INCRE = "INCREMENT",
  DECRE = "DECREMENT  ",
}

type State = {
  count: number;
};
type IncrementAction = {
  type: actionTypes;
  payload: number;
};
// type ResetAction = {
//   type: actionTypes;
// };
type Action = IncrementAction;
const initialState = { count: 0 };
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case actionTypes.INCRE:
      return {
        count: state.count + action.payload,
      };
    case actionTypes.DECRE:
      return {
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <strong>{state.count}</strong>
      <br />
      <button
        onClick={() => dispatch({ type: actionTypes.INCRE, payload: 10 })}
      >
        INCREMENT
      </button>
      <button
        onClick={() => dispatch({ type: actionTypes.DECRE, payload: 10 })}
      >
        DECREMENT
      </button>
    </div>
  );
};

export default Counter;
