const array = [10, 20, 30, 40];
const newArray = [];

for (i = 0; i < array.length; i++) {
  const val = array[i] * 2;
  if (val > 50) {
    newArray.push(array[i] * 2);
  }
}

console.log(newArray);

// mapメソッドとコールバック関数（省略形）の書き方
const newArray2 = array.map((val) => val * 2);
// 上記のmapで何をしているのかを詳細に書くと。。
// const newArray3 = array.map((val, i, array) => {
//   console.log(val); // 配列の中身を１つずつ表示
//   console.log(i); // 配列の順番を定義
//   console.log(array); // 配列がそのまま渡ってくる
//   return val * 2;
// });

const newArray3 = newArray2.filter((val) => val > 50);
// 上記のfilterで何をしているのかを詳細に書くと。。
// const newArray4 = newArray2.filter((val, i, array) => {
//   console.log(val);
//   console.log(i);
//   console.log(array);
//   return val > 50;
// });

// チェーンメソッド
const newArray4 = array.map((val) => val * 2).filter((val) => val > 50);

console.log(newArray2);
console.log(newArray3);
console.log(newArray4);
