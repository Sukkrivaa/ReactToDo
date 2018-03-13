//This is the component that maintains all the state for the application
//Basically the big component that maintains all the state for the whole application
var React = require("react");
var uuid = require("uuid");
var moment = require("moment");

var TodoApi = require("TodoApi");
var TodoList = require("TodoList");
var TodoForm = require("TodoForm");
var TodoSearch = require("TodoSearch");

var TodoApp = React.createClass({
  getInitialState: function(){
    //All the info the app needs is stored on the state
    return {
      todos: TodoApi.getTodos(),
      searchText: "",
      showCompleted: false
    };
  },
  componentDidUpdate: function (){
    TodoApi.setTodos(this.state.todos);
  },
  handleAddTodo: function(text){
    //Adds a new todo to the array that the todos state property points to
    this.setState({
      todos: [
        ...this.state.todos , {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
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
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
    });

    this.setState({todos: updatedTodos});
  },
  render: function(){
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText);
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch}/>
              <TodoList onToggle = {this.handleToggle} todos={filteredTodos}/>
              <TodoForm onAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp
