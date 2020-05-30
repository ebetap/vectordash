import Styles from './Button.scss';

const Button = (props) => {
  const {
    small,
    medium,
    outline,
    large,
    className,
    children,
    style,
    ...buttonProps
  } = props;

  const classNames = [
    Styles.buttonBase,
    small && Styles.small,
    medium && Styles.buttonMedium,
    large && Styles.buttonLarge,
    outline && Styles.outline,
    ...className,
  ]
    .join(' ')
    .split(' ')
    .filter((cls) => cls != 'false')
    .join(' ');

  return (
    <button className={classNames} style={{ ...style }} {...buttonProps}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: [],
  style: {},
  outline: false,
};

export default Button;
