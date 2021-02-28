import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addBoard, deleteBoard, setCurrentBoard } from '../actions';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Icon } from '@material-ui/core';

const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	box-sizing: border-box;
`;

const Thumbnails = styled.div`
	flex: 1;
	height: 50%;
	margin: 0 auto;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
`;

const Thumbnail = styled.div`
	height: 4em;
	width: 200px;
	background: #175160;
	padding: 25px;
	margin: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	border-radius: 50px;
	box-shadow: 0 2px 4px black;
`;

const Title = styled.h4`
	color: white;
	padding-top: 5px;
	text-decoration: none;
	opacity: 1;
	${Thumbnail}:hover & {
		display: block;
		cursor: pointer;
		opacity: 1;
		text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6,
			0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
	}
`;

const DeleteButton = styled(Icon)`
	display: block;
	padding: 20%;
	color: white;
	opacity: 0.3;
	${Thumbnail}:hover & {
		display: block;
		cursor: pointer;
	}
	&:hover {
		opacity: 0.8;
	}
`;

const CreateTitle = styled.h3`
	font-size: 50px;
	color: #f5f5f5;
	font-weight: bold;
	font-family: Arial, Helvetica, sans-serif;
	padding: 10px;
	margin-top: 25px;
`;

const CreateInput = styled.input`
	width: 300px;
	height: 50px;
	font-size: 20px;
	padding: 10px;
	box-sizing: border-box;
	border-radius: 30px;
	border: none;
	outline: none;
	box-shadow: 0 2px 4px grey;
	align-self: center;
`;

//#2e7196; b0c4de;008B8B;2F4F4F
const CreateButton = styled.button`
	width: 120px;
	height: 50px;
	background-color: #175160;
	color: white;
	font-size: 17px;
	padding: 10px;
	box-sizing: border-box;
	border-radius: 30px;
	border: none;
	outline: none;
	align-self: center;
	margin: 10px;
	&:hover {
		text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6,
			0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
	}
`;

const Home = ({ boards, dispatch, match }) => {
	dispatch(setCurrentBoard(null));
	const [newBoardTitle, setNewBoardTitle] = useState('');

	const handleChange = (e) => {
		if (e.target.value.length < 14) setNewBoardTitle(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addBoard(newBoardTitle));
		setNewBoardTitle('');
	};

	const handleDeleteBoard = (e, boardID) => {
		dispatch(deleteBoard(boardID));
	};

	const renderAllBoards = () => {
		return Object.entries(boards).map(([boardID, board]) => {
			return (
				<Thumbnail>
					<a
						href={`#/boards/${boardID}`}
						style={{
							width: '100%',
							height: '100%',
							display: 'flex',
							textDecoration: 'none',
							textAlign: 'center',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<Title>{board.boardTitle}</Title>
					</a>

					<div className="col-1">
						<DeleteButton
							style={{ zIndex: '10' }}
							onClick={(e) => handleDeleteBoard(e, boardID)}>
							delete
						</DeleteButton>
					</div>
				</Thumbnail>
			);
		});
	};

	const renderCreateNewBoard = () => {
		return (
			<form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
				<CreateTitle>Make your own Kanban Board</CreateTitle>
				<CreateInput
					onChange={handleChange}
					value={newBoardTitle}
					placeholder={'Enter board name'}
					type="text"
				/>
				<CreateButton type="button submit">Create</CreateButton>
			</form>
		);
	};

	return (
		<HomeContainer>
			<CreateTitle>Saved Boards</CreateTitle>
			<Thumbnails>{renderAllBoards()}</Thumbnails>
			{renderCreateNewBoard()}
		</HomeContainer>
	);
};

const mapStateToProps = (state) => ({
	boards: state.boards,
});

export default connect(mapStateToProps)(Home);
