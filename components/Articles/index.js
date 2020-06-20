import Styles from './Articles.scss';

import { Block, Typography, Button } from '../Base';

const Articles = (props) => {
  const { swap, title } = props;

  return (
    <Block
      relative
      flex
      justifyBetween
      relative
      className={[swap && Styles.swap]}>
      <Block className={[Styles.ArticleItem]}>
        <img src='/static/img/default-image.png' />
      </Block>

      <Block className={[Styles.ArticleItem]}>
        <Typography color='#e1e1e1' size={30} bold>
          {title}
        </Typography>

        <Typography
          sourceSansPro
          size={18}
          height={28}
          color='#e1e1e1'
          style={{ marginTop: '20px' }}>
          Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In
          malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur
          at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl,
          molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum
          vestibulum felis ac molestie. Praesent aliquet quam et libero dictum,
          vitae dignissim leo eleifend. In in turpis turpis. Quisque justo
          turpis, vestibulum non enim nec, tempor mollis mi. Sed vel tristique
          quam.
        </Typography>

        <Button small style={{ marginTop: '30px' }}>
          Learn More
        </Button>
      </Block>
    </Block>
  );
};

Articles.defaultProps = {
  swap: false,
  title: 'Title',
};

export default Articles;
