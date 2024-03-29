const Button = ({ handleClick, children, type }) => {
  return (
    <button data-test="submit-button" type={type} onClick={handleClick} role='link'>{children}</button>
  );
};

export default Button;