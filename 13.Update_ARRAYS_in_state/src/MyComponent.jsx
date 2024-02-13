import { useState } from "react";

const MyComponent = () => {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  return (
    <div>
      <h2>List of Foods</h2>
      <ul>
        {foods.map((food, index) => (
          <li
            key={index}
            onClick={() => setFoods(foods.filter((f) => f !== food))}
          >
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button
        onClick={() =>
          setFoods([...foods, document.getElementById("foodInput").value])
        }
      >
        Add Food
      </button>
    </div>
  );
};

export default MyComponent;
