import { Switch, Redirect } from 'react-router-dom';
// import PhoneBook from './components/PhoneBook';
import AppBar from './components/AppBar';
// import HomeView from './components/HomeView';
// import RegisterView from './components/RegisterView';
// import LoginView from './components/LoginView';
import Container from './components/Container';
import { connect } from 'react-redux';
import { authOperations } from './redux/auth';
import { useEffect, Suspense, lazy } from 'react';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() =>
  import('./components/HomeView' /* webpackChunkName: "HomeView" */),
);
const PhoneBook = lazy(() =>
  import('./components/PhoneBook' /* webpackChunkName: "PhoneBook" */),
);
const RegisterView = lazy(() =>
  import('./components/RegisterView' /* webpackChunkName: "RegisterView" */),
);
const LoginView = lazy(() =>
  import('./components/LoginView' /* webpackChunkName: "LoginView" */),
);

function App({ onGetCurrentUser }) {
  useEffect(() => {
    onGetCurrentUser();
  }, []);
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <PublicRoute exact path="/" component={HomeView} />
          <PublicRoute
           
            path="/register"
            restricted
            redirectTo="/phonebook"
            component={RegisterView}
          />
          <PublicRoute
           
            path="/login"
            restricted
            redirectTo="/phonebook"
            component={LoginView}
          />
          <PrivateRoute
            path="/phonebook"
            redirectTo="/"
            component={PhoneBook}
          />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>
  );
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
