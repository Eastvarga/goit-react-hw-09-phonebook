import { connect } from 'react-redux';
import { authSelectors } from '../redux/auth';
import { createUseStyles } from 'react-jss';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';

const useStyles = createUseStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 20px',
    borderBottom: '1px solid #2A3638',
  },
});

const AppBar = ({ isAuthenticated }) => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});
export default connect(mapStateToProps)(AppBar);
