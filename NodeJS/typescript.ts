var nome : string = "Daniele";
var cognome : string = "Lamberti";
var anni : number = 15;

interface ICity {
    nome : string,
    stato : string
}

interface IPersona  {
    nome : string,
    cognome : string,
    anni  : number,
    sport? : string //Opzionale
    city? : ICity
}

var totti : IPersona = {
    nome : 'Francesco',
    cognome : "Totti",
    anni  : 15,
    sport : "Calcio",
    city : {
        nome : "London",
        stato : "UK"
    }
};

var blasi : IPersona = {
    nome : 'Ilary',
    cognome : "Blasi",
    anni  : 15,
    city : {
        nome : "Paris",
        stato : "France"
    }
};

var anagrafica : Array<IPersona> = [totti, blasi];
var anagrafica2 : IPersona[] = [totti, blasi];

console.log(anagrafica);
console.log(anagrafica2);

class Animale {
    nome : string;
    razza : string;
    anni : number;
    private padrone : string;
    constructor(nome:string, razza:string, anni:number){
        this.nome = nome;
        this.razza = razza;
        this.anni = anni;
    }

    public static StaticMethod() : void {}

    setNomePadrone(nome) : void {
        this.padrone = nome;
    }
    getNomePadrone() : string {
        return this.padrone;
    }
}

var gatto : Animale = new Animale("Kuma", "Meticcio", 3);
console.log(gatto);