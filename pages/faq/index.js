import { LazyLoadImage } from 'react-lazy-load-image-component';

import DefaultLayout from '../../layouts/Default';
import { Block, Typography, Button, Label } from '../../components/Base';
import Newsletter from '../../components/Newsletter';
import Container from '../../components/Base/Container';
import GameCard from '../../components/GameCard';
import QNAs from '../../components/QNA';

import Styles from './Faq.scss';
import { popularQuestion, dummyGames } from '../../constants/dummy';

const FAQ = (props) => {
  return (
    <DefaultLayout navTransparent>
      <Block relative className={[Styles.headerFAQ]}>
        {/* <img alt='Cover' src='/static/img/cover-faq.png' /> */}
        <LazyLoadImage
          visibleByDefault
          alt='Cover'
          effect='blur'
          src='/static/img/cover-faq.png' // use normal <img> attributes as props
        />

        <Block absolute className={[Styles.contentHeader]}>
          <Typography color='#FFFFFF' bigTitle textCenter>
            HEY THERE,
          </Typography>

          <Typography
            bold
            size={60}
            color='#ff5733'
            style={{ fontWeight: '900' }}
            textCenter>
            HOW CAN WE HELP?
          </Typography>

          <Typography
            sourceSansPro
            color='#FFFFFF'
            textCenter
            size={22}
            style={{ marginTop: '12px' }}>
            Now you can have your own support center without paying monthly
            fees.
          </Typography>

          <Block w100 justifyCenter style={{ marginTop: '34px' }}>
            <Block relative>
              <input
                className={[Styles.searchBox]}
                placeholder='Have a Question?'
              />

              <Button hoverEffect={false} small className={[Styles.buttonAsk]}>
                Ask Now
              </Button>
            </Block>
          </Block>

          <Block className={[Styles.popularQuestion]}>
            <Typography sourceSansPro size={17}>
              Popular Question
            </Typography>

            <Block flex wrap alignCenter style={{ marginTop: '20px' }}>
              {popularQuestion.map((text, idx) => (
                <Label
                  key={idx}
                  textLabel={text}
                  background='#505660'
                  style={{
                    padding: '13px 24px',
                    borderRadius: '40px',
                    marginRight: '15px',
                    cursor: 'pointer',
                    marginBottom: '18px',
                  }}
                />
              ))}
            </Block>
          </Block>
        </Block>
      </Block>

      <Block className={[Styles.sectionContentFAQ]}>
        <Container>
          <Block flex justifyBetween>
            <Block className={[Styles.sectionLeft]}>
              <Typography color='#FFFFFF' size={30} bold>
                Vectordash FAQs
              </Typography>

              <Typography
                sourceSansPro
                paragraph
                style={{ marginTop: '20px', marginBottom: '10px' }}>
                The most common questions we get asked about Vectordash & the
                answers. Hopefully this guide helps! If not, always feel free to
                reach out to support
              </Typography>

              <Block className={[Styles.listQna]}>
                <QNAs />
              </Block>
            </Block>
            <Block className={[Styles.sectionRight]}>
              <Typography bold size={22} style={{ marginBottom: '20px' }}>
                Categories
              </Typography>
            </Block>
          </Block>
        </Container>
      </Block>

      <Block className={[Styles.sectionGames]}>
        <Container>
          <Typography color='#FFFFFF' size={30} bold>
            Popular Games to Play
          </Typography>
        </Container>

        <Block flex className={[Styles.wrapperOtherGames]}>
          {dummyGames.map((data, idx) => (
            <Block className={[Styles.otherGamesItem]}>
              <GameCard
                key={idx}
                data={data}
                customCardContent={[Styles.customCardContent]}
              />
            </Block>
          ))}
        </Block>
      </Block>

      <Block className={[Styles.sectionNewsLetter]}>
        <Newsletter />
      </Block>
    </DefaultLayout>
  );
};

export default FAQ;
