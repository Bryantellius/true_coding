import { QandA } from "./classes";

const data = [
  new QandA(
    (
      <span>
        var, let, and _____ are three declaration keywords for variables in
        JavaScript.
      </span>
    ),
    "const"
  ),
  new QandA(
    <span>What arithmetic operator is used for division remainder?</span>,
    "%"
  ),
  new QandA(<span>What arithmetic operator is used for division?</span>, "/"),
  new QandA(<span>What arithmetic operator is used for addition?</span>, "+"),
  new QandA(
    <span>What arithmetic operator is used for exponentiation?</span>,
    "**"
  ),
  new QandA(
    <span>What arithmetic operator is used for subtraction?</span>,
    "-"
  ),
  new QandA(
    (
      <span>
        What is y if <br />
        <code>let x = 4; let y = 10 + x;</code>?
      </span>
    ),
    "14"
  ),
  new QandA(
    (
      <span>
        What is y if <br />
        <code>let x = 21; let y = 10 - x;</code>?
      </span>
    ),
    "-11"
  ),
  new QandA(
    (
      <span>
        What is y if <br />
        <code>let x = 2; let y = x ** 6;</code>?
      </span>
    ),
    "64"
  ),
  new QandA(
    (
      <span>
        What is y if <br />
        <code>let x = 8; let y = 64 / x;</code>?
      </span>
    ),
    "8"
  ),
  new QandA(
    (
      <span>
        What is y if <br />
        <code>let x = 2; let y = 11 % x;</code>?
      </span>
    ),
    "1"
  ),
];

export default data;
