import { useEffect } from 'react';

import Layout from '../../layouts/Default';
import Block from '../../components/Base/Block';
import Typography from '../../components/Base/Typography';
import Container from '../../components/Base/Container';
import { Label, Button } from '../../components/Base';

import logoNoText from '../../static/img/logo-not-text.png';

import Styles from './GameDescription.scss';
import Newsletter from '../../components/Newsletter';
import GameCard from '../../components/GameCard';
import { dummyGames } from '../../constants/dummy';

const GameDescription = (props) => {
  // useEffect(() => {
  //   window && window.scroll(0, 0);
  // }, []);

  return (
    <Layout navTransparent>
      <Block className={[Styles.gameDescription]}>
        <Block relative className={[Styles.sectionHeader]}>
          <img
            className={[Styles.backgroundHeader]}
            src='/static/img/cover-desc.png'
          />

          <Block className={[Styles.contentHeader]}>
            <Container>
              <Block flex wrap alignCenter>
                <Label
                  big
                  textLabel='Recommended'
                  background='rgba(255, 255, 255, 0.3)'
                />

                <Label
                  big
                  textLabel='Free to Play'
                  background='rgba(255, 255, 255, 0.3)'
                  style={{ marginLeft: '20px' }}
                />
              </Block>

              <Block className={[Styles.titleContainer]}>
                <Typography bigTitle color='#FFFFFF'>
                  The Witcher 3: Wild Hunt
                </Typography>
              </Block>

              <Block flex wrap alignCenter style={{ marginTop: '15px' }}>
                <Label textLabel='Fighting' background='#00c6fa' />

                <Label
                  textLabel='Action'
                  background='#ff2f54'
                  style={{ marginLeft: '15px' }}
                />
              </Block>

              <Block flex wrap alignCenter className={[Styles.ratingContainer]}>
                <Block flex alignCenter>
                  <img
                    className={Styles.starItem}
                    src='/static/img/big-yellow-star.png'
                  />

                  <img
                    className={Styles.starItem}
                    src='/static/img/big-yellow-star.png'
                  />

                  <img
                    className={Styles.starItem}
                    src='/static/img/big-yellow-star.png'
                  />

                  <img
                    className={Styles.starItem}
                    src='/static/img/big-yellow-star.png'
                  />

                  <img
                    className={Styles.starItem}
                    src='/static/img/big-half-star.png'
                  />
                </Block>

                <Typography
                  size={35}
                  bold
                  color='#FFFFFF'
                  sourceSansPro
                  style={{ marginLeft: '10px' }}>
                  4.5 . 300 Reviews
                </Typography>
              </Block>

              <Block className={[Styles.buttonPlay]}>
                <Button
                  leftIcon={logoNoText}
                  small
                  className={[Styles.customBtnPlay]}>
                  Play on Vectordash
                </Button>
              </Block>
            </Container>
          </Block>
        </Block>

        <Block className={[Styles.sectionSameCategory]}>
          <Container>
            <Typography size={26} bold>
              Games in the Same Category
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
      </Block>
    </Layout>
  );
};

export default GameDescription;
