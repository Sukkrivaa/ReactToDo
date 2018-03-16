var redux = require("redux");
//To use the combineReducers function - allows us to map one reducer to one part of the state
var {showCompletedReducer,searchTextReducer,todosReducer} = require("reducers");
//Could have used import as well

//In our configure, we must set the initial state (in case in other apps we want our inital state to be non-empty) - this will create the store
export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    showCompleted: showCompletedReducer,
    searchText: searchTextReducer,
    todos: todosReducer
  });


  // This is the part of the function that actually creates the store to manage the state
  var store = redux.createStore(reducer, initialState, redux.compose(
      //This exists so that we can easily debug in our chrome extension
      window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  //Remember to return the store!!
  return store;

}; // One reducer for each item on the state
