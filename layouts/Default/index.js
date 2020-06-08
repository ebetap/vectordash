import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const DefaultLayout = (props) => {
  const { navTransparent, children } = props;

  return (
    <div className='default-layout'>
      <Navigation navTransparent={navTransparent} />

      <div>{children}</div>

      <Footer />
    </div>
  );
};

DefaultLayout.defaultProps = {
  navTransparent: false,
};

export default DefaultLayout;
