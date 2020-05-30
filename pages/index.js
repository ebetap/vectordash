import { useState } from 'react';
import DefaultLayout from '../layouts/Default';

import { Block, Typography, Button } from '../components/Base';
import { TabContent, Tabs } from '../components/Base/Tabs';
import Container from '../components/Base/Container';

import Styles from './index.scss';
import GameCard from '../components/GameCard';

const Homepage = () => {
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
  const [listGames, setListGames] = useState([
    {
      name: 'APEX Legends',
      image: '/static/img/apex.png',
      labels: [
        {
          label: 'RPG',
          background: '#ffb820',
        },
      ],
    },
    {
      name: 'Magic The Gathering Arena',
      image: '/static/img/magic.png',
      labels: [
        {
          label: 'Fighting',
          background: '#00c6fa',
        },
        {
          label: 'Action',
          background: '#ff2f54',
        },
      ],
    },
    {
      name: 'Rainbowsix',
      image: '/static/img/siege.png',
      labels: [
        {
          label: 'Action',
          background: '#804bff',
        },
      ],
    },
    {
      name: 'League of Legends',
      image: '/static/img/league.png',
      labels: [
        {
          label: 'Arcade',
          background: '#ffb820',
        },
      ],
    },
    {
      name: 'Overwatch',
      image: '/static/img/overwatch.png',
      labels: [
        {
          label: 'Fighting',
          background: '#00c6fa',
        },
        {
          label: 'Action',
          background: '#ff2f54',
        },
      ],
    },
    {
      name: 'PUBG',
      image: '/static/img/pubg.png',
      labels: [
        {
          label: 'Action',
          background: '#ff2f54',
        },
      ],
    },
    {
      name: 'Dota 2',
      image: '/static/img/dota2.png',
      labels: [
        {
          label: 'RPG',
          background: '#ffb820',
        },
      ],
    },
    {
      name: 'Magic The Gathering Arena',
      image: '/static/img/magic.png',
      labels: [
        {
          label: 'Fighting',
          background: '#00c6fa',
        },
        {
          label: 'Action',
          background: '#ff2f54',
        },
      ],
    },
    {
      name: 'APEX Legends',
      image: '/static/img/apex.png',
      labels: [
        {
          label: 'RPG',
          background: '#ffb820',
        },
      ],
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
            <Typography sourceSansPro textCenter size={22}>
              Don't own a gaming PC? Vectordash lets you play games like Call of
              Duty, GTA V, Magic
            </Typography>

            <Block flex justifyCenter alignCenter style={{ marginTop: '5px' }}>
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

        <Block className={[Styles.gamePreview]}>
          <Block className={[Styles.inner]}>
            <iframe
              className={Styles.gameVideo}
              width='760'
              height='480'
              src='https://www.youtube-nocookie.com/embed/c0i88t0Kacs'
              frameborder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen></iframe>
          </Block>
        </Block>
      </Block>

      <Block className={[Styles.sectionEnjoy]}>
        <Container>
          <Block flex alignCenter justifyCenter>
            <Typography h1 color='#000000'>
              ENJOY
            </Typography>

            <Typography h1 color='#804bff' style={{ marginLeft: '10px' }}>
              OUR BEST FEATURES
            </Typography>
          </Block>

          <Typography h1 color='#000000'>
            WHEN PLAYING THE GAME
          </Typography>

          <Container width={45} style={{ marginTop: '15px' }}>
            <Typography sourceSansPro textCenter size={20} height={30}>
              Curabitur lobortis id lorem id bibendum Ut id consectetur magna
              Quisque volutpat augue enim
            </Typography>
          </Container>

          <Block className={[Styles.tabsMenu]} w100>
            <Tabs>
              {tabs.map((tab) => (
                <TabContent label={tab}>
                  <Block relative>
                    <img
                      src='/static/img/mockup.png'
                      className={Styles.mockup}
                    />
                  </Block>
                  <Block relative style={{ maxWidth: '45%' }}>
                    <Typography h1 color='#000000' textLeft>
                      The gaming rig you
                    </Typography>

                    <Typography h1 color='#000000' textLeft>
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

                    <Button outline small style={{ marginTop: '50px' }}>
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
              <Typography h1 color='#000000' textLeft>
                PLAY THE LATEST GAMES
              </Typography>

              <Block flex>
                <Typography h1 color='#000000' textLeft>
                  AT 60 FPS
                </Typography>

                <Typography
                  h1
                  color='#804bff'
                  style={{ marginLeft: '10px' }}
                  textLeft>
                  WITHOUT A
                </Typography>
              </Block>

              <Typography h1 color='#804bff' textLeft>
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
            {tabsBottom.map((tabB) => (
              <TabContent label={tabB}>
                <Block w100 flex wrap justifyBetween>
                  {listGames.map((data) => (
                    <Block relative className={[Styles.cardWrapperSizing]}>
                      <GameCard data={data} />
                    </Block>
                  ))}
                </Block>
              </TabContent>
            ))}
          </Tabs>
        </Container>
      </Block>
    </DefaultLayout>
  );
};

export default Homepage;
