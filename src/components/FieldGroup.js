import React from 'react';
import {FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap'
class FieldGroup extends React.Component {
	render() {
		let { id, label, help, ...props } = this.props;
		return (
			<FormGroup controlId={id}>
				<ControlLabel>{label}</ControlLabel>
				<FormControl {...props} ref={id} />
				{help && <HelpBlock>{help}</HelpBlock>}
			</FormGroup>
		);
	}
}

export default FieldGroup;