import { Button, Input } from '../components/Base';

import Styles from './index.scss';

const Homepage = () => {
  const status = {
    name: 'a'
  };
  return (
    <div>
      <Button>Test</Button>
      <Input type='text' />
      {status?.name && <h1 className={Styles.hello}>Hello Tailwind</h1>}
    </div>
  );
};

export default Homepage;
