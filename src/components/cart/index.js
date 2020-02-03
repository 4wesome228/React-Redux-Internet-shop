import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getTotalCartCount, getTotalCartPrice } from "../../selectors";

const Cart = ({ cartItemsCount, totalPrice }) => {
  return (
    <div className="cart">
      <div className="dropdown">
        <Link
          to="/cart"
          id="dLabel"
          className="btn btn-inverse  btn-block btn-lg"
        >
          <i className="fa fa-shopping-cart pr-2 cart-icon" />
          <span className="cart">
            {cartItemsCount} item(s) - $ {totalPrice}
          </span>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartItemsCount: getTotalCartCount(state),
    totalPrice: getTotalCartPrice(state)
  };
};

export default connect(mapStateToProps, null)(Cart);
