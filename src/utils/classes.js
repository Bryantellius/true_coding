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
    return `\nRESULT: ${a(...this.test.params) || "No returned value :/"}`;
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
