var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
var TodoApp = require("TodoApp");
var {Provider} = require("react-redux");

// Load foundation
$(document).foundation();
var actions = require("actions");
var store = require("configureStore").configure();

store.subscribe(() => {
  console.log("New state", store.getState());
});


//App css
require('style!css!sass!applicationStyles');


//Front-end-routing
ReactDOM.render(
  //Initialising the router
<Provider store={store}>
  <TodoApp/>
</Provider>,
  document.getElementById('app')
);
