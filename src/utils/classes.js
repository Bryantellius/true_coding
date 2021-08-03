export class QandA {
  constructor(q, a) {
    this.q = q;
    this.a = a;
  }

  evaluateAnswer(a) {
    return a === this.a
      ? "Correct!"
      : `Incorrect. The correct answer was '${this.a}'.`;
  }

  displayQ() {
    return this.q;
  }
}
