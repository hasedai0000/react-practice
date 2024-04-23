/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/

import "./Child.css";

// 基本的な書き方
// const Child = ({ color }) => {
// 初期値を設定する書き方
// const Child = ({ color = "green" }) => {
// プロパティに名前をつける書き方
const Child = ({ color: c = "green", num, fn, bool, obj }) => {
  return (
    // propsの基本的な使い方
    // <div className={`component ${color}`}>
    // プロパティに名前をつけた場合のpropsの使い方
    <div className={`component ${c}`}>
      <h3>Hello Component</h3>
      <h3>{num}</h3>
      <h3>{fn("Props")}</h3>
      <h3>{bool ? "true" : "false"}</h3>
      <h3>{obj.name + " " + obj.age}</h3>
    </div>
  );
};

export default Child;
