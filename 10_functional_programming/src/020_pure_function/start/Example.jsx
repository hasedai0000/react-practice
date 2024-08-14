const Example = () => {
  // 純粋関数
  // ①fn（決まった引数） => 決まった戻り値
  // ②関数外の状態（データ）は参照・変更しない
  // ③関数外に影響を及ぼさない
  // ④引数で渡された値を変更しない
  // 上記の要件を満たさない操作は「副作用」と呼ぶ。

  const val1 = 2,
    val2 = 3;

  //　純粋な状態
  const add = (val1, val2) => {
    return val1 + val2;
  };

  //　純粋じゃない状態
  // 引数が１個に対して引数外の値を参照しているため、戻り値が決まったものにならない(①に触れている)
  let result;
  const add2 = (val1) => {
    // 関数外に影響を及ぼしている（③に触れいている）
    result = val1 + val2;

    // 外部スコープのval2を呼び出している（②に触れる）
    return val1 + val2;
  };

  return (
    <>
      <h3>純粋関数</h3>
      <p>fn(決まった引数) には 決まった戻り値 を返す：{add(val1, val2)}</p>
      <p></p>
    </>
  );
};

export default Example;
