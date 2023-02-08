import { Redirect, Route } from "react-router-dom";

export default function ProtectedRoute({
  component: Component,
  checkToken,
  ...props
}) {
  return (
    <Route>
      {() =>
        props.loggedIn ? <Component {...props} /> : <Redirect to="/sign-in" />
      }
    </Route>
  );
}
