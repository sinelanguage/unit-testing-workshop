# unit-testing-workshop

Unit Testing Workshop

## Agenda

### Part One

1.  Cover Mocha basics.
2.  Setup Mocha
3.  How to group tests
4.  How to use an assertion library

### Part Two

Advanced small scale real world examples of how to use Mocha for testing.

## Setup

### Install mocha Globally

`npm install -g mocha`

Now that it is installed globally, we can use the module from the command line. We can also call it from node, our package.json now has:

```js
"scripts": {
  "test": "mocha"
},
```

this means we can write mocha tests in es5, but we want es6, so we install babel, babel-core, and babel-present-env and we change our script to this in package.json.

```js
 "scripts": {
    "test": "mocha --compilers js:babel-core/register test.js"
  },
```

### Your first test

```js
import assert from "assert";

describe("Our first test group", () => {
  describe("#Math Group", () => {
    it("should return 4", () => {
      assert.equal(2 + 2, 4);
    });
  });
});
```

**What is all this ?**

Its Mocha. Mocha is a testing framework which means its used to organize and execute tests.

The tests themselves adhere to the framework guidelines, but they are in no way propriatery to the testing framework, they are just Javascript like any other logic with a framework you would write, like using React to make UI.

There are two functions you will call most of the time you write tests and most frameworks have them. `describe()` and `it()`

describe() is to group tests. They can be nested.
describe() takes two arguments, the first is the name of the test group, and the second is a callback function.

```js
describe("string name", function() {
  // can nest more describe()'s here, or tests go here
});
```

it() is used for an individual test case. it() should be written as if you were saying it out loud: “It should equal zero”, “It should log the user in”, etc. it() takes two arguments, a string explaining what the test should do, and a callback function which contains our actual test:

```js
it("should blah blah blah", function() {
  // Test case goes here
});
```

**Assertions**

`assert.equal()`
An assertion library is a tool to verify things are correct - It’s what actually verifies the test results.

You don't need to use one, but they make life easier.
Here's examples not using them. Basically testing frameworks will fail if a fn throws an error. Thats it.

```js
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
```

Node has an assert library built in, and since we are running in a node environment, meaning `npm test or npm run whatever` is executing scripts and commands and code and functions in node js., anyways, we can use Node's assert library without installing any of the other ones available.

And since are using babel and ES6, we can just import it.

`import assert from "assert";`

There are a number of different assertion tests included with assert . The one we’ve already used is `assert.equal(actual, expected)`; This tests equality between our actual and expected parameters using double equals (==).

All we’re doing here is testing if 2 + 2; is equal to 4. If our expected parameter equals our actual parameter, the test passes. If it doesn’t, the test fails. It will throw an error which signals the testing framework reporter that it failed.

# Chai

Chai is the assertion library of choice in our Electrode installation

## Install

`npm install chai`

## Asertion Styles

### There are 3 Assertion styles we will use

### Assert

Similar to the assert lib of native Node. We use dot notation to call its methods.

```js
// using es6
import { assert } from "chai";

const foo = "bar";
assert.typeOf(foo, "string");
```

### BDD

The BDD style is exposed through expect or should interfaces. In both scenarios, you chain together natural language assertions.

#### Expect

Uses natural language chaining API

```js
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
```

#### Should

The should style allows for the same chainable assertions as the expect interface. The way it works is whats different. When you call `chai.should()` it adds a `should` property to Object.prototype. `Object.prototype.should`
