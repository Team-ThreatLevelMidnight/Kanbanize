import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'kanbanizekey',
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
	let store = createStore(persistedReducer, applyMiddleware(thunk));
	let persistor = persistStore(store);
	return { store, persistor };
};
