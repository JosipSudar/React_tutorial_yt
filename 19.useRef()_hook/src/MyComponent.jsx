// useState() = Re-renders the component when a state changes.

import { useRef } from "react";
import { useEffect } from "react";

// useRef() = "use Reference" Does not cause re-renders when its value changes.
//            When you want a component to "remember" some information.
//            but you don't want that information to trigger new renders.

//            1. Accessing/Interacting with DOM elements
//            2. Handling Focus, Animation, and Transitions
//            3. Managing Timers and Intervals

const MyComponent = () => {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log("COMPONENT RENDERED");
  });

  return (
    <>
      <button
        onClick={() => {
          inputRef1.current.focus(),
            (inputRef1.current.style.backgroundColor = "red");
        }}
      >
        Click me 1!
      </button>
      <input type="text" ref={inputRef1} />

      <button
        onClick={() => {
          inputRef2.current.focus(),
            (inputRef2.current.style.backgroundColor = "red");
        }}
      >
        Click me 2!
      </button>
      <input type="text" ref={inputRef2} />

      <button
        onClick={() => {
          inputRef3.current.focus(),
            (inputRef3.current.style.backgroundColor = "red");
        }}
      >
        Click me 3!
      </button>
      <input type="text" ref={inputRef3} />
    </>
  );
};

export default MyComponent;
