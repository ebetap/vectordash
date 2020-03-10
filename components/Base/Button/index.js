const Button = props => {
  const { children, style, ...buttonProps } = props;

  const classNames = [].join(' ');

  return (
    <button className={classNames} style={{ ...style }} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
