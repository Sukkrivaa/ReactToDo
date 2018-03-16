var React = require("react");
var {connect} = require("react-redux");
var actions = require("actions");

//Note that searchText and showCompleted are part of the state and we use them to filter the Todos using the TodoApi.filterTodos() method
//Ideally, since you want the render function do directly do one thing, we should have split the searchbar and the checkbox
export var TodoSearch = React.createClass({
  render: function(){
    var {dispatch, showCompleted, searchText} = this.props
    //We put in a default searchText in case the localStorage has a default
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
  //Instead of getting the whole state, we have only gotten the things we want
  return {
    showCompleted : state.showCompleted,
    searchText: state.searchText
  }
})(TodoSearch);
