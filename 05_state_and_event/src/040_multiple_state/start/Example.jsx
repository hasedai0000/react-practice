import { useState } from "react";

const Example = () => {
  let [valA, setValA] = useState(0);
  let [valB, setValB] = useState(0);
  let [valC, setValC] = useState(0);
  const onClickButtonA = () => {
    setValA(valA + 1);
  };
  const onClickButtonB = () => {
    setValB(valB + 1);
  };
  const onClickButtonC = () => {
    setValC(valC + 1);
  };

  return (
    <>
      <p>ボタンAを{valA}回押しました!</p>
      <button onClick={onClickButtonA}>ボタンA</button>
      <p>ボタンBを{valB}回押しました!</p>
      <button onClick={onClickButtonB}>ボタンB</button>
      <p>ボタンCを{valC}回押しました!</p>
      <button onClick={onClickButtonC}>ボタンC</button>
    </>
  );
};

export default Example;
