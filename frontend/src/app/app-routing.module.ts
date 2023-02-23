import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SorteioComponent } from './sorteio/sorteio.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'sorteio', component: SorteioComponent},
  { path: 'lista', component: ListaComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SorteioComponent,
    ListaComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],

})


export class AppRoutingModule { }
