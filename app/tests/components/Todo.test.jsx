var React = require("react");
var ReactDOM = require("react-dom");
var $ = require("jQuery");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");

var {Todo} = require("Todo");

describe("Todo", () => {
  it("should exist", () => {
      expect(Todo).toExist();
  });

  it("should dispatch TOGGLE_TODO action on onClick", () => {
    var spy = expect.createSpy();
    var todoData = {
      id: 131,
      text: "Test features",
      completed: false
    }

    var todo = TestUtils.renderIntoDocument(<Todo key={todoData.id} {...todoData} dispatch={spy}/>)
    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith({
      type: "TOGGLE_TODO",
      id: todoData.id
    });

  });

});
