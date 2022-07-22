import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const AppContainer = styled.div`
  width: 450px;
  padding: 20px;
  margin: 0 auto;

  background-color: rgb(238, 232, 232);
  overflow: hidden;
  border-top-right-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`;

const AppTitle = styled.h1`
  margin-bottom: 15px;

  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

const AppSubTitle = styled.h2`
  margin-bottom: 15px;

  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

const ContactsWrapper = styled.div`
  padding: 16px;

  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`;
export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

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
    const { filter } = this.state;
    const filteredContacts = this.filteredContacts();

    return (
      <AppContainer>
        <AppTitle>Phonebook</AppTitle>
        <ContactForm onSubmit={this.onSubmit} />

        <AppSubTitle>Contacts</AppSubTitle>
        <ContactsWrapper>
          <Filter onChange={this.handleFilterChange} value={filter} />
          <ContactList
            contacts={filteredContacts}
            onClick={this.handleClickDel}
          />
        </ContactsWrapper>
      </AppContainer>
    );
  }
}
