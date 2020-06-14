import { useState } from 'react';

import { Block, Typography } from '../Base';

import Styles from './Qna.scss';

const QNAs = (props) => {
  const { data } = props;

  const [showBody, setShowBody] = useState(false);

  return (
    <Block relative className={[Styles.wrapperQNA]}>
      <Block
        className={[Styles.qnaHead]}
        onClick={() => setShowBody(!showBody)}>
        <Typography bold size={23}>
          {data}
          {showBody ? (
            <img
              className={[Styles.iconDropdown]}
              alt='Icon Dropdown'
              src='/static/img/dropdown-active.png'
            />
          ) : (
            <img
              className={[Styles.iconDropdown]}
              alt='Icon Dropdown'
              src='/static/img/dropdown-inactive.png'
            />
          )}
        </Typography>
      </Block>

      <Block className={[Styles.qnaBody, showBody && Styles.qnaBodyShow]}>
        <Block style={{ paddingBottom: '20px' }}>
          <Block flex justifyCenter style={{ marginTop: '10px' }}>
            <iframe
              height='315'
              src='https://www.youtube.com/embed/6rNFdogw7VU'
              frameborder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
              style={{ width: '70%' }}></iframe>
          </Block>

          <Block className={[Styles.sectionStep]}>
            <Typography sourceSansPro paragraph>
              Note #1: Make sure you have 2 DIFFERENT Discord accounts.
            </Typography>

            <Typography sourceSansPro paragraph>
              Note #2: Disconnect from the machine and then Connect again from
              Parsec.
            </Typography>
          </Block>

          <Block className={[Styles.helpful]}>
            <Typography sourceSansPro color='#e1e1e1'>
              Was this review helpful ?
            </Typography>

            <Block flex alignCenter style={{ marginTop: '12px' }}>
              <Block flex alignCenter className={[Styles.labelIcon]}>
                <img src='/static/img/like.png' />

                <Typography sourceSansPro color='#FFFFFF'>
                  Yes
                </Typography>
              </Block>

              <Block flex alignCenter className={[Styles.labelIcon]}>
                <img src='/static/img/dislike.png' />

                <Typography sourceSansPro color='#FFFFFF'>
                  No
                </Typography>
              </Block>

              <Block flex alignCenter className={[Styles.labelIcon]}>
                <img src='/static/img/fun.png' />

                <Typography sourceSansPro color='#FFFFFF'>
                  Funny
                </Typography>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

QNAs.defaultProps = {
  data: '',
};

export default QNAs;
