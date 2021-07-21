// In dieser Übung werden wir den Unterschied zwischen let, const und var lernen.

// Deklariere die Variable var z mit dem Wert 34.
// Überschreibe z anschliessend mit dem Wert 67.
// Gib den Wert von z in der Konsole aus.
// Danach kommentiere deinen Code aus.

// Deklariere die Variable let x mit dem Wert 34.
// Überschreibe x anschliessend mit dem Wert 67.
// Gib den Wert x in der Konsole aus.
// Danach kommentiere deinen Code aus.


// Deklariere die Variable const y mit dem Wert 34.
// Überschreibe y anschliessend mit dem Wert 67.
// Gib den Wert y in der Konsole aus.
// Danach kommentiere deinen Code aus.

// Was ist der Unterschied?

// var z = 34;
// var z = 67;
// console.log(z);

// nicht erlaubt
// let x = 34;
// let x = 64;
// erlaubt
// let x = 34;
// x = 64;
// console.log(x);

const y = 34;
const y = 67;
// const ist const 
// funktioniert nicht
// const y = 34;
// y = 67;
console.log(y);

// Block Scope = Gültigigkeitbereich innerhalb von geschweiften Klammern 

// let:
// Das let-Schlüsselwort wurde in ES6 (2015) eingeführt.
// Mit let definierte Variablen können nicht neu deklariert werden.
// Mit let definierte Variablen müssen vor der Verwendung deklariert werden. deklariert ost Variablenname geben
// Mit let definierte Variablen haben Blockumfang {}.

// CONST:
// Das Schlüsselwort const wurde in ES6 (2015) eingeführt.
// Mit const definierte Variablen können nicht umdeklariert werden.
// Mit const definierte Variablen können nicht neu zugewiesen werden.
// Mit const definierte Variablen haben Blockumfang.


