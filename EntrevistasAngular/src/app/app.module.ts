import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { AgGridModule} from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CrearEntrevistasComponent } from './components/crear-entrevistas/crear-entrevistas.component';
//import {MatDatepickerModule, MatInputModule,MatNativeDateModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrearEntrevistasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing,
    HttpClientModule,
   // MatDatepickerModule, MatInputModule,MatNativeDateModule,
    AgGridModule.withComponents([])
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
