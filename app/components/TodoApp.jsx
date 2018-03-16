//This is the component that maintains all the state for the application
//Basically the big component that maintains all the state for the whole application
var React = require("react");
var uuid = require("uuid");
var moment = require("moment");

var TodoApi = require("TodoApi");
import TodoList from "TodoList";
import TodoForm from "TodoForm";
import TodoSearch from "TodoSearch"; 

var TodoApp = React.createClass({
  getInitialState: function(){
    //All the info the app needs is stored on the state
    return {
      todos: TodoApi.getTodos(), //Get Todos from the local storage
      searchText: "",
      showCompleted: false
    };
  },
  componentDidUpdate: function (){
    TodoApi.setTodos(this.state.todos); //Send the refreshed todos to the localstorage
  },
  handleSearch: function(showCompleted, searchText){
    //Decides what to show
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function(){
    //Runs everytime the state refreshes (just like componentDidUpdate) - but for visual rendering purposes only
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText); //Will show selected todos based on how we filter them
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch}/>
              <TodoList />
              <TodoForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp
