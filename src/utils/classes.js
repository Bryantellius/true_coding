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
