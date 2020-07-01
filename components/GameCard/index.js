import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useState } from 'react';

import { Block, Typography, Label, Button } from '../Base';

import Styles from './GameCard.scss';

const GameCard = (props) => {
  const { data, customCardContent, description, play, onPlayClicked } = props;
  const { name, image, labels } = data;

  const [showPlay, setShowPlay] = useState(false);

  return (
    <Block
      relative
      className={[Styles.gameCardWrapper]}
      onMouseOver={() => setShowPlay(true)}
      onMouseLeave={() => setShowPlay(false)}>
      {/* <img alt='Game Cover' src={image} /> */}

      {play && showPlay && (
        <Block className={[Styles.playButton]}>
          <Button
            small
            style={{ marginTop: '-20px' }}
            onClick={() => onPlayClicked()}>
            Play This Game
          </Button>
        </Block>
      )}

      <LazyLoadImage
        visibleByDefault
        alt='Game Cover'
        effect='blur'
        style={{ width: '100%' }}
        src={image} // use normal <img> attributes as props
      />

      <Block className={[Styles.cardContent, ...customCardContent]}>
        <Block flex wrap alignCenter>
          {labels.map((item, idx) => (
            <Block key={idx} className={[Styles.labelItem]}>
              <Label textLabel={item.label} background={item.background} />
            </Block>
          ))}
        </Block>

        <Typography color='#FFFFFF' bold elipsis style={{ marginTop: '15px' }}>
          {name}
        </Typography>

        {description && (
          <Typography
            color='#ffffff'
            size={13}
            height={20}
            sourceSansPro
            style={{ marginTop: '8px', letterSpacing: '0.5px' }}>
            Cras quis nulla commodo aliquam lectus sed blandit augue Cras .
          </Typography>
        )}
      </Block>
    </Block>
  );
};

GameCard.defaultProps = {
  data: {},
  customCardContent: [],
  description: true,
  play: false,
  onPlayClicked: () => {},
};

export default GameCard;
