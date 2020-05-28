import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const DefaultLayout = (props) => {
  const { children } = props;

  return (
    <div className='default-layout'>
      <Navigation />

      <div>{children}</div>

      <Footer />
    </div>
  );
};

export default DefaultLayout;
