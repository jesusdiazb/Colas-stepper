import { Component, OnInit } from '@angular/core';
import { getValues } from 'src/getValues';

@Component({
  selector: 'app-user-k',
  templateUrl: './user-k.component.html',
  styleUrls: ['./user-k.component.css']
})
export class UserKComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let values = new getValues();
    values.getValuesMClientes(4, 3, 3, 8);
  }

}
