import { useState } from 'react';
import { useRouter } from 'next/router';

import { Block, Typography, Button } from '../../../../components/Base';
import Layout from '../../../../layouts/Default';

import Styles from '../Payment.scss';
import Container from '../../../../components/Base/Container';
import ParsecCard from '../../../../components/ParsecCard';
import { parsecDownloads } from '../../../../constants/dummy';

const DownloadParsec = () => {
  const router = useRouter();

  return (
    <Layout navTransparent>
      <Block className={[Styles.paymentContent]}>
        <Container>
          <Container width={55}>
            <Block flex alignCenter justifyBetween className={[Styles.step]}>
              <img src='/static/img/check-active.png' />

              <Block className={[Styles.pembatas]}></Block>

              <img src='/static/img/2-c.png' />
            </Block>
          </Container>

          <Block flex justifyCenter alignCenter className={[Styles.title]}>
            <Typography textCenter bold size={32} style={{ fontWeight: '900' }}>
              DOWNLOAD PARSEC
            </Typography>

            <Typography
              textCenter
              bold
              size={32}
              color='#ff5733'
              style={{ fontWeight: '900', marginLeft: '10px' }}>
              TO PLAY
            </Typography>
          </Block>

          <Container width={50}>
            <Typography
              color='#e1e1e1'
              size={17}
              sourceSansPro
              textCenter
              height={25}
              style={{ marginTop: '13px' }}>
              Parsec is a FREE low-latency streaming client that you will use to
              stream your game from our servers to your device. Once you've
              downloaded Parsec, create a free account and then click "Got It!"
              below!
            </Typography>
          </Container>

          <Container width={80}>
            <Block flex wrap justifyBetween className={[Styles.listParsec]}>
              {parsecDownloads.map((data, idx) => (
                <Block key={idx} relative className={[Styles.parsecItem]}>
                  <ParsecCard data={data} />
                </Block>
              ))}
            </Block>
          </Container>

          <Container width={80}>
            <Block flex justifyEnd className={[Styles.buttonAction]}>
              <Block flex>
                <Button
                  small
                  className={[Styles.customButton]}
                  style={{ backgroundColor: '#1c1d20' }}
                  onClick={() => router.push('/dashboard/complete-profile/1')}>
                  Back
                </Button>

                <Button
                  small
                  className={[Styles.customButton]}
                  style={{ height: '47px', marginRight: 0 }}
                  onClick={() => router.push('/dashboard')}>
                  Go To Play
                </Button>
              </Block>
            </Block>
          </Container>
        </Container>
      </Block>
    </Layout>
  );
};

export default DownloadParsec;
