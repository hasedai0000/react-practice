function fn(number) {
  return number * 2;
}

// 基本的なアロー関数
const fnArrow = (number) => {
  return number * 2;
};

// 省略したアロー関数（引数が1つの場合のみ）
const fnArrowShort1 = (number) => {
  return number * 2;
};

// 省略したアロー関数（関数の本文が1行の場合のみ）
const fnArrowShort2 = (number) => number * 2;

// 戻り値がオブジェクトの場合
const fnArrowObj = (number) => ({ result: number * 2 });
