// Variabler

const navn = "Ola Nordmann"; // String
let alder = 30; // Number
const erElev = true; // Boolean
// I Javscript bruker vi camelCase for variabelnavn
// Hovedforskjellen på const og let er at const ikke kan endres etter at den er satt

// Console.log()
console.log(navn);
// Her printer vi variabelen "navn" til konsollen i nettleseren
// Åpne HTML-filen i nettleseren, høyreklikk og velg "Inspect", deretter velger du "Console"-fanen
// Her vil du kunne se alt som printes fra console.log()

console.log("Hei, mitt navn er " + navn + " og jeg er " + alder + " år gammel.");
// Her printer vi en setning som inkluderer variablene "navn" og "alder"
// Vi bruker + for å sette sammen (konkatinere) strenger og variabler


// Funksjoner
function helloWorld() {
    console.log("Hello, World!");
}

helloWorld(); // Kaller på funksjonen helloWorld


function helloName(navn) {
    console.log("Hei, " + navn + "!");
}

helloName("Kari"); // Kaller på funksjonen helloName med argumentet "Kari"
helloName("Ola"); // Kaller på funksjonen helloName med argumentet "Ola"


// Funksjoner med return-verdi
function helloWorldReturn() {
    return "Hello, World!";
}

console.log(helloWorldReturn()); // Printer resultatet av funksjonen helloWorldReturn til konsollen

// Her har vi en funksjon som tar to argumenter (a og b) og returnerer produktet av de to
function multiply(a, b) {
    return a * b;
}

multiply(2, 3); // Returnerer 6
console.log(multiply(4, 5)); // Printer 20 til konsollen

let resultatet = multiply(6, 7);
console.log(resultatet); // Printer 42 til konsollen
