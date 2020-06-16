import { useState } from 'react';
import { useRouter } from 'next/router';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import DefaultLayout from '../layouts/Default';
import { Block, Typography, Button } from '../components/Base';
import { TabContent, Tabs } from '../components/Base/Tabs';
import Container from '../components/Base/Container';

import Styles from './index.scss';
import GameCard from '../components/GameCard';
import Stars from '../components/Stars';
import { useWindowSize } from '../utils/Helpers';
import { dummyGames } from '../constants/dummy';

const Homepage = () => {
  const router = useRouter();
  const [tabs] = useState([
    'Play the games you want',
    'The most advanced cloud gaming solution',
    'More than just cloud gaming',
  ]);
  const [tabsBottom] = useState([
    'All Games',
    'Action',
    'Racing',
    'Arcade',
    'Fighting',
    'Football',
    'RPG',
  ]);
  const [activeTab, setActiveTab] = useState('');
  const size = useWindowSize();
  const [listGames, setListGames] = useState(dummyGames);

  const [testimoni] = useState([
    {
      name: 'Christian Elliott',
      image: '/static/img/avatar1.png',
    },
    {
      name: 'Julie Obrien',
      image: '/static/img/avatar2.png',
    },
    {
      name: 'Barbara Martinez',
      image: '/static/img/avatar3.png',
    },
    {
      name: 'Nicole Ross',
      image: '/static/img/avatar4.png',
    },
    {
      name: 'Beta Smith',
      image: '/static/img/avatar5.png',
    },
  ]);

  return (
    <DefaultLayout>
      <Block relative className={[Styles.sectionHeader]}>
        <img className={Styles.pattern} src='/static/img/pattern.png' />
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
            <Typography sourceSansPro textCenter size={22} color='#FFFFFF'>
              Don't own a gaming PC? Vectordash lets you play games like Call of
              Duty, GTA V, Magic
            </Typography>

            <Block
              flex
              wrap
              justifyCenter
              alignCenter
              className={[Styles.wrapperSubtitle]}
              style={{ marginTop: '5px' }}>
              <Typography
                sourceSansPro
                textCenter
                size={22}
                color='#FFFFFF'
                className={[Styles.subTitle1]}>
                Arena, and more on
              </Typography>

              <Typography
                sourceSansPro
                textCenter
                size={20}
                bold
                color='#ff5733'
                style={{ marginLeft: '5px' }}>
                Android, Mac, and Windows.
              </Typography>
            </Block>

            <Block flex justifyCenter w100 className={[Styles.ctaButton]}>
              <Button>Get Started</Button>
            </Block>
          </Block>
        </Container>

        <Block className={[Styles.gamePreview]}>
          <Block className={[Styles.inner]}>
            <iframe
              className={Styles.gameVideo}
              width={size.width <= 767 ? size.width - 50 : '760'}
              height={size.width <= 767 ? '270' : '480'}
              src='https://www.youtube-nocookie.com/embed/c0i88t0Kacs'
              frameborder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen></iframe>
          </Block>
        </Block>
      </Block>

      <Block className={[Styles.sectionEnjoy]}>
        <Container width={size.width <= 767 ? 100 : 85}>
          <Block flex wrap alignCenter justifyCenter>
            <Typography h1 color='#FFFFFF'>
              ENJOY
            </Typography>

            <Typography h1 color='#ff5733' style={{ marginLeft: '10px' }}>
              OUR BEST FEATURES
            </Typography>
          </Block>

          <Typography h1 color='#FFFFFF'>
            WHEN PLAYING THE GAME
          </Typography>

          <Container
            width={size.width <= 767 ? 90 : 45}
            style={{ marginTop: '15px' }}>
            <Typography
              sourceSansPro
              textCenter
              size={20}
              height={30}
              color='#FFFFFF'>
              Curabitur lobortis id lorem id bibendum Ut id consectetur magna
              Quisque volutpat augue enim
            </Typography>
          </Container>

          <Block className={[Styles.tabsMenu]} w100>
            <Tabs>
              {tabs.map((tab) => (
                <TabContent label={tab}>
                  <Block relative>
                    {/* <img
                      src={`/static/img/${
                        size.width <= 767 ? 'mockup-mobile' : 'mockup'
                      }.png`}
                      className={Styles.mockup}
                    /> */}

                    <LazyLoadImage
                      visibleByDefault
                      alt='Cover'
                      effect='blur'
                      src={`/static/img/${
                        size.width <= 767 ? 'mockup-mobile' : 'mockup'
                      }.png`}
                      className={Styles.mockup}
                    />
                  </Block>
                  <Block
                    relative
                    className={[Styles.gamingRig]}
                    style={{ maxWidth: '45%' }}>
                    <Typography h1 color='#FFFFFF' textLeft>
                      The gaming rig you
                    </Typography>

                    <Typography h1 color='#FFFFFF' textLeft>
                      deserve
                    </Typography>

                    <Typography
                      size={20}
                      height={15}
                      sourceSansPro
                      style={{ marginTop: '25px' }}>
                      Shadow is a full-featured cloud PC with dedicated storage
                    </Typography>

                    <Typography
                      size={20}
                      height={15}
                      sourceSansPro
                      style={{ marginTop: '15px' }}>
                      that you can access from any device at any
                    </Typography>

                    <Typography
                      size={20}
                      height={15}
                      sourceSansPro
                      style={{ marginTop: '15px' }}>
                      time. Bring your own games with progress and
                    </Typography>

                    <Typography
                      size={20}
                      height={15}
                      sourceSansPro
                      style={{ marginTop: '15px' }}>
                      achievements from Steam, Epic Games Store, GOG,
                    </Typography>

                    <Typography
                      size={20}
                      height={15}
                      sourceSansPro
                      style={{ marginTop: '15px' }}>
                      Origin, Uplay, Battle.net, etc. or install new ones. Our
                    </Typography>

                    <Typography
                      size={20}
                      height={15}
                      sourceSansPro
                      style={{ marginTop: '15px' }}>
                      datacenters are always up to date, so you can focus
                    </Typography>

                    <Typography
                      size={20}
                      height={15}
                      sourceSansPro
                      style={{ marginTop: '15px' }}>
                      on gaming.
                    </Typography>

                    <Button
                      outline
                      small
                      style={{ marginTop: '50px' }}
                      transparent>
                      Pre-Order Now
                    </Button>
                  </Block>
                </TabContent>
              ))}
            </Tabs>
          </Block>
        </Container>
      </Block>

      <Block className={[Styles.sectionPrelist]}>
        <Container>
          <Block flex>
            <Block>
              <Typography h1 color='#FFFFFF' textLeft>
                PLAY THE LATEST GAMES
              </Typography>

              <Block flex>
                <Typography h1 color='#FFFFFF' textLeft>
                  AT 60 FPS
                </Typography>

                <Typography
                  h1
                  color='#ff5733'
                  style={{ marginLeft: '10px' }}
                  textLeft>
                  WITHOUT A
                </Typography>
              </Block>

              <Typography h1 color='#ff5733' textLeft>
                GRAPHICS CARD
              </Typography>
            </Block>

            <Block style={{ marginLeft: '50px' }}>
              <Typography
                size={20}
                height={15}
                sourceSansPro
                style={{ marginTop: '15px' }}>
                Don't buy the hardware, just buy the
              </Typography>

              <Typography
                size={20}
                height={15}
                sourceSansPro
                style={{ marginTop: '15px' }}>
                games. Bring your own gaming accounts to
              </Typography>

              <Typography
                size={20}
                height={15}
                sourceSansPro
                style={{ marginTop: '15px' }}>
                Vectordash and launch a game without a
              </Typography>

              <Typography
                size={20}
                height={15}
                sourceSansPro
                style={{ marginTop: '15px' }}>
                graphics card!
              </Typography>
            </Block>
          </Block>
        </Container>
      </Block>

      <Block className={[Styles.sectionGameList]}>
        <Container>
          <Tabs
            small
            tabsHeadAlign='left'
            tabsHeadWidth={100}
            color='#50628b'
            tabsHeadCustomContainerClass={[Styles.containerTab]}
            tabsHeadCustomLabelWrapperClass={[Styles.customWrapperTab]}
            tabsHeadCustomLabelClass={[Styles.customLabel]}
            tabsHeadLabelActiveClass={Styles.customLabelActive}>
            {tabsBottom.map((tabB, idx) => (
              <TabContent key={idx} label={tabB}>
                <Block w100 flex wrap justifyBetween>
                  {listGames.map((data) => (
                    <Block
                      relative
                      className={[Styles.cardWrapperSizing]}
                      onClick={() =>
                        router
                          .push('/game-description')
                          .then(() => window.scrollTo(0, 0))
                      }>
                      <GameCard data={data} />
                    </Block>
                  ))}
                </Block>
              </TabContent>
            ))}
          </Tabs>

          <Block flex justifyCenter w-100>
            <Button small>More Games</Button>
          </Block>
        </Container>
      </Block>

      <Block className={[Styles.sectionGetStarted]}>
        <Block flex justifyCenter>
          <Block flex>
            <Typography h1 color='#FFFFFF' textLeft>
              VECTORDASH
            </Typography>

            <Typography
              h1
              color='#ff5733'
              style={{ marginLeft: '10px' }}
              textLeft>
              IS NOW
            </Typography>
          </Block>
        </Block>

        <Block flex justifyCenter>
          <Typography
            h1
            color='#ff5733'
            style={{ marginLeft: '10px' }}
            textLeft={size.width <= 767 ? false : true}>
            AVAILABLE NATIONWIDE
          </Typography>
        </Block>

        <Container
          width={size.width <= 767 ? 95 : 45}
          style={{ marginTop: '8px' }}>
          <Typography
            sourceSansPro
            textCenter
            size={20}
            height={30}
            color='#FFFFFF'>
            Join 10,000 + Gamers who trust with vectordash
          </Typography>
        </Container>

        <Block flex justifyCenter w-100 style={{ marginTop: '50px' }}>
          <Button small>Get Started</Button>
        </Block>
      </Block>

      <Block relative className={[Styles.sectionMap]}>
        <img
          className={Styles.maps}
          alt='Map Wide'
          src='/static/img/maps.svg'
        />

        <Block absolute className={[Styles.moscow]}>
          <img alt='Tooltips' src='/static/img/tooltips-group.svg' />
          <Block relative w100 style={{ height: '100%' }}>
            <Block absolute style={{ top: '-210px', left: '111px' }}>
              <Typography bold textCenter>
                Moscow, Russia
              </Typography>
              <Typography size={14} style={{ marginTop: '3px' }} textCenter>
                400 Members
              </Typography>
            </Block>
          </Block>
        </Block>
      </Block>

      <Block className={[Styles.sectionSocialProof]}>
        <Block flex justifyCenter w100>
          <Typography
            h1
            color='#FFFFFF'
            textLeft={size.width <= 767 ? false : true}>
            THE SOCIAL PROOF
          </Typography>
        </Block>

        <Container
          width={size.width <= 767 ? 95 : 45}
          style={{ marginTop: '13px' }}>
          <Typography
            sourceSansPro
            textCenter
            size={20}
            height={30}
            color='#FFFFFF'>
            Join 10,000 + Gamers who trust with vectordash
          </Typography>
        </Container>

        <Block flex w100 className={[Styles.testiRow]}>
          {testimoni.map((item, idx) => (
            <Block key={idx} relative className={[Styles.testiItem]}>
              <img
                src='/static/img/petik.png'
                alt='Icon Petik'
                className={Styles.iconPetik}
              />

              <Typography sourceSansPro color='#000000'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut
                pretium pretium tempor Ut eget imperdiet neque. In volutpat ante
                semper diam molestiei
              </Typography>

              <Block flex alignCenter style={{ marginTop: '15px' }}>
                <img
                  alt='Avatar'
                  className={Styles.avatarIconTesti}
                  src={item.image}
                />

                <Block style={{ marginLeft: '8px' }}>
                  <Typography bold color='#000000'>
                    {item.name}
                  </Typography>

                  <Stars count={4} renderRest />
                </Block>
              </Block>
            </Block>
          ))}
        </Block>

        <Block flex w100 className={[Styles.testiRow]}>
          {testimoni.map((item, idx) => (
            <Block key={idx} relative className={[Styles.testiItem]}>
              <img
                src='/static/img/petik.png'
                alt='Icon Petik'
                className={Styles.iconPetik}
              />

              <Typography sourceSansPro color='#000000'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut
                pretium pretium tempor Ut eget imperdiet neque. In volutpat ante
                semper diam molestiei
              </Typography>

              <Block flex alignCenter style={{ marginTop: '15px' }}>
                <img
                  alt='Avatar'
                  className={Styles.avatarIconTesti}
                  src={item.image}
                />

                <Block style={{ marginLeft: '8px' }}>
                  <Typography bold color='#000000'>
                    {item.name}
                  </Typography>

                  <Stars count={4} renderRest />
                </Block>
              </Block>
            </Block>
          ))}
        </Block>
      </Block>

      <Block relative className={[Styles.sectionUnlimited]}>
        <img
          alt='Laptop Image'
          src='/static/img/laptop.png'
          className={Styles.laptopImage}
        />

        <img
          alt='Pattern'
          className={Styles.patternBottom}
          src='/static/img/pattern.png'
        />

        <Block absolute className={[Styles.rightUnlimitedContent]}>
          <Typography h1 color='#FFFFFF' textLeft>
            UNLIMITED PC
          </Typography>

          <Typography h1 color='#FFFFFF' textLeft>
            GAMING IN 4K. JUST
          </Typography>

          <Typography h1 color='#FFFFFF' textLeft>
            $19.95 A MONTH.
          </Typography>

          <Block style={{ marginTop: '20px', marginBottom: '50px' }}>
            <Typography
              sourceSansPro
              textCenter
              size={20}
              height={30}
              color='#FFFFFF'
              textLeft>
              Try Vectordash free for 24 hours, and if you
            </Typography>

            <Typography
              sourceSansPro
              textCenter
              size={20}
              height={30}
              color='#FFFFFF'
              textLeft>
              decide it isn't for you - no problem. There's
            </Typography>

            <Typography
              sourceSansPro
              textCenter
              size={20}
              height={30}
              color='#FFFFFF'
              textLeft>
              no commitment. Cancel online anytime.
            </Typography>
          </Block>

          <Button small>Get Started</Button>
        </Block>
      </Block>
    </DefaultLayout>
  );
};

export default Homepage;
