import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from 'axios'
import { Link } from 'react-router-dom'
class Contact extends Component {
  state = {
    showContactInfo: false,
    iconDown: true
  };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }

    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  // OnEditClick = async (id,dispatch) => {
  //   try {
  //     await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`);
  //     dispatch({ type: "EDIT_CONTACT", payload: id });
  //   } catch (e) {
  //     dispatch({ type: "EDIT_CONTACT", payload: id });
  //   }
  // }

  render() {
    const { name, email, phone, id } = this.props.contact;
    const { showContactInfo, iconDown } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <i
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    this.setState({
                      showContactInfo: !showContactInfo,
                      iconDown: !iconDown
                    })
                  }
                  className="fas fa-sort-down"
                ></i>
                <i
                  className="fa fa-times"
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                ></i>
                <Link to={`contact/edit/${id}`}><i className="fas fa-pencil-alt mr-3" style={{color:'red',float:'right',cursor:'pointer'}}></i></Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
