import React from "react";
import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { productContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [, , , logInUser] = useContext(productContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        logInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/logIn",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
