import { useState } from "react";
import Profile from "./components/Profile";

const persons = [
  {
    name: "Geo",
    age: 18,
    hobbies: ["sports", "music"],
  },
  {
    name: "Tom",
    age: 25,
    hobbies: ["movie", "music"],
  },
  {
    name: "Lisa",
    age: 21,
    hobbies: ["sports", "travel", "game"],
  },
];

const Example = () => {
  const [filterVal, setFilterVal] = useState("");
  const filterList = (e) => {
    setFilterVal(e.target.value);
  };
  return (
    <>
      <input type="text" value={filterVal} onChange={filterList} />
      <ul>
        {persons
          .filter((person) => {
            const isMatch = person.name.indexOf(filterVal) !== -1;
            return isMatch;
          })
          .map((person) => (
            <li key={person.name}>
              <Profile {...person} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Example;
