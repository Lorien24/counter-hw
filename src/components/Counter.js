import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const dispatch = useDispatch();
  const counterState = useSelector((state) => state.value);

  return (
    <div className="counter">
      <h1>{counterState}</h1>
      <div className="buttons">
        <button onClick={() => dispatch({ type: "plus" })}>+1</button>
        <button onClick={() => dispatch({ type: "minus" })}>-1</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
