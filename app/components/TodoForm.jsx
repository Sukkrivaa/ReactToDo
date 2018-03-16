var React = require("react");
var {connect} = require("react-redux");
var actions = require("actions");

export var TodoForm = React.createClass({
  //In addition to rendering based on the state and dispatching actions, presentational components sometimes
  // need to collect data based on user input as well - as shown below
  onSubmit: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    //Getting the dispatch function off of the props
    let text = this.refs.addTodo.value;
    if(text != ""){
      this.refs.addTodo.value = "";
      //Dispatches "ADD_TODO" action to the store
      dispatch(actions.addTodo(text));
    }else{
      //The cursor goes back on the input textfield
      this.refs.addTodo.focus();
    }
  },
  render: function(){
    //Renders an input where the user can type stuff and submit it, which the trigger the onSubmit function
    return(
      <div className="container__footer">
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Add Todo" ref="addTodo"/>
          <button className= "button expanded" >Add Todo</button>
        </form>
      </div>
    )
  }
});

//We Don't need any data from the state - all we need is the dispatch method
export default connect()(TodoForm);
