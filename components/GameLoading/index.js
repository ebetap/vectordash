import { useState } from 'react';

import { Block, Typography, Button } from '../Base';
import Spiner from '../Base/Spiner';

import { useWindowSize } from '../../utils/Helpers';

import Styles from './GameLoading.scss';

const GameLoading = (props) => {
  const { isOpen, onCancel } = props;
  const { width } = useWindowSize();

  const [stepper, setStepper] = useState([
    {
      name: 'Machine Found',
      complete: true,
    },
    {
      name: 'Request Sent',
      complete: true,
    },
    {
      name: 'Starting Windows',
      complete: false,
    },
    {
      name: 'Go to Parsec',
      complete: false,
    },
  ]);

  return (
    isOpen && (
      <Block relative className={[Styles.wrapperSignIn]}>
        <Block className={[Styles.backdrop]}></Block>

        <Block className={[Styles.contentSignin]}>
          <Block relative>
            <Typography
              color='#07070b'
              size={width <= 767 ? 26 : 32}
              style={{
                fontWeight: '900',
                maxWidth: width <= 767 ? '100%' : '80%',
              }}>
              LAUNCHING GAME LEAGUE OF LEGENDS
            </Typography>
          </Block>

          <Block
            flex
            justifyCenter
            style={{ marginTop: width <= 767 ? '20px' : '38px' }}>
            <Block>
              <Spiner />
            </Block>
          </Block>

          <Block flex justifyCenter style={{ marginTop: '20px' }}>
            <Typography sourceSansPro color='#444444'>
              Please wait it will take a moment ...
            </Typography>
          </Block>

          <Block flex wrap justifyBetween className={[Styles.stepIndicator]}>
            {stepper.map((step, idx) => (
              <Block key={idx} flex className={[Styles.indicatorItem]}>
                <img
                  src={
                    step.complete
                      ? '/static/img/check-active.png'
                      : '/static/img/check-inactive.png'
                  }
                />

                <Typography sourceSansPro color='#444444'>
                  {step.name}
                </Typography>
              </Block>
            ))}
          </Block>

          <Block flex justifyCenter className={[Styles.buttonCancelWrapper]}>
            <Button small onClick={() => onCancel()}>
              Cancel Launch
            </Button>
          </Block>
        </Block>
      </Block>
    )
  );
};

GameLoading.defaultProps = {
  isOpen: false,
  onCancel: () => {},
};

export default GameLoading;
