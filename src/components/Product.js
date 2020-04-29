import React from "react";

export default function Product({ match, data }) {
  console.log(match);
  let product = data.find(p => p.id === parseInt(match.params.productId));

  return (
    <div>
      {product ? (
        <div>
          <h3> {product.name} </h3>
          <p>{product.description}</p>
          <hr />
          <h4>{product.status}</h4>{" "}
        </div>
      ) : (
        <h2> Sorry. Product doesnt exist </h2>
      )}
    </div>
  );
}
