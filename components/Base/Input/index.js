const Input = props => {
  const { style, ...inputProps } = props;

  const classNames = [].join(' ');

  return <input className={classNames} style={{ ...style }} {...inputProps} />;
};

export default Input;
