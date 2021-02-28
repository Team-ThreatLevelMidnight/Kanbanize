import { CONSTANTS } from "./index";
import uuid from "react-uuid";

export const addList = (listTitle) => {
  return (dispatch, getState) => {
    dispatch({
      type: CONSTANTS.ADD_LIST,
      payload: {
        listTitle,
        boardID: getState().currentBoard.boardID,
        listID: uuid(),
      },
    });
  };
};

export const editListTitle = (listID, newListTitle) => {
  return {
    type: CONSTANTS.EDIT_LIST_TITLE,
    payload: {
      listID,
      newListTitle,
    },
  };
};

export const deleteList = (listID) => {
  return (dispatch, getState) => {
    return dispatch({
      type: CONSTANTS.DELETE_LIST,
      payload: {
        listID,
        boardID: getState().currentBoard.boardID,
      },
    });
  };
};

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => {
  return (dispatch, getState) => {
    dispatch({
      type: CONSTANTS.DRAG_HAPPENED,
      payload: {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type,
        boardID: getState().currentBoard.boardID,
      },
    });
  };
};
