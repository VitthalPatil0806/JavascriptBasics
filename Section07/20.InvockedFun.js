// Immediately invoked function expressions (iief)

// iief is used to avoid polution that happens due to global scoping

(function chai () { // named iief
    console.log(`db connected`);
})(); // semicolon must

((name) => { // unamed iief
    console.log(`db connected two ${name}`);
})('vitthal')
