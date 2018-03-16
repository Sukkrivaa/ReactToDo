var React = require("react");
import Todo from "Todo";
var {connect} = require("react-redux");
var TodoApi = require("TodoApi");


export var TodoList = React.createClass({
  render: function (){
    var {todos, showCompleted, searchText} = this.props;

    var renderTodos = () => {
      if(todos.length == 0){
        return (
          <p className="container__message">Nothing To Do</p>
        )
      }
      return TodoApi.filterTodos(todos, showCompleted, searchText).map((todo) => {
        return(
          <Todo key={todo.id} {...todo} />
          //We need the key because we are rendering an array
        )
      })
    }
    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
