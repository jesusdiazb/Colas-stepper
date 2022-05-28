import { Component, OnInit } from '@angular/core';
import { UserKComponent } from '../user-k/user-k.component';
import { UserMComponent } from '../user-m/user-m.component';
import { MasServidoresClientesComponent } from '../mas-servidores-clientes/mas-servidores-clientes.component';
import { ResulMasServidoresComponent } from '../resul-mas-servidores/resul-mas-servidores.component';
import { ResultadoKClientesComponent } from '../resultado-k-clientes/resultado-k-clientes.component';
import { UserMResultComponent } from '../user-m-result/user-m-result.component';
import { UnirowOutputComponent } from '../unirow-output/unirow-output.component';
import { UniRowComponent } from '../unirow/unirow.component';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

  }

  dummyComponent = UniRowComponent;
  dummyComponent2 = UnirowOutputComponent;

  assignComponent(component:string){
    if(component === 'uni'){
      this.dummyComponent = UniRowComponent;
      this.dummyComponent2 = UnirowOutputComponent;
    } else if (component === 'msercli'){
      this.dummyComponent = MasServidoresClientesComponent;
      this.dummyComponent2 = ResulMasServidoresComponent;
    } else if (component === 'kcli'){
      this.dummyComponent = UserKComponent;
      this.dummyComponent2 = ResultadoKClientesComponent;
    } else{
      this.dummyComponent = UserMComponent;
      this.dummyComponent2 = UserMResultComponent
    }
  }

}
