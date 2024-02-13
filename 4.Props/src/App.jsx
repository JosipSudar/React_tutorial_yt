// props = read-only properties that are shared between components.
//         A parent component can send data to a child component.
//         <Component key=value />

import Student from "./Student";

const App = () => {
  return (
    <>
      <Student name="John" age={20} isStudent={true} />
      <Student name="Jane" age={21} isStudent={false} />
      <Student name="Jim" age={22} isStudent={true} />
      <Student name="Jill" age={23} isStudent={false} />
      <Student name="Jack" />
    </>
  );
};

export default App;
