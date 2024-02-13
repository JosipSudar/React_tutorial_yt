// React hook = Special function that allows functional components
//              to use React features without writing class components
//              (e.g. useState, useEffect, useContext, useReducer, useCallback , etc.)

import Counter from "./Counter";

// useState() = A React hook that allows the creation of a stateful variable
//              AND a setter function to update its value in the Virtual DOM.
//              [name, setName] = useState('')

const App = () => {
  return (
    <>
      <Counter />
    </>
  );
};

export default App;
