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
});
