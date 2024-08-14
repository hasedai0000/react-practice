const Example = () => {
  // 関数型
  // 状態と処理は分離する
  const nums = [1, 2, 3];
  const sum = (array) => array.reduce((accu, curr) => accu + curr);

  // オブジェクト指向型
  // 状態（データ）と処理を分離して管理
  const numObj = {
    nums: [1, 2, 3],
    sum() {
      const nums = this.nums;
      let sumValue = 0;
      for (let i = 0; i < nums.length; i++) {
        sumValue += nums[i];
      }
      return sumValue;
    },
  };

  return (
    <>
      <h3>状態管理と処理を分離</h3>
      <p>状態（データ）と処理（やりたいこと）は切り離す</p>

      <p>オブジェクト指向型：{numObj.sum()}</p>
      <p>関数型：{sum(nums)}</p>
    </>
  );
};

export default Example;
