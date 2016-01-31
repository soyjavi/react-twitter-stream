import React from 'react';
var TweetsApp = require('../components/TweetsApp');
var initialState = JSON.parse(document.getElementById('initial-state').innerHTML);

// Render the app (picking up where React left off on the server)
React.renderComponent(
  <TweetsApp tweets={initialState} />, document.getElementById('react-app')
);
