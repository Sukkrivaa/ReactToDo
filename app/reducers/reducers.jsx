//Things we need  to change the state with the given info
//Important!!: ONE REDUCER FOR EACH ITEM ON THE STATE - THIS IS THE REASON WHY TODOS REDUCER has two cases and we don't split them up,
  //because the two actions modify the same part of the state in different ways
  //The part of the state that they are managing should be obvious from the name
  //Often useful to document the changes that could happen by changing parts of the state as shown below
var uuid = require("uuid");
var moment = require("moment");

export var searchTextReducer = (state= "", action) => {
  switch(action.type) {
    case "SET_SEARCH_TEXT":
      return action.searchText;
      //This will filter the todos that get shown in the todoList (show only that match the words)
    default:
      return state;
  }
}

export var showCompletedReducer = (state=false, action) => {
  switch(action.type){
      case "TOGGLE_SHOW_COMPLETED":
        return !state;
        //This will again filter the todos that get shown in the todoList (if completed, will show completed ones as well)
      default:
        return state;
  }
}

export var todosReducer = (state = [], action) => {
  switch(action.type){
    case "ADD_TODO":
      //Will add a todo with the below properties to the state - Will cause it to render in the todoList
      return [...state, {
          id: uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }];
    case "TOGGLE_TODO":
      //Changes the state from uncompleted to completed or vice versa
      var updatedTodos = state.map((todo) => {
        if(todo.id === action.id){
          var nextCompleted = !todo.completed
          //We have a nextCompleted because we cannot set completed = !completed and this is a wrong assignment
          return {
            ...todo,
            completed: nextCompleted,
            completedAt: nextCompleted ? moment().unix() : undefined
          }
        }
      return todo;
    });
    return updatedTodos;
    case "ADD_TODOS":
      //Adds Todos by the wholeSale - usually for initial log in
      return [
        ...state,
        ...action.todos
      ]
    default:
      return state;
  }
}
