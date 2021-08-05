import { JSChallenge } from "./classes";
import _ from "lodash/lang";

const data = [
  new JSChallenge(
    "Write a function called 'sum' that takes in two values, and returns the sum of the two values.",
    { func: "sum", params: [22, 22], expected: 44, isObj: false },
    ["Math", "Functions"]
  ),
  new JSChallenge(
    "Write a function called 'subtract' that takes in two values, and returns the subtraction of the two values.",
    { func: "subtract", params: [88, 22], expected: 66, isObj: false },
    ["Math", "Functions"]
  ),
  new JSChallenge(
    "Write a function called 'toProper' that takes in a string value, and returns the string with the first letter uppercased.",
    { func: "toProper", params: ["ben"], expected: "Ben", isObj: false },
    ["String", "Functions"]
  ),
  new JSChallenge(
    "FIZZBUZZ! Write a function called 'fizzbuzz' that takes in a number. Your function should return an array of numbers that increment from 1 to 'n' (number parameter). If the number is divisible by 3, 'FIZZ' should be the value instead of 3. If the number is divisible by 5, 'BUZZ' should be the value instead of 5. Only if the number is divisible by both 3 and 5 should 'FIZZBUZZ' be the value.",
    {
      func: "fizzbuzz",
      params: [15],
      expected: [
        1,
        2,
        "FIZZ",
        4,
        "BUZZ",
        "FIZZ",
        7,
        8,
        "FIZZ",
        "BUZZ",
        11,
        "FIZZ",
        13,
        14,
        "FIZZBUZZ",
      ],
      isObj: true,
    },
    ["Algorithms", "Functions"]
  ),
];

export const test = (func, params, expected, isObj) => {
  if (!isObj) {
    try {
      if (_.isEqual(window[func](params.join(",")), expected)) {
        return `
      console.log("@TEST@");
        console.log(
          \`\n\u2713 \n- PASSED \n- Expected ${expected}\`
        );`;
      } else {
        return `
      console.log("@TEST@");
        console.log(
          \`\n\u2717 \n- FAILED \n- Expected ${expected}\`
        );`;
      }
    } catch (error) {
      return `console.error(\`${error}\`)`;
    }
  } else {
    try {
      if (_.isEqual(window[func](params.join(",")), expected)) {
        return `console.log("@TEST@")
        \n\u2713 \n- PASSED \n- Expected ${expected}\`
        `;
      } else {
        return `console.log("@TEST@")
        \n\u2717 \n- FAILED \n- Expected ${expected}\`
        `;
      }
    } catch (error) {
      return `console.error(\`${error}\`)`;
    }
  }
};

export default data;
