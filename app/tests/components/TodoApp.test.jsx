var React = require("react");
var ReactDOM = require("react-dom");
var $ = require("jQuery");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");

var TodoApp = require("TodoApp");

describe("TodoApp", () => {
  it("should exist", () => {
      expect(TodoApp).toExist();
  });

  it("should add todo to the todos state on handleAddTodo", () => {
    var todoText = "test Text";
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    //createdAt is a number
    expect(todoApp.state.todos[0].createdAt).toBeA("number");
  });


  it("should toggle completed value when handleToggle called", () => {
    var todoData = {
      id: 11,
      text: "Test features",
      completed: false,
      createdAt: 0,
      completedAt: undefined
    }

    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);

    todoApp.handleToggle(11);

    expect(todoApp.state.todos[0].completed).toBe(true);
    //CompletedAt is a number
    expect(todoApp.state.todos[0].completedAt).toBeA("number")
  });

  //From completed to incomplete
  it("should make the completedAt change from a number to undefined", () => {
    var todoData = {
      id: 11,
      text: "Test features",
      completed: true,
      createdAt: 0,
      completedAt: 937842
    }

    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });

});
