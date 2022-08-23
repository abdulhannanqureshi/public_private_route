import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';

export const RestrictRoute = (props) => {
    const { layout: Layout, component: Component, ...rest } = props;
    return (
        <Route
            {...rest}
            render={(routeRenderProps) => (
                <Layout>
                    <Component {...routeRenderProps} />
                </Layout>

            )}
        />
    );
};

export const PublicRoute = (props) => {
  const { layout: Layout, component: Component, ...rest } = props;
  const token = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(routeRenderProps) =>
        !token ? (
          <Layout>
            <Component {...routeRenderProps} />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: AppRoutes.HOME,
              state: { from: routeRenderProps.location },
            }}
          />
        )
      }
    />
  );
};

export const PrivateRoute = (props) => {
  const { layout: Layout, component: Component, ...rest } = props;
  const token = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(routeRenderProps) =>
        token ? (
          <Layout>
            <Component {...routeRenderProps} />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: AppRoutes.HOME,
              state: { from: routeRenderProps.location },
            }}
          />
        )
      }
    />
  );
};