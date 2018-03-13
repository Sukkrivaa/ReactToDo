//This is the component that maintains all the state for the application
//Basically the big component that maintains all the state for the whole application
var React = require("react");
var uuid = require("uuid")

var TodoList = require("TodoList");
var TodoForm = require("TodoForm");
var TodoSearch = require("TodoSearch");

var TodoApp = React.createClass({
  getInitialState: function(){
    //All the info the app needs is stored on the state
    return {
      todos: [
        {
          id: uuid(),
          text: "Walk the dog",
          completed: false
        },
        {
          id: uuid(),
          text: "Mow the lawn",
          completed: false
        },
        {
          id: uuid(),
          text: "Clean the Yard",
          completed: false
        },
        {
          id: uuid(),
          text: "Do Homework",
          completed: false
        }
      ],
      searchText: "",
      showCompleted: false
    };
  },
  handleAddTodo: function(text){
    //Adds a new todo to the array that the todos state property points to
    this.setState({
      todos: [
        ...this.state.todos , {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    })
  },
  handleSearch: function(showCompleted, searchText){
    //Decides what to show
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  handleToggle: function(id){
    //Changes the completed state of the todo with the corresponding id
    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({todos: updatedTodos});
  },
  render: function(){
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList onToggle = {this.handleToggle} todos={todos}/>
        <TodoForm onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp
