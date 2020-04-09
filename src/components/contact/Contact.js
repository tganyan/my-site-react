import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Component styles
const ContactForm = styled.form`
	width: 50%;
	margin: 0 auto 5%;
`;
const ContactInput = styled.input`
	display: block;
	margin: 5% auto 0;
	padding: 1%;
	width: 50%;

	&:first-of-type {
		margin: 0 auto;
	}
`;
const ContactTextarea = styled.textarea`
	display: block;
	width: 50%;
	margin: 5% auto 0;
	min-height: 75px;
`;
const ContactSubmitButton = styled.button`
	display: block;
	width: 30%;
	margin: 5% auto 0;
`;

const emptyState = {
	name: '',
	email: '',
	message: '',
}

class Contact extends React.Component {
	constructor(props) {
		super(props);

		this.state = emptyState;
	}

	handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  resetForm = () => {
  	this.setState(emptyState);
  }

  handleSubmit = (event) => {
  	event.preventDefault();

  	const name = this.state.name;
  	const email = this.state.email;
  	const message = this.state.message;

  	axios({
  		method: 'POST',
  		url: 'http://localhost:4000/send',
  		data: {
  			name: name,
  			email: email,
  			message: message
  		}
  	}).then((response) => {
  		if (response.data.msg === 'success') {
  			alert('Message sent');
  			this.resetForm();
  		} else if (response.data.msg === 'fail') {
  			alert('Message failed to send.');
  		}
  	})
  };

  render() {
  	return (
  		<div>
  			<h1>Contact me</h1>
				<ContactForm id='contact-form' onSubmit={this.handleSubmit.bind(this)} method='POST'>
					<ContactInput 
						name='name'
						placeholder='full name... or nickname... something I can call you'
						value={this.state.name}
		        onChange={this.handleChange}
					/>
					<label htmlFor='name'>Your name, please</label>
					<ContactInput 
						name='email'
						placeholder='email'
						value={this.state.email}
		        onChange={this.handleChange}
					/>
					<label htmlFor='email'>Your electronic mailing address, please</label>
					<ContactTextarea 
		        placeholder='Say something!'
		        name='message'
		        value={this.state.message}
		        onChange={this.handleChange}
					/>
					<label htmlFor='message'>Your thoughts, please</label>
					<ContactSubmitButton type='submit'>Ship it!</ContactSubmitButton>
				</ContactForm>
  		</div>
		)
  }
}

export default Contact;