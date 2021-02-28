import { CONSTANTS } from "./index";
import uuid from "react-uuid";

export const addCard = (listID, text) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { text, listID, cardID: uuid() },
  };
};

export const editCard = (cardID, listID, newText) => {
  return {
    type: CONSTANTS.EDIT_CARD,
    payload: { cardID, listID, newText },
  };
};

export const deleteCard = (cardID, listID) => {
  return {
    type: CONSTANTS.DELETE_CARD,
    payload: { cardID, listID },
  };
};
