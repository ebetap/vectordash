import { Block } from '../../Base';

import Styles from './Spiner.scss';

const Spiner = () => {
  return (
    <Block className={[Styles.baseSpiner]}>
      <img className={[Styles.rotate]} src='/static/img/loading-logo.png' />
    </Block>
  );
};

export default Spiner;
