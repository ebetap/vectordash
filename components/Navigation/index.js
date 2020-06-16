import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Block from '../Base/Block';
import Container from '../Base/Container';
import ButtonLink from '../Base/ButtonLink';
import { Button } from '../Base';
import SignIn from '../Signin';

import Styles from './Navigation.scss';
import SignUp from '../Signup';

const Navigation = (props) => {
  const { navTransparent } = props;
  const router = useRouter();
  const { pathname } = router;

  const [scrollPosition, setSrollPosition] = useState(0);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

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
      <SignIn
        isOpen={showSignIn}
        onBackdropPress={() => setShowSignIn(false)}
        onClose={() => setShowSignIn(false)}
      />

      <SignUp
        isOpen={showSignUp}
        onBackdropPress={() => setShowSignUp(false)}
        onClose={() => setShowSignUp(false)}
      />

      <Container>
        <Block flex justifyBetween alignCenter>
          <Link href='/'>
            <img
              className={Styles.logo}
              src='/static/img/logo.png'
              onClick={() => router.push('/')}
            />
          </Link>

          <Block flex alignCenter className={[Styles.wrapperMenus]}>
            <Link href='/'>
              <Block className={[Styles.wrapperMenuItem]}>
                <ButtonLink style={{ color: pathname === '/' && '#ff5733' }}>
                  Home
                </ButtonLink>
              </Block>
            </Link>

            <Link href='/about'>
              <Block className={[Styles.wrapperMenuItem]}>
                <ButtonLink
                  style={{
                    color: pathname === '/about' && '#ff5733',
                  }}>
                  About
                </ButtonLink>
              </Block>
            </Link>

            <Link href='/faq'>
              <Block className={[Styles.wrapperMenuItem]}>
                <ButtonLink style={{ color: pathname === '/faq' && '#ff5733' }}>
                  FAQ
                </ButtonLink>
              </Block>
            </Link>

            <Link href='/support'>
              <Block className={[Styles.wrapperMenuItem]}>
                <ButtonLink
                  style={{ color: pathname === '/support' && '#ff5733' }}>
                  Support
                </ButtonLink>
              </Block>
            </Link>

            <Block className={[Styles.wrapperMenuItem]}>
              <ButtonLink onClick={() => setShowSignIn(true)}>
                Sign In
              </ButtonLink>
            </Block>

            <Block className={[Styles.wrapperMenuItem]}>
              <Button
                onClick={() => setShowSignUp(true)}
                isWhite={navTransparent ? true : false}>
                Sign Up
              </Button>
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
