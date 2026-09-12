import "./Button.css";

const Button = ({ variant, size, onClick, children }) => {
  return (
    <button
      className={`button button--${variant} button--${size}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
