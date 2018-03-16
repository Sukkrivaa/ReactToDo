var React = require("react");
var {connect} = require("react-redux");
var actions = require("actions");

export var TodoForm = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    let text = this.refs.addTodo.value;
    if(text != ""){
      this.refs.addTodo.value = "";
      dispatch(actions.addTodo(text));
    }else{
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

export default connect()(TodoForm);
