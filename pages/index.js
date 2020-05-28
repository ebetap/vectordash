import DefaultLayout from '../layouts/Default';

import { Block, Typography, Button } from '../components/Base';
import Container from '../components/Base/Container';

import Styles from './index.scss';

const Homepage = () => {
  return (
    <DefaultLayout>
      <Block relative className={[Styles.sectionHeader]}>
        <Container>
          <Block w100 className={[Styles.title]}>
            <Typography bigTitle textCenter>
              Play your favorite games
            </Typography>

            <Typography bigTitle textCenter>
              on any computer
            </Typography>
          </Block>

          <Block w100 className={[Styles.subTitle]}>
            <Typography sourceSansPro textCenter size={22}>
              Don't own a gaming PC? Vectordash lets you play games like Call of
              Duty, GTA V, Magic
            </Typography>

            <Block flex justifyCenter alignCenter>
              <Typography sourceSansPro textCenter size={22}>
                Arena, and more on
              </Typography>

              <Typography
                sourceSansPro
                textCenter
                size={20}
                bold
                color='#8a3eff'
                style={{ marginLeft: '5px' }}>
                Android, Mac, and Windows.
              </Typography>
            </Block>

            <Block flex justifyCenter w100 className={[Styles.ctaButton]}>
              <Button>Get Started</Button>
            </Block>
          </Block>
        </Container>
      </Block>
    </DefaultLayout>
  );
};

export default Homepage;
