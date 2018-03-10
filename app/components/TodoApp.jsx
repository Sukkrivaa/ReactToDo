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
          text: "Walk the dog"
        },
        {
          id: uuid(),
          text: "Mow the lawn"
        },
        {
          id: uuid(),
          text: "Clean the Yard"
        },
        {
          id: uuid(),
          text: "Do Homework"
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
          text: text
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
  render: function(){
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <TodoForm onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp
