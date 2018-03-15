var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
var TodoApp = require("TodoApp");

// Load foundation
$(document).foundation();
var actions = require("actions");
var store = require("configureStore").configure();

store.subscribe(() => {
  console.log("New state", store.getState());
});

store.dispatch(actions.addTodo("Clean the Yard"));
store.dispatch(actions.setSearchText("Yard"));
store.dispatch(actions.toggleShowCompleted());

//App css
require('style!css!sass!applicationStyles');


//Front-end-routing
ReactDOM.render(
  //Initialising the router
<TodoApp/>,
  document.getElementById('app')
);
