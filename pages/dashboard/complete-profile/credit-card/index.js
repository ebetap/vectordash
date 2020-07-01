import { useState } from 'react';
import { useRouter } from 'next/router';

import { Block, Typography, Button } from '../../../../components/Base';
import Layout from '../../../../layouts/Default';

import Styles from '../Payment.scss';
import Container from '../../../../components/Base/Container';

const Payment = () => {
  const router = useRouter();

  const [ccActive, setCCActive] = useState(0);
  const [agreement, setAgreement] = useState(false);

  return (
    <Layout navTransparent>
      <Block className={[Styles.paymentContent]}>
        <Container>
          <Container width={55}>
            <Block flex alignCenter justifyBetween className={[Styles.step]}>
              <img src='/static/img/1-c.png' />

              <Block className={[Styles.pembatas]}></Block>

              <img src='/static/img/2-n.png' />
            </Block>
          </Container>

          <Block className={[Styles.title]}>
            <Typography textCenter bold size={32} style={{ fontWeight: '900' }}>
              YOU WON'T BE CHARGED
            </Typography>

            <Typography
              textCenter
              bold
              size={32}
              color='#ff5733'
              style={{ fontWeight: '900', marginTop: '3px' }}>
              UNTIL YOUR FREE TRIAL IS OVER
            </Typography>

            <Typography
              color='#e1e1e1'
              size={19}
              sourceSansPro
              textCenter
              style={{ marginTop: '13px' }}>
              Set up your credit or debit card to activate the trial.
            </Typography>
          </Block>

          <Container width={60}>
            <Block flex justifyBetween className={[Styles.allCC]}>
              <Block
                className={[
                  Styles.ccVendorItem,
                  ccActive === 0 && Styles.ccVendorItemActive,
                ]}
                onClick={() => setCCActive(0)}>
                <img src='/static/img/visa.png' />
              </Block>

              <Block
                className={[
                  Styles.ccVendorItem,
                  ccActive === 1 && Styles.ccVendorItemActive,
                ]}
                onClick={() => setCCActive(1)}>
                <img src='/static/img/mastercard.svg' />
              </Block>

              <Block
                className={[
                  Styles.ccVendorItem,
                  ccActive === 2 && Styles.ccVendorItemActive,
                ]}
                onClick={() => setCCActive(2)}>
                <img src='/static/img/ae.png' />
              </Block>

              <Block
                className={[
                  Styles.ccVendorItem,
                  ccActive === 3 && Styles.ccVendorItemActive,
                ]}
                onClick={() => setCCActive(3)}>
                <img src='/static/img/discover.png' />
              </Block>
            </Block>
          </Container>

          <Container width={60}>
            <Block className={[Styles.wrapperInput]}>
              <label>Card Number *</label>

              <input type='text' placeholder='1234 - 1234 - 1234 - 1234' />
            </Block>

            <Block flex justifyBetween>
              <Block className={[Styles.half]}>
                <Block className={[Styles.wrapperInput]}>
                  <label>Expiration Date*</label>

                  <input type='text' placeholder='MM / YY' />
                </Block>
              </Block>
              <Block className={[Styles.half]}>
                <Block className={[Styles.wrapperInput]}>
                  <label>CVC *</label>

                  <input type='text' placeholder='654' />
                </Block>
              </Block>
            </Block>

            <Block className={[Styles.wrapperInput]}>
              <label>Billing Zip Code *</label>

              <input type='text' placeholder='90210' />
            </Block>
          </Container>

          <Container width={60}>
            <Block className={[Styles.bottomText]}>
              <Typography
                color='#ff5733'
                size={19}
                sourceSansPro
                style={{ fontWeight: 'bold', marginBottom: '3px' }}>
                Your Plan
              </Typography>

              <Typography color='#e1e1e1' size={16} sourceSansPro height={23}>
                Unlimited gaming in 4K at $14.95 a month after free trial.
              </Typography>
            </Block>

            <Block className={[Styles.bottomText]}>
              <Typography
                color='#ff5733'
                size={19}
                sourceSansPro
                style={{ fontWeight: 'bold', marginBottom: '3px' }}>
                Terms & Conditions
              </Typography>

              <Typography color='#e1e1e1' size={16} sourceSansPro height={23}>
                Vectordash will automatically continue your membership at the
                end of your free trial and charge the membership fee.
              </Typography>

              <Typography
                color='#e1e1e1'
                size={15}
                sourceSansPro
                style={{
                  fontWeight: 'bold',
                  marginTop: '3px',
                  cursor: 'pointer',
                }}>
                Read More
              </Typography>
            </Block>

            <Block flex className={[Styles.agreement]}>
              <img
                src={
                  agreement
                    ? '/static/img/check-active.png'
                    : '/static/img/check-inactive.png'
                }
                onClick={() => setAgreement(!agreement)}
              />

              <Typography
                color='#e1e1e1'
                size={16}
                sourceSansPro
                height={23}
                onClick={() => setAgreement(!agreement)}>
                By clicking the "Start Membership" button below, you agree to
                our Terms of Use, to our Privacy Policy, and that you are over
                13 (the person authorizing the payment must be at least 18). You
                may cancel at any time in your free trial and will not be
                charged.
              </Typography>
            </Block>

            <Block flex justifyEnd className={[Styles.buttonAction]}>
              <Block flex>
                <Button
                  small
                  className={[Styles.customButton]}
                  style={{ backgroundColor: '#1c1d20' }}
                  onClick={() => router.push('/dashboard')}>
                  Cancel
                </Button>

                <Button
                  small
                  className={[Styles.customButton]}
                  style={{ height: '47px' }}
                  onClick={() => router.push('/dashboard/complete-profile/2')}>
                  Continue
                </Button>
              </Block>
            </Block>
          </Container>
        </Container>
      </Block>
    </Layout>
  );
};

export default Payment;
