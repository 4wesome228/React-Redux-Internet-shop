import React from "react";
import { toPairs, pick, compose } from "ramda";
import { Link } from "react-router-dom";

import Cart from "../cart";

const Phone = ({ phone, addPhoneToCart }) => {
  const renderFields = () => {
    const columnField = compose(
      toPairs,
      pick(["cpu", "camera", "size", "weight", "display", "battery", "memory"])
    )(phone);

    return columnField.map(([key, value]) => (
      <div className="column" key={key}>
        <div className="ab-details-title">
          <p>{key}</p>
        </div>
        <div className="ab-details-info">{value}</div>
      </div>
    ));
  };

  const renderContent = phone => {
    return (
      <div className="thumbnail">
        <div className="row">
          <div className="col-md-6">
            <img className="img-thumbnail" src={phone.image} alt={phone.name} />
          </div>
          <div className="col-md-6">{renderFields()}</div>
        </div>
        <div className="caption-full">
          <h4 className="pull-right">{`$ ${phone.price}`}</h4>
          <h4>{phone.name}</h4>
          <p>{phone.description}</p>
        </div>
      </div>
    );
  };

  const renderSidebar = () => {
    return (
      <div>
        <p className="lead text-center pb-2">Quick shop</p>
        <Cart />
        <Link to="/" className="btn btn-info btn-block mt-4">
          Back to store
        </Link>
        <button
          type="button"
          className="btn btn-success btn-block"
          onClick={() => addPhoneToCart(phone.id)}
        >
          Add to cart
        </button>
      </div>
    );
  };

  return (
    <div className="view-container">
      <div className="container">
        <div className="row">
          <div className="col-md-9">{renderContent(phone)}</div>
          <div className="col-md-3">{renderSidebar()}</div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
