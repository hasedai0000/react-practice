import { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h3>練習問題</h3>
      <CountResult title="カウント" count={count} />
      <CountUpdate count={count} setCount={setCount} />
    </>
  );
};
const CountResult = ({ title, count }) => {
  return (
    <>
      <h3>
        {title}:{count}
      </h3>
    </>
  );
};

const CountUpdate = ({ count, setCount }) => {
  const countUp = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const countDown = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
