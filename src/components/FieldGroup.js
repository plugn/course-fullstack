import React from 'react';
import {FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap'
class FieldGroup extends React.Component {
	render() {
		let { id, label, help, ...props }
		return (
			<FormGroup controlId={id}>
				<ControlLabel>{label}</ControlLabel>
				<FormControl {...props} ref={id} />
				{help && <HelpBlock>{help}</HelpBlock>}
			</FormGroup>
		);
	}
}
// function FieldGroup({ id, label, help, ...props }) {}

export default FieldGroup;