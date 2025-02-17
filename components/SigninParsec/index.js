import { useState } from 'react';

import { Block, Typography, Button } from '../Base';
import Checkbox from '../Checkbox';
import { Container } from 'next/app';

import Styles from './SigninParsec.scss';

const SignInParsec = (props) => {
  const { isOpen, onClose, onBackdropPress, onSubmitPress } = props;

  const [showPassword, setShowPassword] = useState(false);

  return (
    isOpen && (
      <Block relative className={[Styles.wrapperSignIn]}>
        <Block
          className={[Styles.backdrop]}
          onClick={() => onBackdropPress()}></Block>

        <Block className={[Styles.contentSignin]}>
          <Block relative>
            <img
              onClick={() => onClose()}
              className={[Styles.iconClose]}
              src='/static/img/ic-close.png'
            />

            <Typography color='#07070b' size={20} style={{ fontWeight: '900' }}>
              ENTER PARSEC CREDENTIALS
            </Typography>

            <Block flex alignCenter className={[Styles.wrapperSubTitle]}>
              <Typography sourceSansPro color='#07070b' height={20}>
                We don’t store these ! They’re used to generated a Parsec
                session ID
              </Typography>
            </Block>

            <Block className={[Styles.formSignin]}>
              <Container>
                <Block relative className={[Styles.formField]}>
                  <Block relative style={{ width: 'max-content' }}>
                    <Typography
                      bold
                      color='#07070b'
                      size={15}
                      style={{ marginLeft: '20px' }}>
                      Email
                    </Typography>

                    <Typography
                      bold
                      color='#ff5733'
                      className={[Styles.important]}>
                      *
                    </Typography>
                  </Block>

                  <input
                    type='text'
                    className={[Styles.inputText]}
                    placeholder='Enter Email'
                  />
                </Block>

                <Block relative className={[Styles.formField]}>
                  <Block relative style={{ width: 'max-content' }}>
                    <Typography
                      bold
                      color='#07070b'
                      size={15}
                      style={{ marginLeft: '20px' }}>
                      Password
                    </Typography>

                    <Typography
                      bold
                      color='#ff5733'
                      className={[Styles.important]}>
                      *
                    </Typography>
                  </Block>

                  <Typography
                    sourceSansPro
                    color='#ff5733'
                    className={[Styles.forgotPassoword]}
                    bold>
                    I Forgot
                  </Typography>

                  <Block w100 relative>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className={[Styles.inputText]}
                      placeholder='Enter Password'
                    />

                    {showPassword ? (
                      <Typography
                        onClick={() => setShowPassword(!showPassword)}
                        sourceSansPro
                        color='#ff5733'
                        className={[Styles.showPassword]}
                        bold>
                        Hide
                      </Typography>
                    ) : (
                      <Typography
                        onClick={() => setShowPassword(!showPassword)}
                        sourceSansPro
                        color='#ff5733'
                        className={[Styles.showPassword]}
                        bold>
                        Show
                      </Typography>
                    )}
                  </Block>
                </Block>

                <Block className={[Styles.keepSignIn]}>
                  <Checkbox />
                </Block>

                <Button
                  small
                  className={[Styles.customButton]}
                  onClick={() => onSubmitPress()}>
                  Submit
                </Button>
              </Container>
            </Block>
          </Block>
        </Block>
      </Block>
    )
  );
};

SignInParsec.defaultProps = {
  isOpen: false,
  onClose: () => {},
  onBackdropPress: () => {},
  onSubmitPress: () => {},
};

export default SignInParsec;
