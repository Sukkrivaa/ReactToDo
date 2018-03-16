//Actions consist of the type and info needed to carry out the action - The reducers will worry about making use of this info to change the state
//The purpose of actions is to let presentational components change the state - nothing else, nothing more
//Remember that under redux, everything expect the provider is a presentational component - none of them manage the state
//They may however, carry other components

//ACTIONS SHOULD BE SELF EXPLANATORY
export var setSearchText = (text) => {
  return {
    type: "SET_SEARCH_TEXT",
    searchText: text
  }
}

export var addTodo = (text) => {
  return {
    type: "ADD_TODO",
    text
  }
}

export var toggleShowCompleted = () => {return {type: "TOGGLE_SHOW_COMPLETED"}}

export var toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    id
  }
}

export var addTodos = (todos) => {
  return {
    type: "ADD_TODOS",
    todos
  }
}
