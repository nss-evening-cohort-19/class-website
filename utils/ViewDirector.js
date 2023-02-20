import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';

const ViewDirectorBasedOnUserAuthStatus = ({ component: Component, pageProps }) => (
  <>
    <NavBar />
    <div className="container" style={{ marginTop: '80px' }}>
      <Component {...pageProps} />
    </div>
  </>
);

export default ViewDirectorBasedOnUserAuthStatus;

ViewDirectorBasedOnUserAuthStatus.propTypes = {
  component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
