var React = require('react')
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
var TodoApp = require("TodoApp");
//The Main app that holds the other components
var {Provider} = require("react-redux");
//This is the compulsory component that allows the presentational components to connect to the store
  //Thereby allowing it to get dispatch actions and get data as props


// Load foundation
// We can use the jQuery $ because we added it in as a plugin in webpack config
$(document).foundation();

var actions = require("actions");
// Getting access to all the actions that could change the state in the store
var store = require("configureStore").configure();
// Setting up the store here in the main document - due to the connect keyword and Provider, the store can be manipulated by any components below this
var TodoApi = require("TodoApi");
// So that we have access to and the ability to manipulate and filter the localStorage in the browser

//Runs everytime the state is updated
store.subscribe(() => {
  var state = store.getState();
  TodoApi.setTodos(state.todos);
  //Everytime the state is updated, the localStorage (only the list of todos part) is updated as well
  //Thus any change to the todos (like any property) is immediately updated in the localStorage
});

var InitialTodos = TodoApi.getTodos();
//In the case that there are already Todos in the localStorage when we first open the app
store.dispatch(actions.addTodos(InitialTodos));
//We immediately add the initial todos to our state (since our state is empty at first (as set by the default values of the reducers))


//App css - loads in our styles - since they are in sass, we use the sass loader - also for webpack, since it is mainly used for JS,
//For it to be used, we need the style and css loaders
require('style!css!sass!applicationStyles');


//Front-end-routing
ReactDOM.render(
  //Initialising the router
  // The Provider is basically the holder of the store
<Provider store={store}>
  <TodoApp/>
</Provider>,
  document.getElementById('app')
);
