import Styles from './Newsletter.scss';
import { Block, Typography, Button } from '../Base';
import Container from '../Base/Container';

const Newsletter = () => {
  return (
    <Block className={[Styles.newsletter]}>
      <Container>
        <Block
          flex
          wrap
          w100
          justifyCenter
          alignCenter
          className={[Styles.header]}>
          <Typography color='#FFFFFF' extraBold size={30}>
            JOIN
          </Typography>

          <Typography
            color='#ff5733'
            extraBold
            size={30}
            style={{ marginLeft: '10px' }}>
            OUR NEWSLETTER
          </Typography>
        </Block>

        <Block style={{ marginTop: '9px' }}>
          <Typography
            color='#FFFFFF'
            sourceSansPro
            textCenter
            size={18}
            color='#e1e1e1'>
            Sign up for our e-mail newsletter and stay informed for what’s next
            on the horizon.
          </Typography>
        </Block>

        <Block flex justifyCenter alignCenter className={[Styles.wrapperInput]}>
          <Block relative>
            <input
              className={Styles.inputNewsletter}
              placeholder='Your email'
            />

            <Button className={[Styles.btnSubscribe]} small hoverEffect={false}>
              Subscribe
            </Button>
          </Block>
        </Block>
      </Container>
    </Block>
  );
};

Newsletter.defaultProps = {
  whiteTitle: '',
};

export default Newsletter;
