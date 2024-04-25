import { useState } from "react";

const Example = () => {
  let [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count + 1);
    // 現在のステートの値を使用する場合は以下のようにする
    setCount((prevstate) => {
      return prevstate + 1;
    });
  };

  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <p>現在のカウント数:{count}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
