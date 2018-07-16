import assert from "assert";
// import { assert } from "chai";
import chai, { expect } from "chai";

// Assert
// Node assert
describe("Our first test group", () => {
  describe("#Math Group", () => {
    it("should return 4", () => {
      assert.equal(2 + 2, 4);
    });
  });
});

// without an assertion library
describe("Second block of tests", () => {
  it("should fail", () => {
    throw new Error();
    return null;
  });
  it("should pass", () => {
    return null;
  });
});

// BDD

// Chai Expect

describe("Using Chai Expect BDD Style", () => {
  const foo = "bar";
  it("expects foo to be a string", () => {
    expect(foo).to.be.a.toString("string");
  });
  it("expects foo to equal bar", () => {
    expect(foo).to.equal("bar");
  });
  it("expects foo to be 3 letters long", () => {
    expect(foo).to.have.lengthOf(3);
  });
});

// Chai Should

// The difference is *should* is a function call and we need to invoke it.
const should = chai.should();

describe("Using Chai Should BDD", () => {
  it("should should exist on Object.prototype", () => {
    should.exist(Object.prototype.should);
  });
  it("should should not exist on Object.prototype", () => {
    should.not.exist(Object.prototype.should);
  });
  it("should demonstrate a passing test calling should on a new object", () => {
    const myObject = { foo: "bar" };
    myObject.should.have.property("foo");
  });
});
