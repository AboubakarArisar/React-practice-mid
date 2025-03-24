function Button({ name, className, clickHandler }) {
  return (
    <button className={className} onClick={clickHandler}>
      {name}
    </button>
  );
}

export default Button;
