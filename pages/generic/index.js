import Layout from '../../layouts/Default';

import { Block, Typography, Button } from '../../components/Base';
import Container from '../../components/Base/Container';

import Styles from './Generic.scss';
import Newsletter from '../../components/Newsletter';
import { genericActivity } from '../../constants/dummy';
import ActivityCard from '../../components/ActivityCard';
import Articles from '../../components/Articles';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const GenericPage = (props) => {
  return (
    <Layout>
      <Block relative className={[Styles.sectionHeader]}>
        <LazyLoadImage
          effect='blur'
          className={[Styles.background]}
          src='/static/img/cover-generic.png'
        />

        <Block className={[Styles.contentHeader]}>
          <Block flex alignCenter justifyCenter>
            <Typography style={{ fontWeight: '900' }} size={60} color='#FFFFFF'>
              ANOTHER EXAMPLE HEADLINE
            </Typography>
          </Block>

          <Block alignCenter w100 style={{ textAlign: 'center' }}>
            <Container width={60}>
              <Typography
                height={35}
                sourceSansPro
                color='#FFFFFF'
                textCenter
                size={22}
                style={{ marginTop: '5px' }}>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Donec id elit non mi porta gravida at eget metus. Nullam id
                dolor id nibh ultricies vehicula ut id elit.
              </Typography>
            </Container>

            <Button
              small
              style={{
                marginTop: '27px',
                fontWeight: 'bold',
                fontSize: '14px!important',
              }}>
              Get Started
            </Button>
          </Block>
        </Block>
      </Block>

      <Block className={[Styles.sectionContent]}>
        <Container>
          <Block flex justifyBetween>
            <Block className={[Styles.sectionLeft]}>
              <Typography bold size={30} color='#e1e1e1'>
                Heading
              </Typography>

              <Typography
                sourceSansPro
                size={18}
                height={28}
                color='#e1e1e1'
                style={{ marginTop: '20px' }}>
                Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium
                dui. In malesuada enim in dolor euismod, id commodo mi
                consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi
                velit. Mauris turpis nisl, molestie ut ipsum et, suscipit
                vehicula odio. Vestibulum interdum vestibulum felis ac molestie.
                Praesent aliquet quam et libero dictum, vitae dignissim leo
                eleifend. In in turpis turpis. Quisque justo turpis, vestibulum
                non enim nec, tempor mollis mi. Sed vel tristique quam.
              </Typography>

              <Typography
                bold
                size={27}
                color='#e1e1e1'
                style={{ marginTop: '20px' }}>
                Heading 2
              </Typography>

              <Typography
                sourceSansPro
                size={18}
                height={28}
                color='#e1e1e1'
                style={{ marginTop: '20px' }}>
                Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium
                dui. In malesuada enim in dolor euismod, id commodo mi
                consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi
                velit. Mauris turpis nisl, molestie ut ipsum et, suscipit
                vehicula odio. Vestibulum interdum vestibulum felis ac molestie.
                Praesent aliquet quam et libero dictum, vitae dignissim leo
                eleifend. In in turpis turpis. Quisque justo turpis, vestibulum
                non enim nec, tempor mollis mi. Sed vel tristique quam. Praesent
                aliquet quam et libero dictum, vitae dignissim leo eleifend. In
                in turpis turpis. Quisque justo turpis, vestibulum non enim nec,
                tempor mollis mi. Sed vel tristique quam.
              </Typography>
            </Block>

            <Block className={[Styles.sectionRight]}>
              <Typography bold size={22} style={{ marginBottom: '20px' }}>
                Categories
              </Typography>

              <Block
                relative
                flex
                alignCenter
                className={[Styles.wrapperCategories]}>
                <Typography color='#e1e1e1' sourceSansPro size={19}>
                  Action
                </Typography>

                <Block className={[Styles.count]}>4</Block>
              </Block>

              <Block
                relative
                flex
                alignCenter
                className={[Styles.wrapperCategories]}>
                <Typography color='#e1e1e1' sourceSansPro size={19}>
                  Arcade
                </Typography>

                <Block className={[Styles.count]}>2</Block>
              </Block>

              <Block
                relative
                flex
                alignCenter
                className={[Styles.wrapperCategories]}>
                <Typography color='#e1e1e1' sourceSansPro size={19}>
                  Fighting
                </Typography>

                <Block className={[Styles.count]}>5</Block>
              </Block>

              <Block
                relative
                flex
                alignCenter
                className={[Styles.wrapperCategories]}>
                <Typography color='#e1e1e1' sourceSansPro size={19}>
                  Strategy
                </Typography>

                <Block className={[Styles.count]}>1</Block>
              </Block>

              <Block
                relative
                flex
                alignCenter
                className={[Styles.wrapperCategories]}>
                <Typography color='#e1e1e1' sourceSansPro size={19}>
                  Sport
                </Typography>

                <Block className={[Styles.count]}>8</Block>
              </Block>

              <Block
                relative
                flex
                alignCenter
                className={[Styles.wrapperCategories]}>
                <Typography color='#e1e1e1' sourceSansPro size={19}>
                  Adventure
                </Typography>

                <Block className={[Styles.count]}>2</Block>
              </Block>

              <Typography
                bold
                size={22}
                style={{ marginBottom: '25px', marginTop: '30px' }}>
                Forums
              </Typography>

              <Block
                relative
                flex
                alignCenter
                className={[Styles.wrapperCategories]}>
                <Typography color='#e1e1e1' sourceSansPro size={19}>
                  Dota 2
                </Typography>
              </Block>

              <Block
                relative
                flex
                alignCenter
                className={[Styles.wrapperCategories]}>
                <Typography color='#e1e1e1' sourceSansPro size={19}>
                  PUBG
                </Typography>
              </Block>

              <Block
                relative
                flex
                alignCenter
                className={[Styles.wrapperCategories]}>
                <Typography color='#e1e1e1' sourceSansPro size={19}>
                  Fortnite
                </Typography>
              </Block>

              <Block
                relative
                flex
                alignCenter
                className={[Styles.wrapperCategories]}>
                <Typography color='#e1e1e1' sourceSansPro size={19}>
                  League of Legends
                </Typography>
              </Block>

              <Typography
                bold
                size={22}
                style={{ marginBottom: '25px', marginTop: '30px' }}>
                Recent Topics
              </Typography>

              <Block
                relative
                flex
                alignCenter
                className={[Styles.wrapperCategories]}>
                <Typography color='#e1e1e1' sourceSansPro size={19}>
                  Action
                </Typography>
              </Block>

              <Block
                relative
                flex
                alignCenter
                className={[Styles.wrapperCategories]}>
                <Typography color='#e1e1e1' sourceSansPro size={19}>
                  Arcade
                </Typography>
              </Block>

              <Block
                relative
                flex
                alignCenter
                className={[Styles.wrapperCategories]}>
                <Typography color='#e1e1e1' sourceSansPro size={19}>
                  Fighting
                </Typography>
              </Block>

              <Block
                relative
                flex
                alignCenter
                className={[Styles.wrapperCategories]}>
                <Typography color='#e1e1e1' sourceSansPro size={19}>
                  Strategy
                </Typography>
              </Block>

              <Block
                relative
                flex
                alignCenter
                className={[Styles.wrapperCategories]}>
                <Typography color='#e1e1e1' sourceSansPro size={19}>
                  Sport
                </Typography>
              </Block>

              <Block
                relative
                flex
                alignCenter
                className={[Styles.wrapperCategories]}>
                <Typography color='#e1e1e1' sourceSansPro size={19}>
                  Adventure
                </Typography>
              </Block>
            </Block>
          </Block>
        </Container>
      </Block>

      <Block className={[Styles.sectionArticles]}>
        <Block flex justifyCenter alignCenter>
          <Typography size={30} color='#e1e1e1' extraBold>
            ANOTHER
          </Typography>

          <Typography
            size={30}
            color='#ff5733'
            extraBold
            style={{ marginLeft: '10px' }}>
            EXAMPLE HEADLINE
          </Typography>
        </Block>

        <Typography
          sourceSansPro
          size={18}
          color='#e1e1e1'
          textCenter
          style={{ marginTop: '10px', marginBottom: '50px' }}>
          Cras justo odio dapibus ac facilisis in egestas eget quam Donec id
          elit non mi porta gravida
        </Typography>

        <Container>
          <Block w100 className={[Styles.wrapperArticles]}>
            <Articles title='Heading 1' />
          </Block>

          <Block w100 className={[Styles.wrapperArticles]}>
            <Articles swap title='Heading 2' />
          </Block>

          <Block w100 className={[Styles.wrapperArticles]}>
            <Articles title='Heading 3' />
          </Block>

          <Block w100 className={[Styles.wrapperArticles]}>
            <Articles swap title='Heading 4' />
          </Block>
        </Container>
      </Block>

      <Block className={[Styles.sectionBlogPost]}>
        <Block flex justifyCenter alignCenter>
          <Typography size={30} color='#e1e1e1' extraBold>
            VIEW
          </Typography>

          <Typography
            size={30}
            color='#ff5733'
            extraBold
            style={{ marginLeft: '10px' }}>
            BLOG POST
          </Typography>
        </Block>

        <Typography
          sourceSansPro
          size={18}
          color='#e1e1e1'
          textCenter
          style={{ marginTop: '10px', marginBottom: '50px' }}>
          Cras justo odio dapibus ac facilisis in egestas eget quam Donec id
          elit non mi porta gravida
        </Typography>

        <Container>
          <Block flex wrap className={[Styles.wrapperList]}>
            {genericActivity.map((item, idx) => (
              <Block className={[Styles.listItem]}>
                <ActivityCard key={idx} data={item} />
              </Block>
            ))}
          </Block>
        </Container>
      </Block>

      <Block className={[Styles.sectionNewsletter]}>
        <Newsletter />
      </Block>
    </Layout>
  );
};

export default GenericPage;
