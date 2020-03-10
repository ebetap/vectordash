import { usePosition } from 'use-position';

export const withGeolocation = Component => {
  return function WrappedComponent(props) {
    const { latitude, longitude } = usePosition(true);

    localStorage.setItem('devicePosition', JSON.stringify(geoValue));

    return <Component {...props} devicePosition={{ latitude, longitude }} />;
  };
};
