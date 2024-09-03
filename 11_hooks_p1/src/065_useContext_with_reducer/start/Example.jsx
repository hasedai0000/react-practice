import { useReducer } from "react";
import Counter from "./components/Counter";

// POINT useContext x useReducer
const Example = () => {
  const [state, dispatch] = useReducer((prev, { type, step }) => {
    const newState = prev;
    switch (type) {
      case "+":
        return newState + Number(step);
      case "-":
        return newState - Number(step);
      default:
        throw new Error("不明なactionです。");
    }
  }, 0);

  const countUp = (e) => {
    dispatch({ type: "+", step: e.target.step });
  };
  const countDown = (e) => {
    dispatch({ type: "-", step: e.target.step });
  };
  return (
    <>
      <Counter state={state} countUp={countUp} countDown={countDown} />
    </>
  );
};

export default Example;
