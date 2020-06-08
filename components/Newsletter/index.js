import Styles from './Newsletter.scss';
import { Block, Typography, Button } from '../Base';
import Container from '../Base/Container';

const Newsletter = () => {
  return (
    <Block className={[Styles.newsletter]}>
      <Container>
        <Block flex w100 justifyCenter alignCenter>
          <Typography color='#FFFFFF' bold size={35}>
            JOIN
          </Typography>

          <Typography
            color='#ff5733'
            bold
            size={35}
            style={{ marginLeft: '10px' }}>
            OUR NEWSLETTER
          </Typography>
        </Block>

        <Block style={{ marginTop: '16px' }}>
          <Typography color='#FFFFFF' sourceSansPro textCenter size={18}>
            Sign up for our e-mail newsletter and stay informed
          </Typography>

          <Typography
            color='#FFFFFF'
            sourceSansPro
            textCenter
            style={{ marginTop: '5px' }}
            size={18}>
            for what’s next on the horizon.
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

export default Newsletter;
