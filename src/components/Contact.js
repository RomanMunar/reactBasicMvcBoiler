import React, { Component } from "react";
import PropTypes from 'prop-types';


class Contact extends Component {
  onShowClick() {
    console.log(this.props)
  }

  render() {
    const { name, email, phone} = this.props.contact;

    return (
      <div className="card card-body mb-3">
        <h1>{name}<i onClick={this.onShowClick.bind(this)} className="fas fa-sort-down"></i></h1>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    );
  };
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
}

export default Contact;
