const Input = (props) => {
  const { className, style, ...inputProps } = props;

  const classNames = [...className]
    .join(' ')
    .split(' ')
    .filter((cls) => cls != 'false')
    .join(' ');

  return <input className={classNames} style={{ ...style }} {...inputProps} />;
};

Input.defaultProps = {
  className: [],
};

export default Input;
