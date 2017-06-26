import React from 'react'
import {Row, Col, Well, Button} from 'react-bootstrap'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {addToCart} from '../../actions/cartActions'


class BookItem extends React.Component {

	handleCart() {
		console.log('this', this);
		
		const book = [...(this.props.cart || {}) , {
			id: this.props.id,
			title: this.props.title,
			description: this.props.description,
			price: this.props.price
		}]
		console.log('book', book);



		this.props.addToCart(book);
	}

	render() {
		return (
			<Well>
				<Row>
					<Col xs={12}>
						<h6>{ this.props.title }</h6>
						<p>{ this.props.description }</p>
						<h6>usd. {this.props.price}</h6>

						<Button onClick={e => this.handleCart()} bsStyle="primary">Buy now</Button>
					</Col>
				</Row>
			</Well>
		)
	}
}

function mapStateToProps (state) {
	return {
		cart: state.cart.cart
	}
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators({
		addToCart
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);