import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SorteioComponent } from './sorteio/sorteio.component';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditarComponent } from './editar/editar.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'sorteio', component: SorteioComponent},
  { path: 'lista', component: ListaComponent},
  { path: 'editar/:id', component: EditarComponent},
  { path: '**', component: PageNotFoundComponent},

];

@NgModule({
  
  imports: [    
    RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],

})


export class AppRoutingModule { }
