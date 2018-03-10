var React = require("react");

module.exports = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    let text = this.refs.addTodo.value;
    if(text != ""){
      this.refs.addTodo.value = "";
      this.props.onAddTodo(text);
    }else{
      this.refs.addTodo.focus();
    }
  },
  render: function(){
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Add Todo" ref="addTodo"/>
          <button className= "button expanded" >Add Todo</button>
        </form>
      </div>
    )
  }
});
