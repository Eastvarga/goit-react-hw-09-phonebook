import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    width: '100vw',
    minWidth: '700px',
    height: '100vh',
    padding: '20px 20px',
  },
});

const Container = props => {
  const classes = useStyles();
  return <div className={classes.container}>{props.children}</div>;
};

export default Container;
