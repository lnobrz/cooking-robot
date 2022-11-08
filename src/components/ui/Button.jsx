const Button = (props) => {
  return (
    <button
      className={`${props.additionalClasses} flex flex-row justify-center items-center rounded-lg font-text`}
      onClick={props.onClick}
    >
      <p>{props.text}</p>
    </button>
  );
};

export default Button;
