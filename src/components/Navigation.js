import { NavLink } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import { authSelectors } from '../redux/auth';

const useStyles = createUseStyles({
  link: {
    color: 'black',
    textDecoration: 'none',
    marginRight: '20px',
    padding: '4px 6px',
  },
  activeLink: {
    color: 'blue',
    border: '1px solid blue',
    borderRadius: '4px',
  },
});

const Navigation = ({ isAuthanticated }) => {
  const classes = useStyles();
  return (
    <div>
      <NavLink
        to="/"
        exact
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        Main page
      </NavLink>
      {isAuthanticated && (
        <NavLink
          to="/phonebook"
          exact
          className={classes.link}
          activeClassName={classes.activeLink}
        >
          Phonebook
        </NavLink>
      )}
    </div>
  );
};
const matStateToProps = state => ({
  isAuthanticated: authSelectors.getIsAuthenticated(state),
});
export default connect(matStateToProps)(Navigation);
