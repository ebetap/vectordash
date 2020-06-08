import Styles from './Label.scss';
import Block from '../Block';

const Label = (props) => {
  const { textLabel, background, big, style, ...labelProps } = props;

  return (
    <Block
      className={[Styles.labelBase, big && Styles.big]}
      style={{ backgroundColor: background, ...style }}
      {...labelProps}>
      {textLabel}
    </Block>
  );
};

Label.defaultProps = {
  textLabel: 'Label',
  background: '#4dc600',
  big: false,
};

export default Label;
