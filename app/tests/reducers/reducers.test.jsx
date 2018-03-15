var expect = require("expect");
var reducers = require("reducers");
var df = require("deep-freeze-strict"); //To check for pure functions

describe("Reducers", () => {
  describe("searchTextReducer", () => {
    it("should set searchText", () => {
      var action = {
        type: "SET_SEARCH_TEXT",
        searchText: "DOG"
      }
      var res = reducers.searchTextReducer(df(""), df(action));
      expect(res).toEqual(action.searchText);
    });
  });


  describe("showCompletedReducer", () => {
    it("showCompleted status gets flipped", () => {
      var action = {
        type: "TOGGLE_SHOW_COMPLETED"
      }
      var res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toBe(true);
      res = reducers.showCompletedReducer(df(res), df(action));
      expect(res).toBe(false);
    });
  });

  describe("todosReducer", () => {
    it("should add new todo", () => {
      var action = {
        type: "ADD_TODO",
        text: "Walk the dog"
      }

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toBe(1);
      expect(res[0].text).toBe(action.text);
    });


    it("should toggle todo when called", () => {
      var todos = [{
        id: 3547654 ,
        text: "hjdasd",
        completed: false,
        createdAt: 23,
        completedAt: undefined
      },{
      id: 62715686358,
      text: "sdjhcgw",
      completed: false,
      createdAt: 832,
      completedAt: undefined
    }
    ]

    var action = {
      type: "TOGGLE_TODO",
      id: 62715686358
    }

    var res = reducers.todosReducer(df(todos), df(action));

    expect(res[1].completed).toBe(true);
    expect(res[1].completedAt).toBeA("number");

    });

  });


});
