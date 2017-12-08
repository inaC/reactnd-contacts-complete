import React, { Component } from 'react'

/*
	we are going to build a component which will display the contact list :)
	such component will receive the contact list 
*/


class ListContacts extends Component {
	render() {
		return(
			<ol className = 'contact-list'>
				{this.props.contacts
					.map((contact, index) => <li key={contact.id}> {contact.name} </li>)}
			</ol>
		)
	}

}
//in order to import into App.js file
export default ListContacts