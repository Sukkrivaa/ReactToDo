var expect = require("expect");

var TodoApi = require("TodoApi");

describe("TodoApi", () => {
  beforeEach(() => {
    localStorage.removeItem("todos");
  });
  it("should exist", () => {
    expect(TodoApi).toExist();
  });

  describe("setTodos", () => {
      it("should set valid todos array", () => {
        var todos = [{
          id: 23,
          text: "test all files",
          completed: false
        }];

        TodoApi.setTodos(todos);
        var actualTodos = JSON.parse(localStorage.getItem('todos'))
        expect(actualTodos).toEqual(todos);
      });


      it("should not set invalid todos array", () => {
        var todos = {a: "b"};
        TodoApi.setTodos(todos);

        expect(localStorage.getItem("todos")).toBe(null);
      });
  });

  describe("getTodos", () => {
    it("should return an empty array for bad localstorage data", () => {
      var actualTodos = TodoApi.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it("should return an array for valid data", () => {
      var todos = [{
        id: 23,
        text: "test all files",
        completed: false
      }];

      localStorage.setItem("todos", JSON.stringify(todos));
      var actualTodos = TodoApi.getTodos();

      expect(actualTodos).toEqual(todos);
    });



  });

});
