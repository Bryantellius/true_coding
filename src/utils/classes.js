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
  }

  evaluateAnswer(a) {
    if (
      typeof this.test.expected == "array" ||
      typeof this.test.expected == "object"
    ) {
      if (_.isEqual(JSON.parse(a.slice(0, a.length - 2)), this.test.expected)) {
        return `\nRESULT: Challenge Passed!`;
      } else return `\nRESULT: Challenge Failed...`;
    } else {
      if (a.slice(0, a.length - 2) == String(this.test.expected)) {
        return `\nRESULT: Challenge Passed!`;
      } else return `\nRESULT: Challenge Failed...`;
    }
  }

  displayQ() {
    return this.q;
  }

  displayTags() {
    return this.test.map((tag) => (
      <span className="badge badge-secondary">{tag}</span>
    ));
  }
}
