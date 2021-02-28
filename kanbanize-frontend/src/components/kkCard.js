import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent, Icon } from '@material-ui/core';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import KKForm from './kkForm';
import { editCard, deleteCard } from '../actions';
import { connect } from 'react-redux';
import KKButton from './kkButton';
import { post } from 'axios';

const CardContainer = styled.div`
	margin: 0 0 8px 0;
	position: relative;
	max-width: 100%;
	word-wrap: break-word;
`;

const EditButton = styled(Icon)`
	position: absolute;
	display: none;
	right: 5px;
	top: 5px;
	opacity: 0.5;
	${CardContainer}:hover & {
		display: block;
		cursor: pointer;
	}
	&:hover {
		opacity: 0.8;
	}
`;

const DeleteButton = styled(Icon)`
	position: absolute;
	display: none;
	right: 5px;
	bottom: 5px;
	opacity: 0.5;
	${CardContainer}:hover & {
		display: block;
		cursor: pointer;
	}
	&:hover {
		opacity: 0.8;
	}
`;

const KKCard = React.memo(({ text, id, listID, index, dispatch }) => {
	const [editMode, setEditMode] = useState(false);
	const [cardText, setText] = useState(text);

	const closeForm = (e) => {
		setEditMode(false);
		setText(text);
	};

	const handleChange = (e) => {
		setText(e.target.value);
		console.log(e.target.value);
	};

	const saveCard = (e) => {
		e.preventDefault();
		dispatch(editCard(id, listID, cardText));
		console.log(cardText);
		if (cardText) {
			post(
				'https://kanbanize-hack.herokuapp.com/dashboard/dashboard/inprogress',
				'name=' + cardText
			).then((response) => {
				console.log(response);
			});
		}

		setEditMode(false);
	};

	const eraseCard = (e) => {
		dispatch(deleteCard(id, listID));
	};

	if (editMode)
		return (
			<KKForm
				text={cardText}
				setText={setText}
				closeForm={closeForm}
				onChange={handleChange}>
				<KKButton text="Save" onClick={saveCard}></KKButton>
			</KKForm>
		);

	return (
		<Draggable draggableId={String(id)} index={index}>
			{(provided) => (
				<CardContainer
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					onDoubleClick={() => setEditMode(true)}>
					<Card>
						<EditButton fontSize="small" onMouseDown={() => setEditMode(true)}>
							edit
						</EditButton>
						<DeleteButton fontSize="small" onMouseDown={eraseCard}>
							delete
						</DeleteButton>
						<CardContent>
							<Typography>{text}</Typography>
						</CardContent>
					</Card>
				</CardContainer>
			)}
		</Draggable>
	);
});

export default connect()(KKCard);
