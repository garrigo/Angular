import {Pipe, PipeTransform} from "@angular/core"

@Pipe(
    {
        name : "iva" // nome del pipe utilizzato dentro la grafica
    }
)

export class ICalcoloIva implements PipeTransform{
    transform(importo: number, iva : number) { // logica di conversione
        return importo*iva/100 + importo;
    }
}