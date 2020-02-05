import React from "react";
import { connect } from "react-redux";
import { getCategories } from "../../selectors";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  const renderCategory = category => {
    return (
      <NavLink
        to={`/categories/${category.id}`}
        className="list-group-item list-group-item-action"
        key={category.id}
        activeClassName="active"
      >
        {category.name}
      </NavLink>
    );
  };

  return (
    <div className="well">
      <h5 className="text-center">Categories</h5>
      <div className="list-group">
        <NavLink
          to="/categories"
          exact
          className="list-group-item list-group-item-action"
          isActive={(match, location) => {
            return match ? true : false;
          }}
        >
          All
        </NavLink>
        {categories.map(category => renderCategory(category))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    categories: getCategories(state)
  };
};

export default connect(mapStateToProps, null)(Categories);
