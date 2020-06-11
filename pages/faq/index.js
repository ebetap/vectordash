import Styles from './Faq.scss';
import DefaultLayout from '../../layouts/Default';
import { Block, Typography, Button, Label } from '../../components/Base';
import Newsletter from '../../components/Newsletter';
import { popularQuestion } from '../../constants/dummy';

const FAQ = (props) => {
  return (
    <DefaultLayout navTransparent>
      <Block relative className={[Styles.headerFAQ]}>
        <img alt='Cover' src='/static/img/cover-faq.png' />

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
                placeholder='Have a Question?'
              />

              <Button hoverEffect={false} small className={[Styles.buttonAsk]}>
                Ask Now
              </Button>
            </Block>
          </Block>

          <Block className={[Styles.popularQuestion]}>
            <Typography sourceSansPro size={17}>
              Popular Question
            </Typography>

            <Block flex wrap alignCenter style={{ marginTop: '20px' }}>
              {popularQuestion.map((text, idx) => (
                <Label
                  key={idx}
                  textLabel={text}
                  background='#505660'
                  style={{
                    padding: '13px 24px',
                    borderRadius: '40px',
                    marginRight: '15px',
                    cursor: 'pointer',
                    marginBottom: '18px',
                  }}
                />
              ))}
            </Block>
          </Block>
        </Block>
      </Block>

      <Block className={[Styles.sectionGames]}></Block>

      <Block className={[Styles.sectionNewsLetter]}>
        <Newsletter />
      </Block>
    </DefaultLayout>
  );
};

export default FAQ;
