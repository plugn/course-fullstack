import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getBooks} from '../../actions/booksActions'
import {Grid, Row, Col, Button, Well} from 'react-bootstrap'

import BookItem from './bookItem'

class BooksList extends React.Component {
	componentDidMount() {
		// dispatch an action
		this.props.getBooks();
	}

	render(){
		// console.log(' * props.books', this.props.books);

		const booksList = this.props.books.map( function(book) {
			return (
				<Col xs={12} sm={6} md={4} key={book.id}>
					<BookItem
						id={book.id}
						title={book.title}
						description={book.description}
						price={book.price}
					/>
				</Col>
			)
		});
		
		return (
			<Grid>
				<Row style={{padding: '1rem'}}>
					{booksList}
				</Row>
			</Grid>
		)
	}
}

function mapStateToProps(state) {
	return {
		books: state.books.books
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({getBooks: getBooks}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(BooksList);