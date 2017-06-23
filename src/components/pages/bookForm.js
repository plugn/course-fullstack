import React from 'react'
import {Well, Panel, Button} from 'react-bootstrap'
import FieldGroup from '../FieldGroup'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {postBooks} from '../../actions/booksActions'

class BookForm extends React.Component {
	handleSubmit() {
		const domNodes = this.childRefs.filter(item => !!item.nodeType);

		let book = domNodes.reduce(
			(acc, val) => {
				acc[val.id] = val.value
				return acc
			},
			{});

		// console.log('book', book);
		if (!book || !book.title) return;

		this.props.postBooks([book]);
	}

	render() {
		this.childRefs=[];
		return (
			<Well>
				<Panel>
					<FieldGroup
						id="title"
						type="text"
						label="Title"
						placeholder="Enter text"
						inputRef={el => this.childRefs.push(el)}
					/>
					<FieldGroup
						id="description"
						type="text"
						label="Description"
						placeholder="Enter Description"
						inputRef={el => this.childRefs.push(el)}
					/>
					<FieldGroup
						id="price"
						type="text"
						label="Price"
						placeholder="Enter Price"
						inputRef={el => this.childRefs.push(el)}
					/>
					<Button onClick={e => this.handleSubmit()} bsStyle="primary">Save book</Button>
				</Panel>
			</Well>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({postBooks}, dispatch);
}

export default connect(null, mapDispatchToProps)(BookForm);