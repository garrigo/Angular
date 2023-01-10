import { IProdotto } from "./IProdotto";

export interface IFattura  {
    numero:number;
    data:string;
    city:string;
    prodotti: Array<IProdotto>
}