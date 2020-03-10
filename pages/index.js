import { Button, Input } from '../components/Base';

const Homepage = () => {
  const status = {
    name: 'a'
  };
  return (
    <div>
      <Button>Test</Button>
      <Input type='text' />
      {status?.name && (
        <h1 className='p-4 bg-purple-300 text-center text-lg'>
          Hello Tailwind
        </h1>
      )}
    </div>
  );
};

export default Homepage;
