import { CSChallenge, JSChallenge } from "./classes";

const data = {
  javascript: [
    new JSChallenge(
      "Create a variable named 'firstName' and assign a string value of 'My Name' to it.",

      { case: "firstName", expected: "My Name" },
      ["Strings", "Variables"]
    ),
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
  ],
  csharp: [
    new CSChallenge(
      "Write a method named 'AreTwoNumbersTheSame' that takes in two int values, and returns the true or false depending of if the numbers are the same value.",
      { case: "Program.Main(32, 23)", expected: false },
      ["Numbers", "Comparison"]
    ),
  ],
};

export default data;
