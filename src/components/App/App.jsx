import React, { Component } from 'react';
import { ContactForm, ContactList, Filter } from 'components';

import {
  AppContainer,
  AppTitle,
  AppSubTitle,
  ContactsWrapper,
} from './App.styled';

import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');

    try {
      const parsedContacts = JSON.parse(savedContacts);
      if (parsedContacts) {
        this.setState({ contacts: parsedContacts });
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  onSubmit = data => {
    const isAlreadyInContacts = this.state.contacts.some(
      ({ name }) => name.toLocaleLowerCase() === data.name.toLocaleLowerCase()
    );

    if (isAlreadyInContacts) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    const id = nanoid(5);
    const newContact = { id, ...data };
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  handleClickDel = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = this.filteredContacts();

    return (
      <AppContainer>
        <AppTitle>Phonebook</AppTitle>
        <ContactForm onSubmit={this.onSubmit} />

        <AppSubTitle>Contacts</AppSubTitle>
        <ContactsWrapper>
          <Filter onChange={this.handleFilterChange} value={filter} />
          {contacts.length > 0 ? (
            <ContactList
              contacts={filteredContacts}
              onClick={this.handleClickDel}
            />
          ) : (
            <p>Your contact book is empty</p>
          )}
        </ContactsWrapper>
      </AppContainer>
    );
  }
}
