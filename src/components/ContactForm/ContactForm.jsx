import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Form = styled.form`
  margin-bottom: 20px;
  padding: 16px;

  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`;

const InnerFormContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const FormLabel = styled.label`
  min-width: 70px;

  font-weight: 600;
`;

const FormInput = styled.input`
  width: 100%;
  padding-left: 6px;
  border-bottom: 1px solid #505050;

  &:active,
  &:hover,
  &:focus {
    outline: 0;
    outline-offset: 0;
  }
`;

const Button = styled.button`
  display: block;
  width: 100px;
  height: 30px;
  margin: 0 auto;
  padding: 0;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.87;

  color: #ffffff;

  background-color: #188ae8a6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  transition: background-color 200ms linear;

  &:hover,
  &:focus {
    background-color: #188ce8;
  }
`;

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputNameId = nanoid(5);
  inputNumberId = nanoid(5);

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.resetForm();
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <InnerFormContainer>
          <FormLabel htmlFor={this.inputNameId}>Name</FormLabel>
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.inputNameId}
            onChange={this.handleInputChange}
            value={this.state.name}
          />
        </InnerFormContainer>
        <InnerFormContainer>
          <FormLabel htmlFor={this.inputNumberId}>Number</FormLabel>
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.inputNumberId}
            onChange={this.handleInputChange}
            value={this.state.number}
          />
        </InnerFormContainer>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
