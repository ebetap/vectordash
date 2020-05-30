import { useState, useEffect } from 'react';
import Styles from './Navigation.scss';

import Block from '../Base/Block';
import Container from '../Base/Container';
import ButtonLink from '../Base/ButtonLink';
import { Button } from '../Base';

const Navigation = (props) => {
  const [scrollPosition, setSrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Block
      fixed
      className={[Styles.navigation, scrollPosition > 80 && Styles.sticky]}>
      <Container>
        <Block flex justifyBetween alignCenter>
          <Block>
            <img className={Styles.logo} src='/static/img/logo.png' />
          </Block>

          <Block flex alignCenter>
            <Block className={[Styles.wrapperMenuItem]}>
              <ButtonLink>Home</ButtonLink>
            </Block>

            <Block className={[Styles.wrapperMenuItem]}>
              <ButtonLink>About</ButtonLink>
            </Block>

            <Block className={[Styles.wrapperMenuItem]}>
              <ButtonLink>FAQ</ButtonLink>
            </Block>

            <Block className={[Styles.wrapperMenuItem]}>
              <ButtonLink>Support</ButtonLink>
            </Block>

            <Block className={[Styles.wrapperMenuItem]}>
              <ButtonLink>Sign In</ButtonLink>
            </Block>

            <Block className={[Styles.wrapperMenuItem]}>
              <Button>Sign Up</Button>
            </Block>
          </Block>
        </Block>
      </Container>
    </Block>
  );
};

export default Navigation;
