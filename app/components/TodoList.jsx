var React = require("react");
import Todo from "Todo";
var {connect} = require("react-redux");
//Connect is a function that allows us to get parts of the state we need and modify parts of the state by giving to us
//The dispatch function that will be available in our props
var TodoApi = require("TodoApi");


export var TodoList = React.createClass({
  render: function (){
    var {todos, showCompleted, searchText} = this.props;

    var renderTodos = () => {
      //If no todos in the state => no todos in the localStorage => There are no initalTodos
      if(todos.length == 0){
        return (
          <p className="container__message">Nothing To Do</p>
        )
      }

      // If there are Todos in the state, we first want to filter them to show - We filter
      // according to the value of ShowCompleted and SearchText (which are on the state) - the method for filtering is in the TodoApi module
      return TodoApi.filterTodos(todos, showCompleted, searchText).map((todo) => {
        return(
          <Todo key={todo.id} {...todo} />
          //We need the key because we are rendering an array
        )
      })
    }
    return (
      //Often we can choose what we render conditionally by using a function - This function uses if statements to render according to different cases
      <div>
        {renderTodos()}
      </div>
    )
  }
});


//This is what we will export - the fully connected component that can change and recieve the state.
export default connect(
  //This gives the state's keys as props onto the connected component (In this case TodoList) - need them for the filerTodos
  (state) => {
    return state;
  }
)(TodoList);
