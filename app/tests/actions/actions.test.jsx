var expect = require("expect");
var actions = require("actions");

describe("Actions", () => {
  it("should generate search test action", () => {
    var action = {
      type: "SET_SEARCH_TEXT",
      searchText: "Some Search Text"
    }

    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });


  it("should generate add todo action", () => {
    var action = {
      type: "ADD_TODO",
      text: "Things to do"
    }

    var res = actions.addTodo(action.text);
    expect(res).toEqual(action);
  });

  it("should generate toggle todo action", () => {
    var action = {
      type: "TOGGLE_TODO",
      id: 2
    }

    var res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  });

  it("should generate toggle show completed action", () => {
    var action = {
      type: "TOGGLE_SHOW_COMPLETED",
    }

    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it("should generate ADD_TODOS action", () => {
    var todos = [{
      id: 111,
      text: "anything",
      completed: false,
      completedAt: undefined,
      createdAt: 3455623712
    }];

    var action = {
      type: "ADD_TODOS",
      todos
    }

    var res = actions.addTodos(todos);
    expect(res).toEqual(action);
  });

});
