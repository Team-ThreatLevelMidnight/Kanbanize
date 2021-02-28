import React, { useState } from 'react';
import KKCard from './kkCard';
import KKCreate from './kkCreate';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { editListTitle, deleteList, deleteCard } from '../actions';
import { Icon } from '@material-ui/core';

const ListContainer = styled.div`
	background-color: #dfe3e6;
	border-radius: 3px;
	width: 300px;
	height: 100%;
	padding: 8px;
	margin-right: 8px;
`;

const StyledInput = styled.input`
	width: 100%;
	border: none;
	outline-color: blue;
	border-radius: 3px;
	margin-bottom: 3px;
	padding: 5px;
`;

const TitleContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
`;

const ListTitle = styled.h4`
	transition: background 0.3s ease-in;
	${TitleContainer}:hover & {
		background: #ccc;
	}
`;

const DeleteButton = styled(Icon)`
	display: none;
	opacity: 0.5;
	${TitleContainer}:hover & {
		display: block;
		cursor: pointer;
	}
	&:hover {
		opacity: 0.8;
	}
`;

const KKList = React.memo(({ title, cards, listID, index, dispatch }) => {
	const [editMode, setEditMode] = useState(false);
	const [listTitle, setListTitle] = useState(title);

	const handleFocus = (e) => {
		e.target.select();
	};

	const handleChange = (e) => {
		e.preventDefault();
		if (e.target.value.length <= 20) setListTitle(e.target.value);
	};

	const handleCloseEdit = (e) => {
		setEditMode(false);
		dispatch(editListTitle(listID, listTitle));
	};

	const handleDeleteList = () => {
		dispatch(deleteList(listID));
	};

	const renderEditInput = () => {
		return (
			<StyledInput
				type="text"
				value={listTitle}
				onChange={handleChange}
				autoFocus
				onFocus={handleFocus}
				onBlur={handleCloseEdit}
			/>
		);
	};

	return (
		<Draggable draggableId={String(listID)} index={index}>
			{(provided) => (
				<ListContainer
					{...provided.draggableProps}
					ref={provided.innerRef}
					{...provided.dragHandleProps}>
					<Droppable droppableId={String(listID)} type="card">
						{(provided) => (
							<div>
								<div>
									{editMode ? (
										renderEditInput()
									) : (
										<TitleContainer onClick={() => setEditMode(true)}>
											<ListTitle>{listTitle}</ListTitle>
											<DeleteButton onClick={handleDeleteList}>
												delete
											</DeleteButton>
										</TitleContainer>
									)}
								</div>
								<div {...provided.droppableProps} ref={provided.innerRef}>
									{cards.map((card, index) => (
										<KKCard
											key={card.cardID}
											index={index}
											text={card.text}
											id={card.cardID}
											listID={listID}
										/>
									))}
									{provided.placeholder}
									<KKCreate listID={listID} />
								</div>
							</div>
						)}
					</Droppable>
				</ListContainer>
			)}
		</Draggable>
	);
});

export default connect()(KKList);
