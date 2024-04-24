import Profile from "./components/Profile";

const Example = () => {
  const profiles = [
    { name: "Takashi", age: 19, country: "Japan" },
    { name: "Jane", age: 28, country: "UK" },
    { name: "John Doe", country: "Japan" },
  ];

  return (
    <>
      {profiles.map((profile, index) => {
        return <Profile {...profile} key={index} />;
      })}
    </>
  );
};

export default Example;
