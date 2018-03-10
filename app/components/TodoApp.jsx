var React = require("react");

var TodoList = require("TodoList");
var TodoForm = require("TodoForm");

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      todos: [
        {
          id: 1,
          text: "Walk the dog"
        },
        {
          id: 2,
          text: "Mow the lawn"
        },
        {
          id: 3,
          text: "Clean the Yard"
        },
        {
          id: 4,
          text: "Do Homework"
        }
      ]
    };
  },
  handleAddTodo: function(text){
    alert("new todo: "+text);
  },
  render: function(){
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
        <TodoForm onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp
