import { JSChallenge } from "./classes";

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
    { func: "toProper", params: [`"ben"`], expected: `"Ben"`, isObj: false },
    ["String", "Functions"]
  ),
];

export const test = (func, params, expected, isObj) => {
  return `
  if (${func}(${params.join(",")}) === ${expected}) {
    console.log(
      \`\n\u2713 \n- PASSED \n- Expected ${expected}\`
    );
  } else {
    console.log(
      \`\n\u2716 \n- FAILED \n- Expected ${expected}\`
    );
  }`;
};

export default data;
