//This is the main component
var React = require("react");
// Not Needed anymore because we have moved this functionality to the reducers, which handle ALL changing of state
 // var uuid = require("uuid");
 // var moment = require("moment");

import TodoList from "TodoList";
//We use import instead of require because we have used export default (Therefor there is no need for a named import) to our connected components
  //Our connected components are the ones that can change the state and get info from the state
import TodoForm from "TodoForm";
import TodoSearch from "TodoSearch";

var TodoApp = React.createClass({
  render: function(){
    //Runs everytime the state refreshes (just like componentDidUpdate) - but for visual rendering purposes only
    //We use foundation styles and custom classes
      return (
        <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch />
              <TodoList />
              <TodoForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
});
//Note that because we have no need to pass down info or functions, we can simply call the JSX as above - Thus, the code is highly reusable

module.exports = TodoApp
