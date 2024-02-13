import PropTypes from "prop-types";

const UserGreeting = (props) => {
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {props.username}</h2>
  );
  const loginPrompt = (
    <h2 className="login-prompt">Please login to continue</h2>
  );

  return props.isLoggedIn ? welcomeMessage : loginPrompt;
};

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

UserGreeting.defaultProps = {
  username: "Guest",
  isLoggedIn: false,
};

export default UserGreeting;
