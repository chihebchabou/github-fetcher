import "./Button.css";

const Button = ({ variant, size, children }) => {
  return (
    <button className={`button button--${variant} button--${size}`}>
      {children}
    </button>
  );
};

export default Button;
