// In general each function should only do one thing and that one thing is what you should test
var React = require("react");
var ReactDOM = require("react-dom");
var $ = require("jQuery");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");

//Don't need the export defualt because we are not checking if it renders connected subcomponents
var {Todo} = require("Todo");

//Standard to see if a component exists or not
describe("Todo", () => {
  it("should exist", () => {
      expect(Todo).toExist();
  });

//This is how we check if an action has been dispatched
//We replace the function bound to dispatch with a spy and see if it has been called with the appropriate action
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
