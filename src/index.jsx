import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
//import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';

createRoot(document.getElementById('app')).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
//ReactDOM.render(<App />, document.getElementById('app'));

