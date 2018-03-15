var React = require("react");
var ReactDOM = require("react-dom");
var $ = require("jQuery");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");

var TodoList = require("TodoList");
var Todo = require("Todo");

describe("TodoList", () => {
  it("should exist", () => {
      expect(TodoList).toExist();
  });

  it("should render 1 todo component for each todo item passes to it", () => {
    var todos = [{id:1, text:"doSomething"},{id:2, text:"doSomethingElse"}];
    var todolist = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todolist, Todo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it("should render empty message if no todos", () => {
    var todos = [];
    var todolist = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(todolist));
    expect($el.find(".container__message").length).toBe(1); //One element inside
  });

});
