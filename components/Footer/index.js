import Styles from './Footer.scss';

import { Block, Typography } from '../Base';
import Container from '../../components/Base/Container';

const Footer = (props) => {
  return (
    <Block className={[Styles.footer]}>
      <Container>
        <Block w100 flex justifyBetween>
          <Block className={[Styles.listItem]}>
            <img
              alt='Logo'
              src='/static/img/logo.png'
              className={Styles.logoBottom}
            />
          </Block>

          <Block className={[Styles.listItem]}>
            <Typography bold color='#FFFFFF' size={15}>
              Vectordash
            </Typography>

            <Typography style={{ marginTop: '25px', cursor: 'pointer' }}>
              Home
            </Typography>

            <Typography style={{ marginTop: '15px', cursor: 'pointer' }}>
              Login
            </Typography>

            <Typography style={{ marginTop: '15px', cursor: 'pointer' }}>
              Check Availability
            </Typography>
          </Block>
          <Block className={[Styles.listItem]}>
            <Typography bold color='#FFFFFF' size={15}>
              Hosting
            </Typography>

            <Typography style={{ marginTop: '25px', cursor: 'pointer' }}>
              Hosting Sign Up
            </Typography>

            <Typography style={{ marginTop: '15px', cursor: 'pointer' }}>
              My Machines
            </Typography>

            <Typography style={{ marginTop: '15px', cursor: 'pointer' }}>
              Documentation
            </Typography>
          </Block>
          <Block className={[Styles.listItem]}>
            <Typography bold color='#FFFFFF' size={15}>
              FAQ
            </Typography>

            <Typography style={{ marginTop: '25px', cursor: 'pointer' }}>
              Privacy Policy
            </Typography>

            <Typography style={{ marginTop: '15px', cursor: 'pointer' }}>
              Terms of Service
            </Typography>

            <Typography style={{ marginTop: '15px', cursor: 'pointer' }}>
              Support
            </Typography>
          </Block>
        </Block>
      </Container>
    </Block>
  );
};

export default Footer;
