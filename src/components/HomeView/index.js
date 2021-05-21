import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  home: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '50px 0',
  },
});

const HomeView = () => {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <h1>Hello on my PhoneBook main page people 🤦 </h1>
    </div>
  );
};

export default HomeView;
