//This is the component that maintains all the state for the application

var React = require("react");
var uuid = require("uuid")

var TodoList = require("TodoList");
var TodoForm = require("TodoForm");
var TodoSearch = require("TodoSearch");

var TodoApp = React.createClass({
  getInitialState: function(){
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
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  handleToggle: function(id){
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
