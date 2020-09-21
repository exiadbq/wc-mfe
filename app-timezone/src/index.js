import * as React from 'react';
import ReactWebComponent from 'react-web-component';

import App from './App.js';

// set to false to opt out of shadow root and bring in
// css from parent app
ReactWebComponent.create(<App />, 'app-timezone', true);
