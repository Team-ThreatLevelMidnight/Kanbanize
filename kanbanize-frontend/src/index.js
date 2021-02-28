import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import Store from './store';
import './index.css';
import $ from 'jquery';
import { PersistGate } from 'redux-persist/integration/react';
import { HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const { persistor, store } = Store();

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<HashRouter>
				<App />
			</HashRouter>
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);

$(document).bind('DOMNodeRemoved', function (e) {
	console.log('Removed: ', e.target.title.nodeName);
});

serviceWorker.unregister();
