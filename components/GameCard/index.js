import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Block, Typography, Label } from '../Base';

import Styles from './GameCard.scss';

const GameCard = (props) => {
  const { data, customCardContent } = props;

  const { name, image, labels } = data;

  return (
    <Block relative className={[Styles.gameCardWrapper]}>
      {/* <img alt='Game Cover' src={image} /> */}

      <LazyLoadImage
        visibleByDefault
        alt='Game Cover'
        effect='blur'
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

        <Typography
          color='#ffffff'
          size={13}
          height={20}
          sourceSansPro
          style={{ marginTop: '8px', letterSpacing: '0.5px' }}>
          Cras quis nulla commodo aliquam lectus sed blandit augue Cras .
        </Typography>
      </Block>
    </Block>
  );
};

GameCard.defaultProps = {
  data: {},
  customCardContent: [],
};

export default GameCard;
