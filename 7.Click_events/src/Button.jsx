const Button = () => {
  const handleClick = (e) => {
    e.target.textContent = "Clicked";
  };

  return <button onDoubleClick={(e) => handleClick(e)}>Click</button>;
};

export default Button;
