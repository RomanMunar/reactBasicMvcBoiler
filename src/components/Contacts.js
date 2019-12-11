import React, { Component } from "react";
import Contact from "./Contact";
class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Bob Smith",
        email: "bob@smith.com",
        phone: "012843761"
      },
      {
        id: 2,
        name: "Harold Wat",
        email: "harold@wat.com",
        phone: "032133761"
      },
      {
        id: 3,
        name: "twa Sdfsmith",
        email: "sd@smitasdh.com",
        phone: "0124546761"
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id}
            contact={contact}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
