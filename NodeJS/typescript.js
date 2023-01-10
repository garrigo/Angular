var nome = "Daniele";
var cognome = "Lamberti";
var anni = 15;
var totti = {
    nome: 'Francesco',
    cognome: "Totti",
    anni: 15,
    sport: "Calcio",
    city: {
        nome: "London",
        stato: "UK"
    }
};
var blasi = {
    nome: 'Ilary',
    cognome: "Blasi",
    anni: 15,
    city: {
        nome: "Paris",
        stato: "France"
    }
};
var anagrafica = [totti, blasi];
var anagrafica2 = [totti, blasi];
console.log(anagrafica);
console.log(anagrafica2);
var Animale = /** @class */ (function () {
    function Animale(nome, razza, anni) {
        this.nome = nome;
        this.razza = razza;
        this.anni = anni;
    }
    Animale.prototype.setNomePadrone = function (nome) {
        this.padrone = nome;
    };
    Animale.prototype.getNomePadrone = function () {
        return this.padrone;
    };
    return Animale;
}());
var gatto = new Animale("Kuma", "Meticcio", 3);
console.log(gatto);
