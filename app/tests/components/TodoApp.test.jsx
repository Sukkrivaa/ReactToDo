var React = require("react");
var ReactDOM = require("react-dom");
var $ = require("jQuery");
var {Provider} = require("react-redux");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");
var configureStore = require("configureStore");
var TodoApp = require("TodoApp");
import TodoList from "TodoList";


describe("TodoApp", () => {
  it("should exist", () => {
      expect(TodoApp).toExist();
  });

// This is how we test if something is connected --- We render the component in our test and compare it with the connected version
  it("should render connected TodoList", () => {
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    );

    var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);
  });

});
