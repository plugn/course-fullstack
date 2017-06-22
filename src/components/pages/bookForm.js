import React from 'react'
import {Well, Panel, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'
import FieldGroup from '../FieldGroup'

class BookForm extends React.Component {
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
					<Button bsStyle="primary">Save book</Button>
				</Panel>
			</Well>
		)
	}
}

export default BookForm;