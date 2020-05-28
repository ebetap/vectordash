import Styles from './Button.scss';

const Button = (props) => {
  const { className, children, style, ...buttonProps } = props;

  const classNames = [Styles.buttonBase, ...className]
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
};

export default Button;
