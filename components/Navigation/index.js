import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Styles from './Navigation.scss';

import Block from '../Base/Block';
import Container from '../Base/Container';
import ButtonLink from '../Base/ButtonLink';
import { Button } from '../Base';

const Navigation = (props) => {
  const { navTransparent } = props;
  const router = useRouter();
  const { pathname } = router;

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
            <img
              className={Styles.logo}
              src='/static/img/logo.png'
              onClick={() => router.push('/')}
            />
          </Block>

          <Block flex alignCenter className={[Styles.wrapperMenus]}>
            <Block
              className={[Styles.wrapperMenuItem]}
              onClick={() => router.push('/')}>
              <ButtonLink style={{ color: pathname === '/' && '#ff5733' }}>
                Home
              </ButtonLink>
            </Block>

            <Block
              className={[Styles.wrapperMenuItem]}
              onClick={() => router.push('/about')}>
              <ButtonLink
                style={{
                  color: pathname === '/about' && '#ff5733',
                }}>
                About
              </ButtonLink>
            </Block>

            <Block
              className={[Styles.wrapperMenuItem]}
              onClick={() => router.push('/faq')}>
              <ButtonLink style={{ color: pathname === '/faq' && '#ff5733' }}>
                FAQ
              </ButtonLink>
            </Block>

            <Block className={[Styles.wrapperMenuItem]}>
              <ButtonLink>Support</ButtonLink>
            </Block>

            <Block className={[Styles.wrapperMenuItem]}>
              <ButtonLink>Sign In</ButtonLink>
            </Block>

            <Block className={[Styles.wrapperMenuItem]}>
              <Button isWhite={navTransparent ? true : false}>Sign Up</Button>
            </Block>
          </Block>
        </Block>
      </Container>
    </Block>
  );
};

Navigation.defaultProps = {
  navTransparent: false,
};

export default Navigation;
