import { useState } from 'react';
import { useRouter } from 'next/router';

import { Block, Typography, Button } from '../../components/Base';
import Layout from '../../layouts/Default';
import Container from '../../components/Base/Container';
import { Tabs, TabContent } from '../../components/Base/Tabs';

import Styles from './Dashboard.scss';
import { dummyGames } from '../../constants/dummy';
import GameCard from '../../components/GameCard';
import SignInParsec from '../../components/SigninParsec';
import GameLoading from '../../components/GameLoading';

const Dashboard = () => {
  const router = useRouter();

  const [tabsBottom] = useState([
    'All Games',
    'Action',
    'Racing',
    'Arcade',
    'Fighting',
    'Football',
    'RPG',
    'More Games',
  ]);

  const [showSignParsec, setShowSignParsec] = useState(false);
  const [showLoadingGame, setShowLoadingGame] = useState(false);

  return (
    <Layout navTransparent>
      <Block className={[Styles.sectionContent]}>
        <SignInParsec
          isOpen={showSignParsec}
          onBackdropPress={() => {}}
          onClose={() => setShowSignParsec(false)}
          onSubmitPress={() => {
            setShowSignParsec(false);
            setShowLoadingGame(true);
          }}
        />

        <GameLoading
          isOpen={showLoadingGame}
          onCancel={() => setShowLoadingGame(false)}
        />

        <Container>
          <Block
            flex
            wrap
            justifyBetween
            alignCenter
            className={[Styles.tryNow]}>
            <Typography bold size={16} color='#ffffff'>
              Try free for a day! Get started NOW for limited-time discount!
            </Typography>

            <Button
              className={[Styles.customBtnTry]}
              onClick={() =>
                router
                  .push('/dashboard/complete-profile/credit-card')
                  .then(() => window.scrollTo(0, 0))
              }>
              Try Now
            </Button>
          </Block>

          <Block flex alignCenter style={{ marginTop: '35px' }}>
            <Typography bold size={33} style={{ fontWeight: '900' }}>
              GAME
            </Typography>

            <Typography
              bold
              size={33}
              style={{ fontWeight: '900', marginLeft: '12px' }}
              color='#ff5733'>
              TO PLAY
            </Typography>
          </Block>

          <Block style={{ marginTop: '40px' }}>
            <Tabs
              small
              tabsHeadAlign='left'
              tabsHeadWidth={100}
              color='#50628b'
              tabsHeadCustomLabelWrapperClass={[Styles.customHeadMenu]}>
              {tabsBottom.map((tab, idx) => (
                <TabContent key={idx} label={tab}>
                  <Block flex wrap>
                    {dummyGames.map((data, idx) => (
                      <Block key={idx} className={[Styles.itemGames]}>
                        <GameCard
                          play
                          description={false}
                          data={data}
                          onPlayClicked={() => setShowSignParsec(true)}
                        />
                      </Block>
                    ))}
                  </Block>
                </TabContent>
              ))}
            </Tabs>

            <Block flex justifyCenter style={{ marginTop: '10px' }}>
              <Button small>More Games</Button>
            </Block>
          </Block>
        </Container>
      </Block>
    </Layout>
  );
};

export default Dashboard;
