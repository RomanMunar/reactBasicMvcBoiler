import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone, errors } = this.state;
    const newContact = {
      name,
      email,
      phone,
      errors
    };

    if (name === "") {
      this.setState({
        errors: {
          name: "Name is Required"
        }
      });
      return;
    }
    if (email === "") {
      this.setState({
        errors: {
          email: "Email is Required"
        }
      });
      return;
    }
    if (phone === "") {
      this.setState({
        errors: {
          phone: "Phone is Required"
        }
      });
      return;
    }

    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newContact
    );

    dispatch({ type: "ADD_CONTACT", payload: res.data });

    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    this.props.history.push("/");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form action="/" onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    name="name"
                    label="Name"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={this.onChange}
                    errors={errors.name}
                  />
                  <TextInputGroup
                    type="email"
                    name="email"
                    label="Email"
                    placeholder="Enter Email..."
                    value={email}
                    errors={errors.email}
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    name="phone"
                    label="Phone"
                    placeholder="Enter Phone..."
                    value={phone}
                    errors={errors.phone}
                    onChange={this.onChange}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-block btn-dark"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
