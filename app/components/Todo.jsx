var React = require("react");
var moment = require("moment");
//Moment is needed for the rendering of the time
var {connect} = require("react-redux");
//In this case, even though the data is passed down from the TodoList, we still need the connect to dispatch actions
var actions = require("actions");
//We load in all the actions although we could have loaded in only the specific ones we want


export var Todo = React.createClass({
  render: function(){
    //All of the properties of a todo are available to us as they were passed down as props from TodoList
    //Dispatch is available to us because we are connected (this one is not but the export default is)
    //So basically, the prop dispatch is available to us and it equals a function that will dispatch the action to the store
    var {text,id,completed,createdAt,completedAt, dispatch} = this.props;
    // The style of the Todo is different if the Todo is completed - this is how we implement that
    var todoClassName = completed ? "todo todo-completed" : "todo";

    // The message and timeStamp will be different if the thing is completed or not
    // Weather of not a Todo is completed depends on the state that we are given, our job here as a presentational component
    // Is simply to render - That is all presentational components should do - render according to state data and dispatch actions on user feedback
    var renderDate = () => {
      var message = "Created ";
      var timeStamp = createdAt;


      if(completed){
        message = "Completed ";
        timeStamp = completedAt;
      }

      return message + moment.unix(timeStamp).format("MMM Do YYYY @ h:mm a");
    }
    return (
      <div className={todoClassName} onClick ={() => {
        dispatch(actions.toggleTodo(id));
      }}>
      <div>
        <input type="checkbox" checked={completed}/>
      </div>
      <div>
        <p>{text}</p>
        <p className="todo_subtext">{renderDate()}</p>
      </div>
      </div>
    )
  }
});

export default connect()(Todo)
