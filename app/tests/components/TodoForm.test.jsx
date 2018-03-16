var React = require("react");
var ReactDOM = require("react-dom");
var $ = require("jQuery");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");

var {TodoForm} = require("TodoForm");


describe("TodoForm", () => {
  it("should exist", () => {
    expect(TodoForm).toExist();
  });

  it("should dispatch ADD_TODO when there is valid text", () => {
    var spy = expect.createSpy();
    var action = {
      type: "ADD_TODO",
      text: "Hello"
    } //Substitute for anAddTodo
    var todoForm = TestUtils.renderIntoDocument(<TodoForm dispatch={spy}/>)

    var $el = $(ReactDOM.findDOMNode(todoForm));
    todoForm.refs.addTodo.value = "Hello";
    TestUtils.Simulate.submit($el.find("form")[0]);

    expect(spy).toHaveBeenCalledWith(action)

  });

  it("should not dispatch ADD_TODO when invalid todo text", () => {
    var spy = expect.createSpy();
    var todoForm = TestUtils.renderIntoDocument(<TodoForm dispatch={spy}/>)

    var $el = $(ReactDOM.findDOMNode(todoForm));
    todoForm.refs.addTodo.value = "";
    TestUtils.Simulate.submit($el.find("form")[0]);

    expect(spy).toNotHaveBeenCalled();

  });
});
