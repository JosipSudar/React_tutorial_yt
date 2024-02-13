// onChange = event handler used primarily with form elements
//            ex. <input>, <textarea>, <select>, <radio>
//            Triggers a function every time the value of the input changes

import { useState } from "react";

const MyComponent = () => {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  return (
    <>
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
        <p>Name: {name}</p>
      </div>
      <div>
        <input
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          type="number"
        ></input>
        <p>Quantity: {quantity}</p>
      </div>
      <div>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          cols="30"
          rows="10"
          placeholder="Enter your comment"
        ></textarea>
        <p>Comment: {comment}</p>
      </div>
      <div>
        <select value={payment} onChange={(e) => setPayment(e.target.value)}>
          <option value="" disabled="disabled">
            Select an option
          </option>
          <option value="Visa">Visa</option>
          <option value="MasterCard">MasterCard</option>
          <option value="Gift card">Gift card</option>
        </select>
        <p>Payment: {payment}</p>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="Pick Up"
            onChange={(e) => setShipping(e.target.value)}
          />{" "}
          Pick Up
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="Delivery"
            onChange={(e) => setShipping(e.target.value)}
          />{" "}
          Delivery
        </label>
        <p>Shipping: {shipping}</p>
      </div>
    </>
  );
};

export default MyComponent;
