import { useState } from "react";

const MyComponent = () => {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  return (
    <div>
      <p>
        Your favorite car is a {car.year} {car.make} {car.model}
      </p>
      <input
        type="number"
        value={car.year}
        onChange={(e) => setCar({ ...car, year: e.target.value })}
      />{" "}
      <br />
      <input
        type="text"
        value={car.make}
        onChange={(e) => setCar({ ...car, make: e.target.value })}
      />{" "}
      <br />
      <input
        type="text"
        value={car.model}
        onChange={(e) => setCar({ ...car, model: e.target.value })}
      />
    </div>
  );
};

export default MyComponent;
