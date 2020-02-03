import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPhones, loadMorePhones, addPhoneToCart } from "../../actions";
import { getPhones } from "../../selectors";
import { Link } from "react-router-dom";
import Layout from "../layout";

class Phones extends Component {
  componentDidMount() {
    this.props.fetchPhones();
  }

  renderPhone(phone, idx) {
    const shortDesc = `${phone.description.slice(0, 60)}...`;
    const { addPhoneToCart } = this.props;
    return (
      <div className="col-sm-4 col-lg-4 col-md-4 book-list" key={idx}>
        <div className="card mb-2">
          <img className="img-thumbnail" src={phone.image} alt={phone.name} />
          <div className="caption p-2">
            <h4 className="pull-right h5">${phone.price}</h4>
            <h4 className="h5">
              <Link className="" to={`/phones/${phone.id}`}>
                {phone.name}
              </Link>
            </h4>
            <p className="card-text">{shortDesc}</p>
            <p className="itemButton">
              <button
                className="btn btn-info mr-1"
                onClick={() => addPhoneToCart(phone.id)}
              >
                Buy now!
              </button>
              <Link
                to={`/phones/${phone.id}`}
                className="btn btn-outline-dark  "
              >
                More Info
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { phones, loadMorePhones } = this.props;

    return (
      <Layout>
        <div className="books row">
          {phones.map((phone, idx) => this.renderPhone(phone, idx))}
        </div>
        <div>
          <button className="btn btn-primary" onClick={loadMorePhones}>
            Load More
          </button>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    phones: getPhones(state)
  };
};

const mapDispatchToProps = {
  fetchPhones,
  loadMorePhones,
  addPhoneToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones);
