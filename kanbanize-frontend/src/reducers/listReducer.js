import { CONSTANTS } from './../actions/index';

let listID = 2,
	cardID = 6;

const initialState = {
	'list-00': {
		listID: 'list-00',
		cards: ['card-00'],
		listTitle: 'myList',
		boardID: 'board-00',
	},
};

const listReducer = (state = initialState, action) => {
	switch (action.type) {
		case CONSTANTS.ADD_LIST: {
			const { listTitle, listID, boardID } = action.payload;
			const newList = {
				listTitle,
				listID,
				cards: [],
				boardID,
			};
			return { ...state, [listID]: newList };
		}

		case CONSTANTS.EDIT_LIST_TITLE: {
			const { listID, newListTitle } = action.payload;
			const list = state[listID];
			list.title = newListTitle;
			return { ...state, [listID]: list };
		}

		case CONSTANTS.DELETE_LIST: {
			const { listID, boardID } = action.payload;
			const newState = state;
			delete newState[listID];
			return newState;
		}

		case CONSTANTS.ADD_CARD: {
			const { listID, cardID } = action.payload;
			const list = state[listID];
			list.cards.push(cardID);
			return { ...state, [listID]: list };
		}

		case CONSTANTS.DELETE_CARD: {
			const { cardID, listID } = action.payload;
			const list = state[listID];
			const newCards = list.cards.filter((id) => id !== cardID);
			list.cards = newCards;
			return { ...state, [listID]: list };
		}

		case CONSTANTS.DRAG_HAPPENED: {
			const {
				droppableIdStart,
				droppableIdEnd,
				droppableIndexStart,
				droppableIndexEnd,
				draggableId,
				type,
			} = action.payload;

			if (type === 'list') {
				return state;
			}

			if (droppableIdStart === droppableIdEnd) {
				const list = state[droppableIdStart];
				const card = list.cards.splice(droppableIndexStart, 1);
				list.cards.splice(droppableIndexEnd, 0, ...card);
				return { ...state, [droppableIdStart]: list };
			} else {
				const startList = state[droppableIdStart];
				const card = startList.cards.splice(droppableIndexStart, 1);
				const endList = state[droppableIdEnd];
				endList.cards.splice(droppableIndexEnd, 0, ...card);
				return {
					...state,
					[droppableIdStart]: startList,
					[droppableIdEnd]: endList,
				};
			}
		}

		default:
			return state;
	}
};

export default listReducer;
