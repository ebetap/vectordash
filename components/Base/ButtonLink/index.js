import Styles from './ButtonLink.scss';

const ButtonLink = (props) => {
  const { className, style, children, ...btnLinkProps } = props;

  const classNames = [Styles.btnLink, ...className]
    .join(' ')
    .split(' ')
    .filter((cls) => cls != 'false')
    .join(' ');

  return (
    <button className={classNames} style={{ ...style }} {...btnLinkProps}>
      {children}
    </button>
  );
};

ButtonLink.defaultProps = {
  className: [],
  style: {},
};

export default ButtonLink;
