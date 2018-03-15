var expect = require("expect");
var reducers = require("reducers");

describe("Reducers", () => {
  describe("searchTextReducer", () => {
    it("should set searchText", () => {
      var action = {
        type: "SET_SEARCH_TEXT",
        searchText: "DOG"
      }
      var res = reducers.searchTextReducer("", action);
      expect(res).toBe(action.searchText);
    });
  });
});
