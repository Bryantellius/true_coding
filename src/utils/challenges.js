import { JSChallenge } from "./classes";

const data = [
  new JSChallenge(
    "Write a function called 'sum' that takes in two values, and returns the sum of the two values.",

    { case: "sum(10, 2)", expected: 12 },
    ["Math", "Functions"]
  ),
  new JSChallenge(
    "Write a function called 'subtract' that takes in two values, and returns the subtraction of the two values.",
    { case: "subtract(10, 2)", expected: 10 - 2 },
    ["Math", "Functions"]
  ),
  new JSChallenge(
    "Write a function called 'toProper' that takes in a string value, and returns the string with the first letter uppercased.",
    { case: "toProper('ben')", expected: "Ben" },
    ["String", "Functions"]
  ),
];

export default data;
