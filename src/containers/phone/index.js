import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPhoneById, addPhoneToCart } from "../../actions";

import Phone from "../../components/phone";
import Spinner from "../../components/spinner";

class PhoneContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.props
      .fetchPhoneById(this.props.match.params.id)
      .then(() => this.setState({ loading: false }));
  }

  render() {
    const { phone } = this.props;
    return !this.state.loading ? (
      <Phone phone={phone} addPhoneToCart={this.props.addPhoneToCart} />
    ) : (
      <Spinner />
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

export default connect(mapStateToProps, mapDispatchToProps)(PhoneContainer);
