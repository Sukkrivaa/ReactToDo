var $ = require('jquery');
//We just want to use Jquery's isArray method
module.exports = {
  //This is called everytime the state is changed
  setTodos: (todos) => {
    if($.isArray(todos)){
      //This is because localStorage only stores Strings
      //We automatically have access to the localStorage variable
      localStorage.setItem("todos", JSON.stringify(todos));
      return todos;
    }
  },
  //Only called when the app first loads up
  //Useful for login-logout apps
  getTodos: () => {
    var stringTodos = localStorage.getItem("todos");
    var todos = [];
    //Will return a string
    try {
      todos = JSON.parse(stringTodos);
    }catch(e){
      //Basically the case where there is nothing in the localStorage
    }

    //In case our localStorage was corrupted with something that was not an array
    return $.isArray(todos) ? todos : [];
  },

  filterTodos: (todos, showCompleted, searchText) => {
    //We use this to show specific todos in the TodoList
    var filteredTodos = todos;

    //Filter by showCompleted
      filteredTodos = filteredTodos.filter((todo) => {
        return !todo.completed || showCompleted;
      });
    //Filter by searchText
      //Check for searchText
        //Use indexof to see if it contains the what is the searchText - if yes, keep add it to the filteredTodos Array
      filteredTodos = filteredTodos.filter((todo) => {
        if(searchText.length == 0){
          return true;
        }else{
          return todo.text.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
        }
      });



    //Sort by non-completed first
    // Will compare every adjacent pair in the array
      filteredTodos.sort((a,b) => {
        if(!a.completed && b.completed){
          //a comes before b
          return -1;
        }else if(a.completed && !b.completed){
          //b comes before a
          return 1
        }else{
          //
          return 0;
        }
      })

      //Returns the array of todos that pass all the conditions
    return filteredTodos;
  }
}
