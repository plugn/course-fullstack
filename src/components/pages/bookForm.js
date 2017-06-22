import React from 'react'
import {Well, Panel, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'

class BookForm extends React.Component {
	render() {
		return (
			<Well>
				<Panel>
					<FormGroup controlId="title">
						<ControlLabel>Title</ControlLabel>
						<FormControl
							type="text"
							placeholder="Enter Title"
							ref="title"
						/>
					</FormGroup>
				</Panel>
			</Well>
		)
	}
}

export default BookForm;