import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPhones, loadMorePhones } from "../../actions";
import { getPhones } from "../../selectors";
import { Link } from "react-router-dom";

class Phones extends Component {
  componentDidMount() {
    this.props.fetchPhones();
  }

  renderPhone(phone, idx) {
    const shortDesc = `${phone.description.slice(0, 50)}...`;
    return (
      <div className="col-sm-4 col-lg-4 col-md-4 book-list" key={idx}>
        <div className="card mb-2">
          <img className="img-thumbnail" src={phone.image} alt={phone.name} />
          <div className="caption p-2">
            <h4 className="pull-right">${phone.price}</h4>
            <h4 className="h5">
              <Link className="stretched-link" to={`/phones/${phone.id}`}>
                {phone.name}
              </Link>
            </h4>
            <p className="card-text">{shortDesc}</p>
            <p className="itemButton">
              <button className="btn btn-info mr-1">Buy now!</button>
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
      <div>
        <div className="books row">
          {phones.map((phone, idx) => this.renderPhone(phone, idx))}
        </div>
        <div>
          <button className="btn btn-primary" onClick={loadMorePhones}>
            Load More
          </button>
        </div>
      </div>
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
  loadMorePhones
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones);
