var React = require("react");
var ReactDOM = require("react-dom");
var $ = require("jQuery");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");

var TodoSearch= require("TodoSearch");

describe("TodoSearch", () => {
  it("should exist", () => {
      expect(TodoSearch).toExist();
  });

  it("should call onSearch when the text is changed", () => {
    var SearchText = "Dog";
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);

    todoSearch.refs.searchText.value = SearchText; //Need to set the value first
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false, "Dog");
  });


  it("should call onSearch when the show-completed checkbox is changed", () => {
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.showCompleted.checked = true; //Need to set the value first - kink with TestUtils
    TestUtils.Simulate.change(todoSearch.refs.showCompleted); //Will only run the function when this happens

    expect(spy).toHaveBeenCalledWith(true,"");
  });

});
