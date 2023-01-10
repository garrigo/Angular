import {Pipe, PipeTransform} from "@angular/core"
import { IProdotto } from "src/app/Interface/IProdotto";

@Pipe(
    {
        name : "saldo" // nome del pipe utilizzato dentro la grafica
    }
)

export class ISaldo implements PipeTransform{
    transform(prodotti: Array<IProdotto>) { // logica di conversione
        let somma:number = 0;
        for (let prod of prodotti){
            somma += prod.costo;
        }
        return somma;
    }
}