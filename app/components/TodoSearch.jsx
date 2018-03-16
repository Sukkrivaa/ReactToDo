var React = require("react");
var {connect} = require("react-redux");
var actions = require("actions");

export var TodoSearch = React.createClass({
  render: function(){
    var {dispatch, showCompleted, searchText} = this.props
    //Returns a search bar where if we type something or click the textbox, the handlesearch function will be called
    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" value = {searchText} onChange={() => {
            var searchText = this.refs.searchText.value;
            dispatch(actions.setSearchText(searchText));
          }}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={() => {
              dispatch(actions.toggleShowCompleted());
            }} checked={showCompleted}/>
            <span>Show Completed Todos</span>
          </label>
        </div>
      </div>
    )
  }
});

export default connect((state) => {
  return {
    showCompleted : state.showCompleted,
    searchText: state.searchText
  }
})(TodoSearch);
