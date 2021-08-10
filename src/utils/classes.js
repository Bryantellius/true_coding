import _ from "lodash/lang";

export class QandA {
  constructor(q, a, category = "general", sensitive = true) {
    this.q = q;
    this.a = a;
    this.cat = category;
    this.sensitive = sensitive;
  }

  evaluateAnswer(a) {
    return (this.sensitive ? a : a.toLowerCase()) ===
      (this.sensitive ? this.a : this.a.toLowerCase())
      ? "Correct!"
      : `Incorrect. The correct answer was '${this.a}'.`;
  }

  displayQ() {
    return this.q;
  }

  displayCat() {
    return this.cat;
  }
}

export class JSChallenge {
  constructor(q, test, tags = []) {
    this.q = q;
    this.test = test;
    this.tags = tags;
    this.starter = "// Start here";
    this.appendTest =
      "\n let result = " + this.test.case + ";\n console.log(result);";
  }

  evaluateAnswer(a) {
    if (typeof this.test.expected == "object") {
      if (_.isEqual(JSON.parse(a.slice(0, a.length - 2)), this.test.expected)) {
        return `\nRESULT: Challenge Passed!`;
      } else return `\nRESULT: Challenge Failed...`;
    } else {
      if (a == String(this.test.expected)) {
        return `\nRESULT: Challenge Passed!`;
      } else return `\nRESULT: Challenge Failed...`;
    }
  }

  displayQ() {
    return this.q;
  }

  displayTags() {
    return this.tags.map((tag) => (
      <span className="badge badge-primary mx-1">{tag}</span>
    ));
  }
}

export class CSChallenge {
  constructor(q, test, tags = []) {
    this.q = q;
    this.test = test;
    this.tags = tags;
    this.starter = `using System;\nclass Program {\n\t// Start Here\n\n}`;
    this.appendTest =
      `\n static void Test() { Console.WriteLine(${this.test.case});\n}\n}`;
  }

  evaluateAnswer(a) {
    if (typeof this.test.expected == "object") {
      if (_.isEqual(JSON.parse(a.slice(0, a.length - 2)), this.test.expected)) {
        return `\nRESULT: Challenge Passed!`;
      } else return `\nRESULT: Challenge Failed...`;
    } else {
      if (a == String(this.test.expected)) {
        return `\nRESULT: Challenge Passed!`;
      } else return `\nRESULT: Challenge Failed...`;
    }
  }

  displayQ() {
    return this.q;
  }

  displayTags() {
    return this.tags.map((tag) => (
      <span className="badge badge-primary mx-1">{tag}</span>
    ));
  }
}
