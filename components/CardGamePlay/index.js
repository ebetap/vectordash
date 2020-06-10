import Styles from './CardGamePlay.scss';
import { Block, Typography } from '../Base';

const CardGamePlay = (props) => {
  const { image, caption } = props.data;

  return (
    <Block relative className={[Styles.wrapperGameplayCard]}>
      <img alt='GamePlay Card' src={image} className={[Styles.imageGameplay]} />
      <Typography
        bold
        color='#FFFFFF'
        size={25}
        className={[Styles.gameplayCaption]}>
        {caption}
      </Typography>
    </Block>
  );
};

CardGamePlay.defaultProps = {
  data: {},
};

export default CardGamePlay;
