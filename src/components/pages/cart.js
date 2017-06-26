import React from 'react'
import {connect} from 'react-redux'
import {Panel, Row, Col, Well, Button} from 'react-bootstrap'

class Cart extends React.Component {
	render() {
		if (this.props.cart.length) {
			return this.renderCart();
		}
		else {
			return this.renderEmpty();
		}

	}

	renderEmpty() {
		return (<div></div>);
	}

	renderCart() {
		const cartItemsList = this.props.cart.map(function (item) {
			return (
				<Panel key={item.id}>
					<Row>
						<Col xs={12} sm={4}>
							<h6>{item.title}</h6>
						</Col>
					</Row>
				</Panel>
			)
		});

		return (
			<Panel header="Cart" bsStyle="primary">
				{cartItemsList}
			</Panel>
		)
	}
}

function mapStateToProps (state) {
	return {
		cart: state.cart.cart
	}
}

export default connect(mapStateToProps)(Cart);