var React = require("react");

var TodoSearch = React.createClass({
  handleSearch: function(){
    //Basically set the state - we will have to wire this up later
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },
  render: function(){
    //Returns a search bar where if we type something or click the textbox, the handlesearch function will be called
    return (
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
            <span>Show Completed Todos</span>
          </label>
        </div>
      </div>
    )
  }
});

module.exports = TodoSearch;
