import Styles from './CustomerReview.scss';
import { Block, Typography, Label } from '../Base';

const CustomerReview = (props) => {
  const { name, post, image } = props.data;

  return (
    <Block relative className={[Styles.wrapperReview]}>
      <img src={image} className={Styles.reviewAvatar} />

      <Block flex alignCenter justifyBetween>
        <Block>
          <Typography bold size={16}>
            {name}
          </Typography>

          <Typography
            sourceSansPro
            color='#e1e1e1'
            size={15}
            style={{ marginTop: '3px' }}>
            Posted : 25 May 2020 . 30 Reviews
          </Typography>
        </Block>

        <Label
          textLabel='Reccomended'
          textColor='#ff5733'
          background='#ffe3dd'
          style={{
            fontWeight: 'bold',
            paddingTop: '10px',
            paddingBottom: '10px',
          }}
        />
      </Block>

      <Block className={[Styles.postContent]}>
        <Typography bold color='#e1e1e1' size={15}>
          {post}
        </Typography>
      </Block>

      <Block className={[Styles.helpful]}>
        <Typography sourceSansPro color='#e1e1e1'>
          Was this review helpful ?
        </Typography>

        <Block flex alignCenter style={{ marginTop: '12px' }}>
          <Block flex alignCenter className={[Styles.labelIcon]}>
            <img src='/static/img/like.png' />

            <Typography sourceSansPro color='#FFFFFF'>
              Yes
            </Typography>
          </Block>

          <Block flex alignCenter className={[Styles.labelIcon]}>
            <img src='/static/img/dislike.png' />

            <Typography sourceSansPro color='#FFFFFF'>
              No
            </Typography>
          </Block>

          <Block flex alignCenter className={[Styles.labelIcon]}>
            <img src='/static/img/fun.png' />

            <Typography sourceSansPro color='#FFFFFF'>
              Funny
            </Typography>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

CustomerReview.defaultProps = {
  data: {},
};

export default CustomerReview;
