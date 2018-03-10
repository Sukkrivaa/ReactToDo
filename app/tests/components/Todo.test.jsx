var React = require("react");
var ReactDOM = require("react-dom");
var $ = require("jQuery");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");

var Todo = require("Todo");

describe("Todo", () => {
  it("should exist", () => {
      expect(Todo).toExist();
  });

  it("should call onToggle when id onClick", () => {
    var spy = expect.createSpy();
    var todoData = {
      id: 131,
      text: "Test features",
      completed: false
    }

    var todo = TestUtils.renderIntoDocument(<Todo key={todoData.id} {...todoData} onToggle={spy}/>)
    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(131);

  });

});
