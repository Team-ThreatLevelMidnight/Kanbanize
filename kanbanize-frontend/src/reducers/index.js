import { combineReducers } from "redux";
import boardReducer from "./boardReducer";
import currentBoardReducer from "./currentBoardReducer";
import listReducer from "./listReducer";
import cardReducer from "./cardReducer";

export default combineReducers({
  boards: boardReducer,
  currentBoard: currentBoardReducer,
  lists: listReducer,
  cards: cardReducer,
});
