var React = require("react");
var ReactDOM = require("react-dom");
var $ = require("jQuery");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");

var TodoList = require("TodoList");

describe("TodoList", () => {
  it("should exist", () => {
      expect(TodoList).toExist();
  });
});
