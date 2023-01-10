import {Pipe, PipeTransform} from "@angular/core"

@Pipe(
    {
        name : "convert" // nome del pipe utilizzato dentro la grafica
    }
)

export class IConversion implements PipeTransform{
    transform(valore: string, carattere: string) { // logica di conversione
        return valore.replace(carattere, "Pippo")
    }
}