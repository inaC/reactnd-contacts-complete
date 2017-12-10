import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ListContacts extends Component {
	static propTypes = {
			contacts: PropTypes.array.isRequired,
			onDeleteContact: PropTypes.func.isRequired

	}

	state = {
		query: ''
	}

	setQuery = (query) => this.setState({query: query.trim()})

	clearQuery = () => this.setState({query: ''})
	
	searchContacts = (match, contacts) => (this.state.query ? (contacts.filter((contact) => match.test(contact.name))) : contacts)
	
	showingContacts = (match, contacts, orderBy) => (this.searchContacts(match, contacts).sort(sortBy(orderBy)))
	
	render() {
		const {contacts, onDeleteContact} = this.props
		const {query} = this.state
		const match = new RegExp(escapeRegExp(query), 'i')
		const showingContacts = this.showingContacts(match, contacts, 'name')

		return(
			<div className='list-contacts'>
				<div className='list-contacts-top'>
					<input 
						className = 'search-contacts'
						type='text' 
						placeholder='Search for contact'
						value={query}
						onChange={(event) => this.setQuery(event.target.value)} 
					/>
				</div>
				{contacts.length !== showingContacts.length && (
					<div className = 'showing-contacts'>
						<span>	Now showing {showingContacts.length} of {contacts.length} total </span>
						<button onClick = {this.clearQuery }> Show all </button>
				  </div>)
				}
				<ol className='contact-list'>
					{showingContacts.map((contact, index) => 
						<li key={contact.id} className='contact-list-item'> 
							<div className='contact-avatar' style = {{ backgroundImage: `url(${contact.avatarURL})`}}> </div>
							<div className='contact-details'>
								<p> {contact.name} </p>
								<p> {contact.email} </p>
							</div>
							<button onClick = {()=> onDeleteContact(contact)} className='contact-remove'> Remove </button>
						</li>)}
				</ol>
			</div>
		)
	}

}

//in order to import into App.js file
export default ListContacts