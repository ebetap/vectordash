import Styles from './CardTeam.scss';
import { Block, Typography } from '../Base';

const CardTeam = (props) => {
  const { name, image, jobTitle } = props.data;
  return (
    <Block relative className={[Styles.cardTeamWrapper]}>
      <img src={image} alt='Avatar Team' />
      <Typography bold size={18} color='#e1e1e1' style={{ marginTop: '15px' }}>
        {name}
      </Typography>
      <Typography
        sourceSansPro
        color='#e1e1e1'
        size={17}
        style={{ marginTop: '5px' }}>
        {jobTitle}
      </Typography>
    </Block>
  );
};

CardTeam.defaultProps = {
  data: {},
};

export default CardTeam;
