import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepperComponent } from './stepper/stepper.component';

import {MatStepperModule} from '@angular/material/stepper';
import { UniRowComponent } from './unirow/unirow.component';
import { MasServidoresClientesComponent } from './mas-servidores-clientes/mas-servidores-clientes.component';
import { UserKComponent } from './user-k/user-k.component';
import { UserMComponent } from './user-m/user-m.component';

import { FormsModule } from '@angular/forms';
import { UnirowOutputComponent } from './unirow-output/unirow-output.component';
import { ResulMasServidoresComponent } from './resul-mas-servidores/resul-mas-servidores.component';
import { UserMResultComponent } from './user-m-result/user-m-result.component';
import { ResultadoKClientesComponent } from './resultado-k-clientes/resultado-k-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    UniRowComponent,
    MasServidoresClientesComponent,
    UserKComponent,
    UserMComponent,
    UnirowOutputComponent,
    ResulMasServidoresComponent,
    UserMResultComponent,
    ResultadoKClientesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatStepperModule,
    FormsModule
  ],
  entryComponents: [UniRowComponent, MasServidoresClientesComponent, UserKComponent, UserMComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
