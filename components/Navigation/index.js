import Styles from './Navigation.scss';

import Block from '../Base/Block';
import Container from '../Base/Container';

const Navigation = (props) => {
  return (
    <Block fixed className={[Styles.navigation]}>
      <Container>
        <Block flex justifyBetween>
          <Block>
            <img className={Styles.logo} src='/static/img/logo.png' />
          </Block>

          <Block>Right</Block>
        </Block>
      </Container>
    </Block>
  );
};

export default Navigation;
