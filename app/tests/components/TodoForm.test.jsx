var React = require("react");
var ReactDOM = require("react-dom");
var $ = require("jQuery");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");

var TodoForm = require("TodoForm");


describe("TodoForm", () => {
  it("should exist", () => {
    expect(TodoForm).toExist();
  });

  it("should call the function that is passed down to it with valid data", () => {
    var spy = expect.createSpy(); //Substitute for anAddTodo
    var todoForm = TestUtils.renderIntoDocument(<TodoForm onAddTodo={spy}/>)

    var $el = $(ReactDOM.findDOMNode(todoForm));
    todoForm.refs.addTodo.value = "Hello";
    TestUtils.Simulate.submit($el.find("form")[0]);

    expect(spy).toHaveBeenCalledWith("Hello")

  });

  it("should not call the function that is passed down to it with invalid data", () => {
    var spy = expect.createSpy();
    var todoForm = TestUtils.renderIntoDocument(<TodoForm onAddTodo={spy}/>)

    var $el = $(ReactDOM.findDOMNode(todoForm));
    todoForm.refs.addTodo.value = "";
    TestUtils.Simulate.submit($el.find("form")[0]);

    expect(spy).toNotHaveBeenCalled();

  });
});
