// 5.Conditional_rendering = allows you to control what gets rendered
//                           in your application based on some conditions
//                           (show, hide or change components)

import UserGreeting from "./UserGreeting";

const App = () => {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="John" />
    </>
  );
};

export default App;
