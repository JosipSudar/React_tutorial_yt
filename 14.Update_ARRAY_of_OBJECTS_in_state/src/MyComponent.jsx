import { useState } from "react";

const MyComponent = () => {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const AddCar = () => {
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCars((cars) => [...cars, newCar]);
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  };

  const RemoveCar = (index) => {
    setCars((cars) => cars.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>List of car object</h2>
      <ul>
        {cars.map((car, index) => {
          <li key={index} onClick={() => RemoveCar}>
            {car.year} {car.make} {car.model}
          </li>;
        })}
      </ul>
      <input
        type="number"
        value={carYear}
        onChange={(e) => setCarYear(e.target.value)}
      />{" "}
      <br />
      <input
        type="text"
        value={carMake}
        onChange={(e) => setCarMake(e.target.value)}
        placeholder="Enter car make"
      />{" "}
      <br />
      <input
        type="text"
        value={carModel}
        onChange={(e) => setCarModel(e.target.value)}
        placeholder="Enter car model"
      />{" "}
      <br />
      <button onClick={AddCar}>Add car</button>
    </div>
  );
};

export default MyComponent;
