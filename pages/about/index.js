import Layout from '../../layouts/Default';
import { Block, Typography, Button } from '../../components/Base';

import Styles from './About.scss';
import Newsletter from '../../components/Newsletter';
import Container from '../../components/Base/Container';
import CardGamePlay from '../../components/CardGamePlay';
import { cardMissions, ourTeam } from '../../constants/dummy';
import CardTeam from '../../components/CardTeam';

const About = (props) => {
  return (
    <Layout navTransparent>
      <Block relative className={[Styles.headerAbout]}>
        <img alt='Cover' src='/static/img/cover-about.png' />

        <Block className={[Styles.contentHeader]}>
          <Block flex alignCenter justifyCenter>
            <Typography style={{ fontWeight: '900' }} size={60} color='#FFFFFF'>
              ABOUT
            </Typography>

            <Typography
              bold
              size={60}
              color='#ff5733'
              style={{ marginLeft: '15px', fontWeight: '900' }}>
              VECTORDASH
            </Typography>
          </Block>

          <Block alignCenter w100 style={{ textAlign: 'center' }}>
            <Typography
              sourceSansPro
              color='#FFFFFF'
              textCenter
              size={22}
              style={{ marginTop: '12px' }}>
              Now you can have your own support center without paying monthly
              fees.
            </Typography>

            <Button
              small
              style={{
                marginTop: '27px',
                fontWeight: 'bold',
                fontSize: '14px!important',
              }}>
              Learn More
            </Button>
          </Block>
        </Block>
      </Block>

      <Block className={[Styles.sectionAbout]}>
        <Container>
          <Typography bold color='#e1e1e1' size={30}>
            About Us
          </Typography>

          <Typography
            bold
            color='#e1e1e1'
            size={20}
            style={{ marginTop: '20px', marginBottom: '20px' }}>
            Vectordash Story
          </Typography>

          <Typography sourceSansPro paragraph style={{ lineHeight: '28px' }}>
            Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget
            libero posuere vulputate. Etiam elit elit, elementum sed varius at,
            adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed,
            ultricies sapien. Pellentesque orci lectus, consectetur vel posuere
            posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis
            consequat at eget orci. Mauris molestie sit amet metus mattis
            varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam
            interdum dolor aliquet dolor sollicitudin fermentum. Donec congue
            lorem a molestie bibendum. Etiam nisi ante, consectetur eget
            placerat a, tempus a neque. Donec ut elit urna. Etiam venenatis
            eleifend urna eget scelerisque. Aliquam in nunc quis dui
            sollicitudin ornare ac vitae lectus.
          </Typography>

          <Typography sourceSansPro paragraph style={{ lineHeight: '28px' }}>
            Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget
            libero posuere vulputate. Etiam elit elit, elementum sed varius at,
            adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed,
            ultricies sapien. Pellentesque orci lectus, consectetur vel posuere
            posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis
            consequat at eget orci. Mauris molestie sit amet metus mattis
            varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam
            interdum dolor aliquet dolor sollicitudin fermentum. Donec congue
            lorem a molestie bibendum. Etiam nisi ante, consectetur eget
            placerat a, tempus a neque. Donec ut elit urna. Etiam venenatis
            eleifend urna eget scelerisque. Aliquam in nunc quis dui
            sollicitudin ornare ac vitae lectus.
          </Typography>

          <Block
            relative
            flex
            alignCenter
            justifyCenter
            className={[Styles.companyProfile]}>
            <iframe
              width='720'
              height='415'
              src='https://www.youtube.com/embed/9No-FiEInLA'
              frameborder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen></iframe>
          </Block>

          <Typography
            bold
            color='#e1e1e1'
            size={20}
            style={{ marginTop: '40px', marginBottom: '20px' }}>
            Vectordash Mission
          </Typography>

          <Typography sourceSansPro paragraph style={{ lineHeight: '28px' }}>
            Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget
            libero posuere vulputate. Etiam elit elit, elementum sed varius at,
            adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed,
            ultricies sapien. Pellentesque orci lectus, consectetur vel posuere
            posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis
            consequat at eget orci. Mauris molestie sit amet metus mattis
            varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam
            interdum dolor aliquet dolor sollicitudin fermentum. Donec congue
            lorem a molestie bibendum. Etiam nisi ante, consectetur eget
            placerat a, tempus a neque. Donec ut elit urna. Etiam venenatis
            eleifend urna eget scelerisque. Aliquam in nunc quis dui
            sollicitudin ornare ac vitae lectus.
          </Typography>

          <Block flex wrap justifyBetween style={{ marginTop: '40px' }}>
            {cardMissions.map((data, idx) => (
              <Block className={[Styles.cardItem]}>
                <CardGamePlay data={data} />
              </Block>
            ))}
          </Block>

          <Block className={[Styles.sectionOurTeam]}>
            <Block flex justifyCenter alignCenter>
              <Typography extraBold size={35} color='#e1e1e1'>
                MEET
              </Typography>

              <Typography
                extraBold
                size={35}
                color='#ff5733'
                style={{ marginLeft: '12px' }}>
                OUR TEAM
              </Typography>
            </Block>

            <Block justifyCenter alignCenter style={{ marginTop: '12px' }}>
              <Typography sourceSansPro color='#e1e1e1' size={18} textCenter>
                Nam dapibus nisl vitae elit fringilla rutrum
              </Typography>

              <Typography sourceSansPro color='#e1e1e1' size={18} textCenter>
                Aenean sollicitudin.
              </Typography>

              <Block flex wrap className={[Styles.teamLists]}>
                {ourTeam.map((data, idx) => (
                  <Block key={idx} className={[Styles.teamItem]}>
                    <CardTeam data={data} />
                  </Block>
                ))}
              </Block>
            </Block>
          </Block>
        </Container>
      </Block>

      <Block className={[Styles.newsLetters]}>
        <Newsletter />
      </Block>
    </Layout>
  );
};

export default About;
