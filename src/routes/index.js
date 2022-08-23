import React,{useEffect} from 'react';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';
import { Router, Switch, Route,Redirect, useParams } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';
import { createBrowserHistory as createHistory } from 'history';
import {restrictRoutes, publicRoutes, privateRoutes} from './RouterList';
import { RestrictRoute, PublicRoute, PrivateRoute } from './routes';
import FullPageLoader from '../components/FullPageLoader/FullPageLoader';
const Routing = () => {
  const history = createHistory();
  const store = configureStore(history);

  return (
    <Provider store={store}>
      <Router history={history}>
        <React.Suspense fallback={FullPageLoader(true)}>
          <Switch>
            {restrictRoutes.map((routes) => (
              <RestrictRoute {...routes} />
            ))}
            {publicRoutes.map((routes) => (
              <PublicRoute {...routes} />
            ))}
            {privateRoutes.map((routes) => (
              <PrivateRoute {...routes} />
            ))}
            <Route
              render={() => <Redirect to={{ pathname: AppRoutes.HOME }} />}
            />
          </Switch>
        </React.Suspense>
      </Router>
    </Provider>
  );
};

export default Routing;
