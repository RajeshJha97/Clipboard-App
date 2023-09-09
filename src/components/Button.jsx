const Button = ({ bgColor, operation }) => {
  return (
    <a
      href='#'
      className={`p-4 px-8 rounded-full shadow-lg ${bgColor} duration-200 hover:opacity-80`}
    >
      {operation}
    </a>
  );
};
export default Button;
