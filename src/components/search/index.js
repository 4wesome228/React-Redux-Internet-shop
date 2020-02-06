import React, { Component } from "react";
import { connect } from "react-redux";
import { searchPhones } from "../../actions";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = e => {
    const value = e.target.value.trim();
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.searchPhones(this.state.value);
  };

  render() {
    const { value } = this.state;
    return (
      <div className="search-backgound ">
        <h3 className="lead pb-2 text-center">Quick shop</h3>
        <div className="input-group md-form form-sm">
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              placeholder="Search"
              value={value}
            />
          </form>
          <div className="input-group-append">
            <button className="btn btn-primary">
              <i
                className="fa fa-search text-grey search"
                aria-hidden="true"
              ></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  searchPhones
};

export default connect(null, mapDispatchToProps)(Search);
