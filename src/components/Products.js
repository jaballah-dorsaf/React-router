import React from "react";
import { Link, Route } from "react-router-dom";
import Product from "./Product";

export default function Products({ match }) {
  //   let { path, url } = useRouteMatch();
  const productsData = [
    {
      id: 1,
      name: "NIKE Liteforce Blue Sneakers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
      status: "Available"
    },
    {
      id: 2,
      name: "U.S. POLO ASSN. Slippers",
      description:
        "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
      status: "Available"
    },
    {
      id: 3,
      name: "ADIDAS Adispree Running Shoes",
      description:
        "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
      status: "Available"
    },
    {
      id: 4,
      name: "Lee Cooper Mid Sneakers",
      description:
        "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
      status: "Out of Stock"
    }
  ];
  return (
    <div className="product-page">
      <div className="product-list">
        <h1> Products</h1>
        <ul>
          {productsData.map((product, index) => (
            <li key={index}>
              <Link to={`${match.url}/${product.id}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="product-details">
        <Route
          path={`${match.url}/:productId`}
          render={props => <Product data={productsData} {...props} />}
        />
        <Route
          exact
          path={match.url}
          render={() => <div>Please select a product.</div>}
        />
      </div>
    </div>
  );
}
