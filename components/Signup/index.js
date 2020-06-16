import Styles from './Signup.scss';
import { Block, Typography, Button } from '../Base';
import { Container } from 'next/app';
import Checkbox from '../Checkbox';

const SignUp = (props) => {
  const { isOpen, onClose, onBackdropPress } = props;

  return (
    isOpen && (
      <Block relative className={[Styles.wrapperSignup]}>
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

            <Typography color='#07070b' size={45} style={{ fontWeight: '900' }}>
              SIGN UP
            </Typography>

            <Block flex alignCenter className={[Styles.wrapperSubTitle]}>
              <Typography sourceSansPro color='#07070b'>
                Please sign up first
              </Typography>

              <Typography sourceSansPro color='#ff5733' bold>
                to play the game
              </Typography>

              <Typography sourceSansPro color='#07070b'>
                on vectordash.
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
                      Name
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
                    placeholder='E.g Furqan Rydhan'
                  />
                </Block>

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
                    type='email'
                    className={[Styles.inputText]}
                    placeholder='E.g furqan@agency.com'
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

                  {/* <Typography
                    sourceSansPro
                    color='#ff5733'
                    className={[Styles.forgotPassoword]}
                    bold>
                    I Forgot
                  </Typography> */}

                  <Block w100 relative>
                    <input
                      type='password'
                      className={[Styles.inputText]}
                      placeholder='Enter Password'
                    />

                    {/* <Typography
                      sourceSansPro
                      color='#ff5733'
                      className={[Styles.showPassword]}
                      bold>
                      Show
                    </Typography> */}
                  </Block>
                </Block>

                <Block relative className={[Styles.formField]}>
                  <Block relative style={{ width: 'max-content' }}>
                    <Typography
                      bold
                      color='#07070b'
                      size={15}
                      style={{ marginLeft: '20px' }}>
                      Confirm Password
                    </Typography>

                    <Typography
                      bold
                      color='#ff5733'
                      className={[Styles.important]}>
                      *
                    </Typography>
                  </Block>

                  {/* <Typography
                    sourceSansPro
                    color='#ff5733'
                    className={[Styles.forgotPassoword]}
                    bold>
                    I Forgot
                  </Typography> */}

                  <Block w100 relative>
                    <input
                      type='password'
                      className={[Styles.inputText]}
                      placeholder='Enter Password'
                    />

                    {/* <Typography
                      sourceSansPro
                      color='#ff5733'
                      className={[Styles.showPassword]}
                      bold>
                      Show
                    </Typography> */}
                  </Block>
                </Block>

                <Block className={[Styles.keepSignIn]}>
                  <Checkbox label='I would like to receive news and promotions' />
                </Block>

                <Block style={{ marginTop: '-20px' }}>
                  <Checkbox
                    textWidth={80}
                    label='I have read and agreed to Privacy policy and Terms of use'
                  />
                </Block>

                <Button small className={[Styles.customButton]}>
                  Sign Up & Start Gaming
                </Button>
              </Container>
            </Block>
          </Block>
        </Block>
      </Block>
    )
  );
};

SignUp.defaultProps = {
  isOpen: false,
  onClose: () => {},
  onBackdropPress: () => {},
};

export default SignUp;
