var somma = (num1, num2) => {
    return num1 + num2;
}
var sottrai = (num1, num2) => {
    return num1 - num2;
}
var moltiplica = (num1, num2) => {
    return num1 * num2;
}
var dividi = (num1, num2) => {
    return num1 / num2;
}

// Rendi "pubbliche" le funzioni all'esterno 
exports.somma = somma;
exports.moltiplica = moltiplica;

// Le funzioni sottrai e dividi non vengono esposte