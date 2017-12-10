import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ImageInput from './ImageInput'
import serializeFrom from 'form-serialize'

class CreateContact extends Component {
	static propTypes = {
			onCreateContact: PropTypes.func.isRequired
	}

	handleSubmit = (event) => {
		event.preventDefault()
		const values = serializeFrom(event.target, {hash: true})
		this.props.onCreateContact(values)
	}

  render() {
    return (
    	<div>
      	<Link title='Back to home page' to='/' className='close-create-contact'> Close </Link>
      	<form onSubmit = {this.handleSubmit} className='create-contact-form'>
      		<ImageInput
      			className='create-contact-avatar-input'
      			name='avatarURL'
      			maxHeight={64}
      		/>
      		<div className='create-contact-details'>
      			<input type='text' name='name' placeholder='Name'/>
      			<input type='text' name='email' placeholder='Email'/>
      			<button> Add Contact </button>
      		</div>
      	</form>
      </div>

    )
  }
}
export default CreateContact