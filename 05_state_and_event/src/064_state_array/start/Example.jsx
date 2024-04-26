import { useState } from "react";

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [nums, setNums] = useState(numArray);

  const shuffleNums = () => {
    const newNums = [...nums];
    const value = newNums.pop();
    newNums.unshift(value);
    setNums(newNums);
  };
  return (
    <>
      <h1>{nums}</h1>
      <button onClick={shuffleNums}>shuffle</button>
    </>
  );
};

export default Example;
