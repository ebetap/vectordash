import Styles from './Label.scss';
import Block from '../Block';

const Label = (props) => {
  const { textLabel, background, big, textColor, style, ...labelProps } = props;

  return (
    <Block
      className={[Styles.labelBase, big && Styles.big]}
      style={{ backgroundColor: background, color: textColor, ...style }}
      {...labelProps}>
      {textLabel}
    </Block>
  );
};

Label.defaultProps = {
  textLabel: 'Label',
  textColor: '#ffffff',
  background: '#4dc600',
  big: false,
};

export default Label;
