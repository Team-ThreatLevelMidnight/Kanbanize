import React, { Component } from 'react';
import { connect } from 'react-redux';
import './anime.css';

class Navbar extends Component {
	render() {
		return (
			<div className="fixed-top navbar-dark">
				<div className="row my-3">
					<div className="col-4 text-left"></div>
					<div className="col-4 text-center">
						<a
							className="text-white gh1"
							style={{
								backgroundColor: 'black',
								boxShadow: '0px 0px 5px #fff',
								textDecoration: 'none',
								borderRadius: '8px',
								padding: '7px',
							}}
							href="#">
							K A N B A N I Z E
						</a>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	boards: state.boards,
	currentBoard: state.currentBoard,
});

export default connect(mapStateToProps)(Navbar);
