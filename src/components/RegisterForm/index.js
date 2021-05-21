import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
const useStyles = createUseStyles({
  login: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  margins: {
    marginBottom: '20px',
  },
});
const RegisterForm = ({ onRegister, onLogin, loginToggle }) => {
  //   const register = loginToggle === 'true' ? false : true;
  const classes = useStyles();
  const [email, setEmail] = useState(''); //dodo@dodo.com
  const [name, setName] = useState(''); //Dododo
  const [password, setPassword] = useState(''); //12345678

  const handleChangeEmail = e => setEmail(e.target.value);
  const handleChangeName = e => setName(e.target.value);
  const handleChangePassword = e => setPassword(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    const payload = {
      email,
      password,
    };
    if (!(loginToggle === 'true')) {
      payload.name = name;
      onRegister(payload);
      console.log('log register', payload);
      return;
    }
    onLogin(payload);
    // console.log(onRegister);
    console.log('log Login', payload);
  };

  return (
    <div className={classes.login}>
      <form className={classes.form} onSubmit={handleSubmit} autoComplete="off">
        <h1>
          {!(loginToggle === 'true') ? 'Registration Page' : 'Login Page'}
        </h1>
        <label htmlFor="email">E-mail</label>
        <input
          className={classes.margins}
          id="email"
          type="email"
          name="email"
          value={email}
          placeholder="E-mail"
          onChange={handleChangeEmail}
        />
        {!(loginToggle === 'true') && (
          <>
            <label htmlFor="name">Name</label>
            <input
              className={classes.margins}
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={handleChangeName}
              placeholder="Name"
            />
          </>
        )}
        <label htmlFor="password">Enter password</label>
        <input
          className={classes.margins}
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChangePassword}
        />
        <button type="submit">
          {!(loginToggle === 'true') ? 'Register' : 'Login'}
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  onRegister: authOperations.register,
  onLogin: authOperations.logIn,
};
export default connect(null, mapDispatchToProps)(RegisterForm);
