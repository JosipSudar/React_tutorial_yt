// useContext() = React Hook that allows you to share values
//                between multiple levels of components
//                without passing props through every level

// PROVIDER COMPONENT
// 1. import { createContext } from "react";
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//       <MyComponent />
//    </MyContext.Provider>

// CONSUMER COMPONENT
// 1. import { useContext } from "react";
//    import { MyContext } from "./App";
// 2. const value = useContext(MyContext);

import ComponentA from "./ComponentA";

const App = () => {
  return (
    <>
      <ComponentA />
    </>
  );
};

export default App;
