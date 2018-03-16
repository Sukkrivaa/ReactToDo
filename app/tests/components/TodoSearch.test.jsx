var React = require("react");
var ReactDOM = require("react-dom");
var $ = require("jQuery");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");

import {TodoSearch} from "TodoSearch";

describe("TodoSearch", () => {
  it("should exist", () => {
      expect(TodoSearch).toExist();
  });

  it("should dispatch SET_SEARCH_TEXT on input change", () => {
    var SearchText = "Dog";
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);
    var action = {
      type: "SET_SEARCH_TEXT",
      searchText: SearchText
    }
    todoSearch.refs.searchText.value = SearchText; //Need to set the value first
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(action);
  });


  it("should dispatch TOGGLE_SHOW_COMPLETED when the checkbox is checked", () => {
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.showCompleted.checked = true; //Need to set the value first - kink with TestUtils
    TestUtils.Simulate.change(todoSearch.refs.showCompleted); //Will only run the function when this happens

    expect(spy).toHaveBeenCalledWith({type: "TOGGLE_SHOW_COMPLETED"});
  });

});
