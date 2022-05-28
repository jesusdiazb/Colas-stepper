import { Component, OnInit } from '@angular/core';
import { getValues } from 'src/getValues';

@Component({
  selector: 'app-user-m',
  templateUrl: './user-m.component.html',
  styleUrls: ['./user-m.component.css']
})
export class UserMComponent implements OnInit {

  ngOnInit(): void {
    let values = new getValues();
    values.getValuesMClientes(4, 3, 3, 4);
  }

}
