import Styles from './Container.scss';

const Container = (props) => {
  const { width, className, style, children, ...containerProps } = props;

  const classNames = [Styles.container, ...className]
    .join(' ')
    .split(' ')
    .filter((cls) => cls != 'false')
    .join(' ');

  return (
    <section
      className={classNames}
      style={{ width: `${width}%`, ...style }}
      {...containerProps}>
      {children}
    </section>
  );
};

Container.defaultProps = {
  width: 85,
  className: [],
  style: {},
};

export default Container;
