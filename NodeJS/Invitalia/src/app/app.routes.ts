import { Routes } from "@angular/router";
import { MagazzinoComponent } from "./magazzino/magazzino.component";
import { FornitoriComponent } from "./fornitori/fornitori.component";
import { ClientiComponent } from "./clienti/clienti.component";


// Regole di routing 
// path = chiamata che arriva al server
// component = componente da montare
// quando arriva un componente, dice di smontare gli altri
export const AppRoutes : Routes = [
    { path : "magazzino", component : MagazzinoComponent},
    { path : "fornitori", component : FornitoriComponent},
    { path : "clienti/:nomeCliente/:anniCliente", component : ClientiComponent}
]
