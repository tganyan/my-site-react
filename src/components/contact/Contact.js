import React from 'react';
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

class Contact extends React.Component {
	constructor(props) {
		super(props);

		const emptyState = {
			name: '',
			email: '',
			message: '',
		}

		this.state = emptyState;
	}

	handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
  	return (
  		<div>
  			<h1>Contact me</h1>
				<ContactForm>
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