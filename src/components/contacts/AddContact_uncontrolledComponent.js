import React, { Component } from 'react'

export default class AddContact extends Component {
  constructor(props){
    super(props)

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  static defaultProps = {
    name: 'Hey boi',
    email: 'hey@boi.com',
    phone: 111-111-1111
  }

  onSubmit = e => {
    e.preventDefault()
    const contact = {
      name:this.nameInput.current.value,
      email:this.emailInput.current.value,
      phone:this.phoneInput.current.value
    }
    console.log(contact)
  }

  onChange = e => this.setState({ [e.target.name] :e.target.value}) 

  render() {
    const {name,email,phone} = this.props
    return (
      <div className="card mb-3">
        <div className="card-header">
          Add Contact
        </div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input ref={this.nameInput}  defaultValue={name} placeholder='Enter name...' type="text" name="name" id="name" className="form-control form-control-lg"/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input ref={this.emailInput} onChange={this.onChange} defaultValue={email} placeholder='Enter email...' type="text" name="email" id="email" className="form-control form-control-lg"/>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input ref={this.phoneInput} onChange={this.onChange} defaultValue={phone} placeholder='Enter phone...' type="text" name="phone" id="phone" className="form-control form-control-lg"/>
            </div>
            <input type="submit" value="Add Contact" className="btn btn-block btn-dark"/>
          </form>
        </div>
      </div>
    )
  }
}
