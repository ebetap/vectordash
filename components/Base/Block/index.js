import Styles from './Block.scss';

const Block = (props) => {
  const {
    w100,
    flex,
    wrap,
    alignCenter,
    alignStart,
    alignEnd,
    justifyCenter,
    justifyBetween,
    justifyStart,
    justifyEnd,
    selfCenter,
    selfStart,
    selfEnd,
    relative,
    absolute,
    fixed,
    children,
    style,
    className,
    ...blockProps
  } = props;

  const classNames = [
    flex && Styles.flex,
    wrap && Styles.wrap,
    alignCenter && Styles.alignCenter,
    alignStart && Styles.alignStart,
    alignEnd && Styles.alignEnd,
    justifyCenter && Styles.justifyCenter,
    justifyBetween && Styles.justifyBetween,
    justifyStart && Styles.justifyStart,
    justifyEnd && Styles.justifyEnd,
    selfCenter && Styles.selfCenter,
    selfStart && Styles.selfStart,
    selfEnd && Styles.selfEnd,
    relative && Styles.relative,
    absolute && Styles.absolute,
    fixed && Styles.fixed,
    ...className,
  ]
    .join(' ')
    .split(' ')
    .filter((cls) => cls != 'false')
    .join(' ');

  return (
    <div
      className={classNames}
      style={{ width: w100 && w100, ...style }}
      {...blockProps}>
      {children}
    </div>
  );
};

Block.defaultProps = {
  flex: false,
  wrap: false,
  alignCenter: false,
  alignStart: false,
  alignEnd: false,
  justifyCenter: false,
  justifyBetween: false,
  justifyStart: false,
  justifyEnd: false,
  selfCenter: false,
  selfStart: false,
  selfEnd: false,
  relative: false,
  absolute: false,
  fixed: false,
  style: {},
  className: [],
};

export default Block;
