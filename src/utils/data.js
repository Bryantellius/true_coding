import { QandA } from "./classes";

const data = [
  new QandA(
    (
      <span>
        var, let, and _____ are three declaration keywords for variables in
        JavaScript.
      </span>
    ),
    "const",
    "JS Keywords"
  ),
  new QandA(
    <span>_____ is the keyword for declaring a function.</span>,
    "function",
    "JS Keywords"
  ),
  new QandA(
    (
      <span>
        Declaring a variable with var will declare a _____ scoped variable.
      </span>
    ),
    "function",
    "JS Keywords",
    false
  ),
  new QandA(
    (
      <span>
        Declaring a variable with let or const will declare a _____ scoped
        variable.
      </span>
    ),
    "block",
    "JS Keywords",
    false
  ),
  new QandA(
    (
      <span>
        <code>"TrueCoders"</code> is an example of a _____ data type.
      </span>
    ),
    "string",
    "JS Data Types",
    false
  ),
  new QandA(
    (
      <span>
        <code>2017</code> is an example of a _____ data type.
      </span>
    ),
    "number",
    "JS Data Types",
    false
  ),
  new QandA(
    (
      <span>
        <code>true</code> is an example of a _____ data type.
      </span>
    ),
    "boolean",
    "JS Data Types",
    false
  ),
  new QandA(
    (
      <span>
        <code>1234567890987654321n</code> is an example of a _____ data type.
      </span>
    ),
    "BigInt",
    "JS Data Types",
    false
  ),
  new QandA(
    (
      <span>
        <code>null</code> is an example of a _____ data type.
      </span>
    ),
    "null",
    "JS Data Types",
    false
  ),
  new QandA(
    (
      <span>
        <code>undefined</code> is an example of a _____ data type.
      </span>
    ),
    "undefined",
    "JS Data Types",
    false
  ),
  new QandA(
    (
      <span>
        Strings, booleans, numbers, symbols, BigInts, Booleans, null and
        undefined are _____ data types.
      </span>
    ),
    "primitive",
    "JS Data Types",
    false
  ),
  new QandA(
    (
      <span>
        Objects, and any derivative of an object, are _____ data types.
      </span>
    ),
    "non-primitive",
    "JS Data Types",
    false
  ),
  new QandA(
    <span>What arithmetic operator is used for division remainder?</span>,
    "%",
    "JS Operators"
  ),
  new QandA(<span>What arithmetic operator is used for division?</span>, "/"),
  new QandA(<span>What arithmetic operator is used for addition?</span>, "+"),
  new QandA(
    <span>What arithmetic operator is used for exponentiation?</span>,
    "**",
    "JS Operators"
  ),
  new QandA(
    <span>What arithmetic operator is used for subtraction?</span>,
    "-",
    "JS Operators"
  ),
  new QandA(
    (
      <div>
        <span>What is y if</span>
        <br />
        <pre>
          <code>let x = 4;{"\n"}let y = 10 + x;</code>
        </pre>
      </div>
    ),
    "14",
    "JS Operators"
  ),
  new QandA(
    (
      <div>
        <span>What is y if</span>
        <br />
        <pre>
          <code>let x = 21;{"\n"}let y = 10 - x;</code>
        </pre>
      </div>
    ),
    "-11",
    "JS Operators"
  ),
  new QandA(
    (
      <div>
        <span>What is y if</span>
        <br />
        <pre>
          <code>let x = 2;{"\n"}let y = x ** 6;</code>
        </pre>
      </div>
    ),
    "64",
    "JS Operators"
  ),
  new QandA(
    (
      <div>
        <span>What is y if</span>
        <br />
        <pre className="my-2">
          <code>let x = 8;{"\n"}let y = 64 / x;</code>
        </pre>
      </div>
    ),
    "8",
    "JS Operators"
  ),
  new QandA(
    (
      <div>
        <span>What is y if</span>
        <br />
        <pre>
          <code>let x = 2;{"\n"}let y = 11 % x;</code>
        </pre>
      </div>
    ),
    "1",
    "JS Operators"
  ),
];

export default data;
