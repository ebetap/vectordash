import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Block from '../Base/Block';
import Container from '../Base/Container';
import ButtonLink from '../Base/ButtonLink';
import { Button, Typography } from '../Base';
import SignIn from '../Signin';

import Styles from './Navigation.scss';
import SignUp from '../Signup';
import { useOnClickOutside } from '../../utils/Helpers';

const Navigation = (props) => {
  const { navTransparent, profile } = props;
  const router = useRouter();
  const { pathname } = router;
  const ref = useRef();

  const [scrollPosition, setSrollPosition] = useState(0);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);

  useOnClickOutside(ref, () => setShowSideMenu(false));

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
        <Block relative flex justifyBetween alignCenter>
          <img
            className={Styles.hamburgerMenu}
            src='/static/img/hamburger.svg'
            onClick={() => setShowSideMenu(true)}
          />

          <Block
            refs={ref}
            className={[Styles.sideMenu, showSideMenu && Styles.showMenu]}>
            <img
              src='/static/img/logo.png'
              style={{ marginBottom: '25px', maxWidth: '210px' }}
            />

            <Link href='/'>
              <Block
                className={[Styles.wrapperMenuItemMobile]}
                onClick={() => setShowSideMenu(false)}>
                <ButtonLink style={{ color: pathname === '/' && '#ff5733' }}>
                  Home
                </ButtonLink>
              </Block>
            </Link>

            <Link href='/about'>
              <Block
                className={[Styles.wrapperMenuItemMobile]}
                onClick={() => setShowSideMenu(false)}>
                <ButtonLink
                  style={{
                    color: pathname === '/about' && '#ff5733',
                  }}>
                  About
                </ButtonLink>
              </Block>
            </Link>

            <Link href='/faq'>
              <Block
                className={[Styles.wrapperMenuItemMobile]}
                onClick={() => setShowSideMenu(false)}>
                <ButtonLink style={{ color: pathname === '/faq' && '#ff5733' }}>
                  FAQ
                </ButtonLink>
              </Block>
            </Link>

            <Link href='/support'>
              <Block
                className={[Styles.wrapperMenuItemMobile]}
                onClick={() => setShowSideMenu(false)}>
                <ButtonLink
                  style={{ color: pathname === '/support' && '#ff5733' }}>
                  Support
                </ButtonLink>
              </Block>
            </Link>

            <Block
              className={[Styles.wrapperMenuItemMobile]}
              onClick={() => {
                setShowSideMenu(false);
                setShowSignIn(true);
              }}>
              <ButtonLink>Sign In</ButtonLink>
            </Block>

            <Button
              small
              style={{ marginTop: '10px' }}
              onClick={() => {
                setShowSideMenu(false);
                setShowSignUp(true);
              }}>
              Get Started
            </Button>
          </Block>

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
  profile: false,
};

export default Navigation;
