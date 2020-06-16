import { useState, useEffect } from 'react';

import { Block, Typography } from '../Base';

import Styles from './Checkbox.scss';

const Checkbox = (props) => {
  const { checked, onChange, label, textWidth } = props;

  const [isChecked, setIschecked] = useState(checked);

  useEffect(() => {
    setIschecked(checked);
  }, [checked]);

  return (
    <Block
      flex
      alignCenter
      relative
      className={[Styles.wrapperCheckbox]}
      onClick={() => {
        setIschecked(!isChecked);
        onChange(!isChecked);
      }}>
      <Block relative>
        {!isChecked ? (
          <img src='/static/img/check-inactive.png' />
        ) : (
          <img src='/static/img/check-active.png' />
        )}
      </Block>

      <Typography
        color='#07070b'
        sourceSansPro
        style={{
          paddingLeft: '12px',
          marginBottom: '6px',
          maxWidth: `${textWidth}%`,
        }}>
        {label}
      </Typography>
    </Block>
  );
};

Checkbox.defaultProps = {
  checked: false,
  onChange: () => {},
  label: 'Keep me Signed in',
  textWidth: 100,
};

export default Checkbox;
