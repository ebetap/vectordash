import Styles from './ActivityCard.scss';
import { Block, Typography } from '../Base';

const ActivityCard = (props) => {
  const { title, subTitle, image } = props.data;

  return (
    <Block relative className={[Styles.wrapperActivityCard]}>
      <img src={image ? image : '/static/img/default-image.png'} />

      <Block className={[Styles.cardContent]}>
        <Typography color='#e1e1e1' size={20} bold>
          {title}
        </Typography>

        <Typography
          color='#e1e1e1'
          height={24}
          sourceSansPro
          style={{ marginTop: '8px' }}
          size={18}>
          {subTitle}
        </Typography>
      </Block>
    </Block>
  );
};

ActivityCard.defaultProps = {
  data: {},
};

export default ActivityCard;
