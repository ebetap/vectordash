import Styles from './Label.scss';
import Block from '../Block';

const Label = (props) => {
  const { textLabel, background } = props;

  return (
    <Block
      className={[Styles.labelBase]}
      style={{ backgroundColor: background }}>
      {textLabel}
    </Block>
  );
};

Label.defaultProps = {
  textLabel: 'Label',
  background: '#4dc600',
};

export default Label;
