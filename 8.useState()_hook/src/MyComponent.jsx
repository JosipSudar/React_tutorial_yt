import { useState } from "react";

const MyComponent = () => {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  return (
    <>
      <div>
        <p>Name: {name}</p>
        <button onClick={() => setName("John")}>Set Name</button>
      </div>
      <div>
        <p>Age: {age}</p>
        <button onClick={() => setAge(age + 2)}>Set Age</button>
      </div>
      <div>
        <p>Employed: {isEmployed}</p>
        <button onClick={() => setIsEmployed(!isEmployed)}>Set Employed</button>
      </div>
    </>
  );
};

export default MyComponent;
