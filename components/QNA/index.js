import { useState } from 'react';
import { Block, Typography } from '../Base';
import Styles from './Qna.scss';

const QNAs = (props) => {
  const [showBody, setShowBody] = useState(false);

  return (
    <Block relative className={[Styles.wrapperQNA]}>
      <Block className={[Styles.qnaHead]}>
        <Typography bold size={23}>
          How do I use my mic when playing through Parsec?
        </Typography>
      </Block>
    </Block>
  );
};

export default QNAs;
