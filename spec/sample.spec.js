//const hello = require("../sample.js");
var assert = require("assert");
var path = require("path");
var helper = require("../spec/helper");

describe("sample", function () {
  before(() => {
    helper.loadDependency(path.join(__dirname, "../src/sample.js"));
  });
  describe("#hello(to)", function () {
    it("should return hello world when the value world", function () {
      const expected = "hello world";
      const actual = hello("world");

      assert.equal(actual, expected);
    });
  });
});
