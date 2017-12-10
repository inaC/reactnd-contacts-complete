import React, { Component } from 'react'
import PropTypes from 'prop-types'
/*
	we are going to build a component which will display the contact list :)
	such component will receive the contact list 
*/


class ListContacts extends Component {
	static propTypes = {
			contacts: PropTypes.array.isRequired,
			onDeleteContact: PropTypes.func.isRequired

	}

	state = {
		query: ''
	}

	setQuery = (query) => this.setState({query: query.trim()})

	render() {
		return(
			<div className='list-contacts'>
				<div className='list-contacts-top'>
					<input 
						className = 'search-contacts'
						type='text' 
						placeholder='Search for contact'
						value={this.state.query}
						onChange={(event) => this.setQuery(event.target.value)}/>
				</div>
				<ol className='contact-list'>
					{this.props.contacts.map((contact, index) => 
						<li key={contact.id} className='contact-list-item'> 
							<div className='contact-avatar' style = {{ backgroundImage: `url(${contact.avatarURL})`}}> 
							</div>
							<div className='contact-details'>
								<p> {contact.name} </p>
								<p> {contact.email} </p>
							</div>
							<button onClick = {()=>this.props.onDeleteContact(contact)} className='contact-remove' > 
								Remove 
							</button>
							
						</li>)}
				</ol>
			</div>
		)
	}

}

//in order to import into App.js file
export default ListContacts