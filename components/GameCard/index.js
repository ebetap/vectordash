import Styles from './GameCard.scss';
import { Block, Typography, Label } from '../Base';

const GameCard = (props) => {
  const { data, customCardContent } = props;

  const { name, image, labels } = data;

  return (
    <Block relative className={[Styles.gameCardWrapper]}>
      <img alt='Game Cover' src={image} />

      <Block className={[Styles.cardContent, ...customCardContent]}>
        <Block flex wrap alignCenter>
          {labels.map((item) => (
            <Block className={[Styles.labelItem]}>
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
