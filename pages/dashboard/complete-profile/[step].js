import { useRouter } from 'next/router';

import { Block } from '../../../components/Base';
import Payment from './credit-card';
import DownloadParsec from './download-parsec';

const CompleteProfile = () => {
  const router = useRouter();
  const { step } = router.query;

  return (
    <Block>
      {Number(step) === 1 && <Payment />}
      {Number(step) === 2 && <DownloadParsec />}
    </Block>
  );
};

export default CompleteProfile;
