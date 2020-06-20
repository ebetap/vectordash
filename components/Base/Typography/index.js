import Styles from './Typography.scss';

const Typography = (props) => {
  const {
    bigTitle,
    textCenter,
    textLeft,
    height,
    bold,
    sourceSansPro,
    size,
    h1,
    h2,
    h3,
    className,
    color,
    style,
    children,
    elipsis,
    paragraph,
    extraBold,
    ...textProps
  } = props;

  const classNames = [
    Styles.typography,
    bigTitle && Styles.bigTitle,
    bold && Styles.bold,
    sourceSansPro && Styles.sourceSansPro,
    textCenter && Styles.textCenter,
    textLeft && Styles.textLeft,
    h1 && Styles.h1,
    h2 && Styles.h2,
    h3 && Styles.h3,
    elipsis && Styles.elipsis,
    paragraph && Styles.paragraph,
    extraBold && Styles.extraBold,
    ...className,
  ]
    .join(' ')
    .split(' ')
    .filter((cls) => cls != 'false')
    .join(' ');

  return (
    <div
      className={classNames}
      style={{
        color: color ? color : '#FFFFFF',
        fontSize: size && size,
        lineHeight: height && `${height}px`,
        ...style,
      }}
      {...textProps}>
      {children}
    </div>
  );
};

Typography.defaultProps = {
  bigTitle: false,
  sourceSansPro: false,
  size: 16,
  textCenter: false,
  h1: false,
  h2: false,
  h3: false,
  className: [],
  color: false,
  style: {},
  bold: false,
  elipsis: false,
  paragraph: false,
  extraBold: false,
};

export default Typography;
