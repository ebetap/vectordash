import Styles from './ParsecCard.scss';
import { Block, Button, Typography } from '../Base';

const ParsecCard = (props) => {
  const { data } = props;

  const { image, OS, description, url } = data;

  return (
    <Block relative className={[Styles.parsecCards]}>
      <img src={image} />

      <Block flex justifyCenter className={[Styles.downloadBtn]}>
        <Button
          small
          className={[Styles.customButton]}
          onClick={() => window.open(url, '_blank')}>
          Download for {OS}
        </Button>
      </Block>

      <Typography sourceSansPro textCenter size={17} color='#e1e1e1'>
        {description}
      </Typography>
    </Block>
  );
};

ParsecCard.defaultProps = {
  data: {},
};

export default ParsecCard;
