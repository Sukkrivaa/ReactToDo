var React = require("react");
var ReactDOM = require("react-dom");
var $ = require("jQuery");
var {Provider} = require("react-redux");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");
import {configure} from "configureStore";
import ConnectedTodoList, {TodoList} from "TodoList"
import ConnectedTodo, {Todo} from "Todo";

describe("TodoList", () => {
  it("should exist", () => {
      expect(ConnectedTodoList).toExist();
  });

  //Just like when testing TodoApp, we test if TodoList renders connected Todos - for that, we need the Provider
  it("should render 1 connected todo component for each todo item passes to it", () => {
    var todos = [{id:1, text:"doSomething", completed: false, completedAt: undefined, createdAt: 500},{id:2, text:"doSomethingElse",completed: false, completedAt: undefined, createdAt: 500}];
    var store = configure({
      todos
    });

    //We do this basically because to test if something is connected or not, we see if they have a connection to the store.
    //So we make a store with state that we manually put in
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>)
    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it("should render empty message if no todos", () => {
    var todos = [];
    var todolist = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(todolist));
    expect($el.find(".container__message").length).toBe(1); //One element inside
  });

});
