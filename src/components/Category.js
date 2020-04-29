import React from "react";
import { Link, Route } from "react-router-dom";

export default function Category({ match }) {
  //   let { path, url } = useRouteMatch();
  return (
    <div>
      <ul>
        <li>
          <Link to={`${match.url}/shoes`}>Shoes</Link>
        </li>
        <li>
          <Link to={`${match.url}/boots`}>Boots</Link>
        </li>
        <li>
          <Link to={`${match.url}/footwear`}>Footwear</Link>
        </li>
      </ul>

      <Route
        path={`${match.path}/:name`}
        render={({ match }) => (
          <div>
            {" "}
            <h3> {match.params.name} </h3>
          </div>
        )}
      />
      {/* <Switch>
        <Route exact path={`${path}/shoes`}>
          <h3>Shoes</h3>
        </Route>
        <Route exact path={`${path}/boots`}>
          <h3>Boots</h3>
        </Route>
        <Route exact path={`${path}/footwear`}>
          <h3>Footwear</h3>
        </Route>
      </Switch> */}
    </div>
  );
}
