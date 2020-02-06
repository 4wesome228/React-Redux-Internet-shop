import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../layout";

import {
  fetchPhones,
  loadMorePhones,
  addPhoneToCart,
  fetchCategories
} from "../../actions";
import { getPhones, getPhonesOffset } from "../../selectors";
import Spinner from "../../components/spinner";
import { isEmpty } from "ramda";

class Phones extends Component {
  componentDidMount() {
    const { offset, fetchPhones, fetchCategories } = this.props;
    fetchPhones(offset);
    fetchCategories();
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
    const { phones, loadMorePhones, loading, offset } = this.props;
    let phoneItems;
    if (!isEmpty(phones)) {
      phoneItems = phones.map((phone, idx) => this.renderPhone(phone, idx));
    }

    return (
      <Layout>
        <div className="books row">
          {loading ? (
            <Spinner />
          ) : isEmpty(phones) ? (
            <h2 className="text-center">No such phone(s) by this query</h2>
          ) : (
            phoneItems
          )}
        </div>
        {offset !== 9 && !this.props.match.params.id && !loading ? (
          <div className="text-center ">
            <button className="btn btn-info" onClick={loadMorePhones}>
              Load More
            </button>
          </div>
        ) : null}
      </Layout>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    phones: getPhones(state, ownProps),
    offset: getPhonesOffset(state) || 6,
    loading: state.phonesPage.loading
  };
};

const mapDispatchToProps = {
  fetchPhones,
  loadMorePhones,
  addPhoneToCart,
  fetchCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones);
