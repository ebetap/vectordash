import Styles from './Button.scss';

const Button = (props) => {
  const {
    small,
    medium,
    outline,
    large,
    className,
    children,
    transparent,
    style,
    isWhite,
    leftIcon,
    hoverEffect,
    ...buttonProps
  } = props;

  const classNames = [
    Styles.buttonBase,
    small && Styles.small,
    medium && Styles.buttonMedium,
    large && Styles.buttonLarge,
    outline && Styles.outline,
    transparent && Styles.transparent,
    isWhite && Styles.isWhite,
    leftIcon && Styles.paddingLeftIcon,
    !hoverEffect && Styles.noHoverEffect,
    ...className,
  ]
    .join(' ')
    .split(' ')
    .filter((cls) => cls != 'false')
    .join(' ');

  return (
    <button className={classNames} style={{ ...style }} {...buttonProps}>
      {leftIcon && (
        <img alt='Left Icon' className={[Styles.leftIcon]} src={leftIcon} />
      )}
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: [],
  style: {},
  outline: false,
  transparent: false,
  isWhite: false,
  leftIcon: false,
  hoverEffect: true,
};

export default Button;
