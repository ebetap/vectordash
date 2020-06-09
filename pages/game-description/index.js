import { useState } from 'react';

import Layout from '../../layouts/Default';
import Block from '../../components/Base/Block';
import Typography from '../../components/Base/Typography';
import Container from '../../components/Base/Container';
import { Label, Button } from '../../components/Base';

import logoNoText from '../../static/img/logo-not-text.png';

import Styles from './GameDescription.scss';
import Newsletter from '../../components/Newsletter';
import GameCard from '../../components/GameCard';
import { dummyGames, customerReview } from '../../constants/dummy';
import CustomerReview from '../../components/CustomerReview';

const GameDescription = (props) => {
  const [activeTab, setActiveTab] = useState(2);

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

        <Block className={[Styles.sectionContent]}>
          <Container>
            <Typography bold size={30}>
              Description
            </Typography>

            <Block flex justifyBetween style={{ marginTop: '25px' }}>
              <Block className={[Styles.sectionLeft]}>
                <Block w100>
                  <Typography sourceSansPro paragraph>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics.
                  </Typography>

                  <Typography sourceSansPro paragraph>
                    When she reached the first hills of the Italic Mountains,
                    she had a last view back on the skyline of her hometown
                    Bookmarksgrove, the headline of Alphabet Village and the
                    subline of her own road, the Line Lane. Pityful a rethoric
                    question ran over her cheek.
                  </Typography>
                </Block>

                <Block>
                  <Typography size={23} bold>
                    About this Game
                  </Typography>

                  <Block
                    flex
                    justifyBetween
                    alignCenter
                    w100
                    className={[Styles.tabView]}>
                    <Block
                      onClick={() => setActiveTab(0)}
                      className={[
                        Styles.tabItem,
                        activeTab === 0 && Styles.tabActive,
                      ]}>
                      <Typography>How to play</Typography>
                    </Block>

                    <Block
                      onClick={() => setActiveTab(1)}
                      className={[
                        Styles.tabItem,
                        activeTab === 1 && Styles.tabActive,
                      ]}>
                      <Typography>Main Objective</Typography>
                    </Block>

                    <Block
                      onClick={() => setActiveTab(2)}
                      className={[
                        Styles.tabItem,
                        activeTab === 2 && Styles.tabActive,
                      ]}>
                      <Typography>Gameplay</Typography>
                    </Block>

                    <Block
                      onClick={() => setActiveTab(3)}
                      className={[
                        Styles.tabItem,
                        activeTab === 3 && Styles.tabActive,
                      ]}>
                      <Typography>System Requirement</Typography>
                    </Block>
                  </Block>
                </Block>
              </Block>

              <Block className={[Styles.sectionRight]}>
                <Block className={[Styles.rightInfo]}>
                  <Typography sourceSansPro color='#e1e1e1' size={17}>
                    Released On
                  </Typography>

                  <Typography
                    sourceSansPro
                    color='#e1e1e1'
                    size={17}
                    style={{ marginTop: '5px' }}>
                    1/12/16
                  </Typography>
                </Block>

                <Block className={[Styles.rightInfo]}>
                  <Typography sourceSansPro color='#e1e1e1' size={17}>
                    Publisher
                  </Typography>

                  <Typography
                    sourceSansPro
                    color='#e1e1e1'
                    size={17}
                    style={{ marginTop: '5px' }}>
                    Xion Studios
                  </Typography>
                </Block>

                <Block className={[Styles.rightInfo]}>
                  <Typography sourceSansPro color='#e1e1e1' size={17}>
                    Rating
                  </Typography>

                  <Typography
                    sourceSansPro
                    color='#e1e1e1'
                    size={17}
                    style={{ marginTop: '5px' }}>
                    ESRB
                  </Typography>
                </Block>

                <Block className={[Styles.rightInfo]}>
                  <Typography sourceSansPro color='#e1e1e1' size={17}>
                    Instant play Platforms
                  </Typography>

                  <Typography
                    sourceSansPro
                    color='#e1e1e1'
                    size={17}
                    style={{ marginTop: '5px' }}>
                    Android, Mac, Windows, Linux
                  </Typography>
                </Block>

                <Block className={[Styles.inputDevice]}>
                  <Typography sourceSansPro color='#e1e1e1' size={19}>
                    Input Device
                  </Typography>

                  <Block
                    flex
                    alignCenter
                    className={[Styles.ics]}
                    style={{ marginTop: '18px' }}>
                    <img src='/static/img/ic-keyboard.png' />

                    <Typography sourceSansPro color='#e1e1e1' size={17}>
                      Keyboard
                    </Typography>
                  </Block>

                  <Block flex alignCenter className={[Styles.ics]}>
                    <img src='/static/img/ic-game.png' />

                    <Typography sourceSansPro color='#e1e1e1' size={17}>
                      Gamepad
                    </Typography>
                  </Block>

                  <Block flex alignCenter className={[Styles.ics]}>
                    <img src='/static/img/ic-mobile.png' />

                    <Typography sourceSansPro color='#e1e1e1' size={17}>
                      Mobile Friendly
                    </Typography>
                  </Block>
                </Block>
              </Block>
            </Block>
          </Container>
        </Block>

        <Block className={[Styles.sectionReviews]}>
          <Container>
            <Block flex wrap alignCenter>
              <Typography color='#FFFFFF' bold size={23}>
                Customer Reviews
              </Typography>

              <Typography
                color='#ff5733'
                bold
                size={23}
                style={{ marginLeft: '10px' }}>
                (31 Reviews)
              </Typography>
            </Block>

            <Typography
              color='#e1e1e1'
              sourceSansPro
              style={{ marginTop: '5px' }}>
              Showing 8 from 31
            </Typography>

            <Block className={[Styles.wrapperListReview]}>
              {customerReview.map((item, idx) => (
                <Block key={idx} className={[Styles.wrapperReviewItem]}>
                  <CustomerReview data={item} />
                </Block>
              ))}
            </Block>

            <Button
              small
              style={{ fontWeight: 'bold', height: '54px', padding: '0 22px' }}>
              Browse all 31 reviews
            </Button>
          </Container>
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
