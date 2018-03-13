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


  describe("filterTodos", () => {
    var todos = [{
      id: 1,
      text: "some text here",
      completed: true
    },
    {
      id: 2,
      text: "Other text here",
      completed: false
    },
    {
      id: 3,
      text: "Some text here",
      completed: true
    }
  ];

  it("should return all items if showCompleted is true", () => {
    var filteredTodos = TodoApi.filterTodos(todos, true, "");
    expect(filteredTodos.length).toBe(3);
  });

  it("should return only showCompleted-false items if showCompleted is false", () => {
    var filteredTodos = TodoApi.filterTodos(todos, false, "");
    expect(filteredTodos.length).toBe(1);
  });

  it("should sort by completed function" , () => {
    var filteredTodos = TodoApi.filterTodos(todos,true,"");
    expect(filteredTodos[0].completed).toBe(false);
  })

  it("should filter by searchText if the searchText is valid", () => {
    var filteredTodos = TodoApi.filterTodos(todos,true,"other");
    expect(filteredTodos[0].text).toBe("Other text here");
  });

  it("should not filter by searchText if the searchText is invalid", () => {
    var filteredTodos = TodoApi.filterTodos(todos,true,"");
    expect(filteredTodos.length).toBe(3);
  });

  });

});
