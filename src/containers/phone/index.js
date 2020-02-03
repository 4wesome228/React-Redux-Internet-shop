import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPhoneById, addPhoneToCart } from "../../actions";
import { toPairs, pick, compose } from "ramda";
import { Link } from "react-router-dom";
import Cart from "../../components/cart";

class Phone extends Component {
  componentDidMount() {
    this.props.fetchPhoneById(this.props.match.params.id);
  }

  renderFields() {
    const { phone } = this.props;
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
  }

  renderContent(phone) {
    return (
      <div className="thumbnail">
        <div className="row">
          <div className="col-md-6">
            <img className="img-thumbnail" src={phone.image} alt={phone.name} />
          </div>
          <div className="col-md-6">{this.renderFields()}</div>
        </div>
        <div className="caption-full">
          <h4 className="pull-right">${phone.price}</h4>
          <h4>{phone.name}</h4>
          <p>{phone.description}</p>
        </div>
      </div>
    );
  }

  renderSidebar() {
    const { phone, addPhoneToCart } = this.props;

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
  }

  render() {
    const { phone } = this.props;

    return (
      <div className="view-container">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              {this.props.phone && this.renderContent(phone)}
            </div>
            <div className="col-md-3">
              {this.props.phone && this.renderSidebar()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    phone: state.phonePage
  };
};

const mapDispatchToProps = {
  fetchPhoneById,
  addPhoneToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Phone);
