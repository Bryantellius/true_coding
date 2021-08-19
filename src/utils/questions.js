import { QandA } from "./classes";

const data = {
  html: [
    new QandA(
      (
        <span>
          <code>{"<!-- -->"}</code> is an example of a _____ in HTML.
        </span>
      ),
      "comment",
      "Language Features",
      false
    ),
    new QandA(
      <span>True or false. HTML is case sensitive.</span>,
      "false",
      "Language Facts",
      false
    ),
    new QandA(
      <span>HTML stands for _____.</span>,
      "Hypertext Markup Language",
      "Language Facts",
      false
    ),
    new QandA(
      <span>_____ is the latest release of HTML.</span>,
      "HTML5",
      "Language Facts",
      false
    ),
    new QandA(
      <span>_____ is recognized as the creator of HTML.</span>,
      "Tim Berners-Lee",
      "Language Facts",
      false
    ),
    new QandA(
      (
        <span>
          True or false. <code>{"<div>"}</code> is an example of an opening tag.
        </span>
      ),
      "true",
      "Language Features",
      false
    ),
    new QandA(
      (
        <span>
          True or false. <code>{"</div>"}</code> is an example of a tag's text
          content.
        </span>
      ),
      "false",
      "Language Features",
      false
    ),
    new QandA(
      (
        <span>
          True or false. <code>{"</div>"}</code> is an example of a closing tag.
        </span>
      ),
      "true",
      "Language Features",
      false
    ),
    new QandA(
      <span>List the tag that defines a hyperlink. (inline)</span>,
      "<a>",
      "Tags",
      false
    ),
    new QandA(
      <span>List the tag that defines a division. (block)</span>,
      "<div>",
      "Tags",
      false
    ),
    new QandA(
      <span>List the tag that defines a paragraph. (block)</span>,
      "<p>",
      "Tags",
      false
    ),
    new QandA(
      <span>List the tag that defines a heading one. (block)</span>,
      "<h1>",
      "Tags",
      false
    ),
    new QandA(
      <span>List the tag that defines a button. (inline)</span>,
      "<button>",
      "Tags",
      false
    ),
    new QandA(
      <span>List the tag that emphasizes text as italics. (inline)</span>,
      "<em>",
      "Tags",
      false
    ),
    new QandA(
      <span>List the tag that emphasizes text as important. (inline)</span>,
      "<strong>",
      "Tags",
      false
    ),
    new QandA(
      <span>List the tag that defines an input control. (inline)</span>,
      "<input>",
      "Tags",
      false
    ),
    new QandA(
      <span>List the tag that defines an unordered list. (block)</span>,
      "<ul>",
      "Tags",
      false
    ),
    new QandA(
      <span>List the tag that defines an ordered list. (block)</span>,
      "<ol>",
      "Tags",
      false
    ),
    new QandA(
      <span>List the tag that defines a list item. (block)</span>,
      "<li>",
      "Tags",
      false
    ),
    new QandA(
      <span>List the tag that contains navigation links. (inline)</span>,
      "<nav>",
      "Tags",
      false
    ),
    new QandA(
      <span>List the tag that defines a progress bar. (inline)</span>,
      "<progress>",
      "Tags",
      false
    ),
    new QandA(
      <span>List the tag that contains a section of content. (block)</span>,
      "<section>",
      "Tags",
      false
    ),
    new QandA(
      <span>List the tag that contains a section of content. (inline)</span>,
      "<span>",
      "Tags",
      false
    ),
    new QandA(
      <span>List the tag that contains the main content. (block)</span>,
      "<main>",
      "Tags",
      false
    ),
    new QandA(
      <span>List the tag that defines a table.</span>,
      "<table>",
      "Tags",
      false
    ),
    new QandA(
      <span>List the tag that defines a table header.</span>,
      "<thead>",
      "Tags",
      false
    ),
    new QandA(
      <span>List the tag that defines a table body.</span>,
      "<tbody>",
      "Tags",
      false
    ),
    new QandA(
      <span>List the tag that defines a table row.</span>,
      "<tr>",
      "Tags",
      false
    ),
    new QandA(
      <span>List the tag that defines a table data cell.</span>,
      "<td>",
      "Tags",
      false
    ),
    new QandA(
      <span>List the tag that defines a table header cell.</span>,
      "<th>",
      "Tags",
      false
    ),
    new QandA(
      <span>List the tag that defines embedded video content. (inline)</span>,
      "<video>",
      "Tags",
      false
    ),
    new QandA(
      <span>List the tag that defines embedded audio content. (inline)</span>,
      "<audio>",
      "Tags",
      false
    ),
    new QandA(
      <span>List the tag that defines an image. (inline)</span>,
      "<img>",
      "Tags",
      false
    ),
    new QandA(
      <span>List the tag that defines a svg graphic. (inline)</span>,
      "<svg>",
      "Tags",
      false
    ),
  ],
  css: [],
  javascript: [
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
  ],
};

export default data;
