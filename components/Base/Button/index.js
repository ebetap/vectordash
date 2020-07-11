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
    rightIcon,
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
    rightIcon && Styles.paddingRightIcon,
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

      {rightIcon && (
        <img alt='Right Icon' className={[Styles.rightIcon]} src={rightIcon} />
      )}
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
  rightIcon: false,
  large: false,
  hoverEffect: true,
};

export default Button;
