import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SorteioComponent } from './sorteio/sorteio.component';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditarComponent } from './editar/editar.component';






@NgModule({
  
  imports: [
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    SorteioComponent,
    ListaComponent,
    PageNotFoundComponent,
    EditarComponent,
  ],
  
  
})

export class AppModule { }
