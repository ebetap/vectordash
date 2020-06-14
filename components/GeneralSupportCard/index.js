import Styles from './GeneralSupport.scss';
import { Block, Typography, Button } from '../Base';

const GeneralSupportCard = (props) => {
  const { title, subTitle, icon } = props.data;

  return (
    <Block className={[Styles.wrapperGeneralSupport]}>
      <Block flex>
        <Block className={[Styles.icons]}>
          <img src={icon} />
        </Block>

        <Block relative>
          <Typography color='#e1e1e1' bold size={23}>
            {title}
          </Typography>

          <Typography
            sourceSansPro
            color='#e1e1e1'
            height={28}
            size={17}
            style={{ marginTop: '11px', marginBottom: '8px' }}>
            {subTitle}
          </Typography>

          <Button
            small
            className={[Styles.customButton]}
            rightIcon='/static/img/arrow-right.png'>
            View Detail
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

GeneralSupportCard.defaultProps = {
  data: {},
};

export default GeneralSupportCard;
