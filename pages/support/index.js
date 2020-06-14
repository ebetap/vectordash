import Layout from '../../layouts/Default';
import { Block, Typography, Button } from '../../components/Base';

import Styles from './Support.scss';
import Container from '../../components/Base/Container';
import GeneralSupportCard from '../../components/GeneralSupportCard';
import { generalSupports } from '../../constants/dummy';

const Support = (props) => {
  return (
    <Layout>
      <Block relative className={[Styles.headerSupport]}>
        <img alt='Cover' src='/static/img/cover-support.png' />

        <Block absolute className={[Styles.contentHeader]}>
          <Typography color='#FFFFFF' bigTitle textCenter>
            HEY THERE,
          </Typography>

          <Typography
            bold
            size={60}
            color='#ff5733'
            style={{ fontWeight: '900' }}
            textCenter>
            HOW CAN WE HELP?
          </Typography>

          <Typography
            sourceSansPro
            color='#FFFFFF'
            textCenter
            size={22}
            style={{ marginTop: '12px' }}>
            Now you can have your own support center without paying monthly
            fees.
          </Typography>

          <Block w100 justifyCenter style={{ marginTop: '34px' }}>
            <Block relative>
              <input
                className={[Styles.searchBox]}
                placeholder='E.g How I reset my account ?'
              />

              <Button hoverEffect={false} small className={[Styles.buttonAsk]}>
                Search
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>

      <Block className={[Styles.sectionContentSupport]}>
        <Container>
          <Typography color='#e1e1e1' size={30} bold>
            General Support
          </Typography>

          <Block className={[Styles.wrapperCardGeneralSupport]}>
            {generalSupports.map((data, idx) => (
              <Block key={idx} w100 className={[Styles.generalCardIterm]}>
                <GeneralSupportCard data={data} />
              </Block>
            ))}
          </Block>
        </Container>
      </Block>
    </Layout>
  );
};

export default Support;
