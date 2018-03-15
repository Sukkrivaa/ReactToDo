var $ = require('jquery');

module.exports = {
  setTodos: (todos) => {
    if($.isArray(todos)){
      localStorage.setItem("todos", JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: () => {
    var stringTodos = localStorage.getItem("todos");
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    }catch(e){

    }

    return $.isArray(todos) ? todos : [];
  },
  filterTodos: (todos, showCompleted, searchText) => {
    var filteredTodos = todos;

    //Filter by showCompleted
      filteredTodos = filteredTodos.filter((todo) => {
        return !todo.completed || showCompleted;
      });
    //Filter by searchText
      //Check for searchText
        //Use indexof to see if it contains the what is the searchText
      filteredTodos = filteredTodos.filter((todo) => {
        if(searchText.length == 0){
          return true;
        }else{
          return todo.text.toLowerCase().indexOf(searchText) !== -1;
        }
      });



    //Sort by non-completed first
      filteredTodos.sort((a,b) => {
        if(!a.completed && b.completed){
          return -1;
        }else if(a.completed && !b.completed){
          return 1
        }else{
          return 0;
        }
      })
    return filteredTodos;
  }
}
