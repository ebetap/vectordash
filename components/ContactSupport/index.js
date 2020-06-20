import Styles from './ContactSupport.scss';
import { Block, Typography, Button } from '../Base';
import Container from '../Base/Container';

const ContactSupport = () => {
  return (
    <Block className={[Styles.newsletter]}>
      <Container>
        <Block flex w100 justifyCenter alignCenter>
          <Typography color='#FFFFFF' extraBold size={30}>
            GET IN TOUCH
          </Typography>

          <Typography
            color='#ff5733'
            extraBold
            size={30}
            style={{ marginLeft: '10px' }}>
            WITH SUPPORT
          </Typography>
        </Block>

        <Block style={{ marginTop: '16px' }}>
          <Typography color='#FFFFFF' sourceSansPro textCenter size={18}>
            You can get in touch with Vectordash support by
          </Typography>

          <Typography
            color='#FFFFFF'
            sourceSansPro
            textCenter
            style={{ marginTop: '5px' }}
            size={18}>
            sending an email to support@vectordash.com
          </Typography>
        </Block>

        <Block flex justifyCenter style={{ marginTop: '45px' }}>
          <Button small>Contact Support</Button>
        </Block>
      </Container>
    </Block>
  );
};

export default ContactSupport;
