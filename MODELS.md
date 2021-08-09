# Application Models

## Challenge Object

- Properties

```
{
    q: string;
    a: string;
    cat: string;
    sensitive: boolean;
}
```

- Methods

```
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
```
