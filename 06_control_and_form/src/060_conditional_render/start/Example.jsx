import { useState } from "react";

const Example = () => {
  const animals = ["Dog", "Cat", null, "Rat"];

  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            const animalStr = animal ?? "";
            const isMatch = animalStr.indexOf(filterVal) !== -1;

            return isMatch;
          })
          .map((animal) => {
            return (
              <li key={animal}>
                {
                  // 通常のIF文
                  // if (animal === "Dog") {
                  //   return <li key={animal}>{animal + "★"}</li>;
                  // } else {
                  //   return <li key={animal}>{animal}</li>;
                  // }

                  // 三項演算子
                  // return (
                  //   <li key={animal}>{animal + (animal === "Dog" ? "★" : "")}</li>
                  // );

                  // null合体演算子
                  animal ?? "null, undefinedでした"
                }
                {/* &&演算子 */}
                {animal === "Dog" && "★"}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Example;
