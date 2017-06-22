import React from 'react'
import {findDOMNode} from 'react-dom'
import {Well, Panel, Button} from 'react-bootstrap'
import FieldGroup from '../FieldGroup'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {postBooks} from '../../actions/booksActions'

class BookForm extends React.Component {
	constructor(props) {
		super(props);
		this.formRefs = {}
	}

	handleSubmit() {
		// const book=[{
		// 	// title: findDOMNode(this.refs.title)
		//
		// }]
	}

	render() {
		return (
			<Well>
				<Panel>
					<FieldGroup
						id="title"
						type="text"
						label="Title"
						placeholder="Enter text"
					/>
					<FieldGroup
						id="description"
						type="text"
						label="Description"
						placeholder="Enter Description"
					/>
					<FieldGroup
						id="Price"
						type="text"
						label="Price"
						placeholder="Enter Price"
					/>
					<Button onClick={this.handleSubmit.bind(this)} bsStyle="primary">Save book</Button>
				</Panel>
			</Well>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({postBooks}, dispatch);
}

export default connect(null, mapDispatchToProps)(BookForm);