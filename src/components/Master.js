import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Link } from "react-router-dom";

import Detail from "./Detail";

const style = {
  nav: {
    listStyle: "none"
  }
};
class Master extends Component {
  render() {
    const { match, items } = this.props;

    if (!items) {
      return <div>Loading ... </div>;
    }

    const listItems = items.map(item => (
      <li key={item.id}>
        <Link to={`${match.url}/${item.id}`}>Show {item.name}</Link>
      </li>
    ));

    return (
      <div>
        <ul style={style.nav}>{listItems}</ul>

        <hr />

        <Route
          path={`${match.url}/:id`}
          render={routeProps => {
            // Get the selected
            const itemId = routeProps.match.params.id;
            const selectedItem = this.props.items.find(
              item => item.id === parseInt(itemId)
            );

            return <Detail {...routeProps} item={selectedItem} />;
          }}
        />
      </div>
    );
  }
}

export default Master;
