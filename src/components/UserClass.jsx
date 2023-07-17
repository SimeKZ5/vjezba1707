import React from "react";

class UserClass extends React.Component {
  render() {
    return (
      <div>
        <h2>Ime: {this.props.ime}</h2>
        <h3>Godine: {this.props.godine}</h3>
      </div>
    );
  }
}

export default UserClass;
