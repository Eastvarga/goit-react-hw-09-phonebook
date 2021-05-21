import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    marginRight: '6px',
  },
  name: {
    fontWeight: '700',
    marginRight: '12px',
  },
  button: {
    backgroundColor: 'aqua',
    padding: '6px 8px',
  },
});

const UserMenu = ({ avatar, name, onLogout }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img src={avatar} className={classes.avatar} alt="avatar" width="32" />
      <span className={classes.name}>Welcome, {name}</span>
      <button className={classes.button} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
