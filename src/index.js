import 'core-js/fn/object/assign';
import React from 'react';
import 'whatwg-fetch';
import ReactDOM from 'react-dom';
import App from './router.config';
import DevTools from "mobx-react-devtools";

// Render the main component into the dom
ReactDOM.render(<div><DevTools/><App /></div>, document.getElementById('app'));
