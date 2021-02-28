import { CONSTANTS } from "../actions";

const initialState = {
  "card-00": {
    text: "Dev Card",
    id: "card-00",
    listID: "list-00",
  },
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_CARD: {
      const { text, listID, cardID } = action.payload;
      const newCard = {
        text,
        cardID,
        listID,
      };
      return { ...state, [cardID]: newCard };
    }

    case CONSTANTS.EDIT_CARD: {
      const { cardID, newText } = action.payload;
      const card = state[cardID];
      card.text = newText;
      return { ...state, [cardID]: card };
    }

    case CONSTANTS.DELETE_CARD: {
      const { cardID } = action.payload;
      const newState = state;
      delete newState[cardID];
      return newState;
    }

    default:
      return state;
  }
};

export default cardReducer;
