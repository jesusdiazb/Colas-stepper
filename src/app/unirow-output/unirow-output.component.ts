import { Component, OnInit } from '@angular/core';
import { getValues } from 'src/getValues';

@Component({
  selector: 'app-unirow-output',
  templateUrl: './unirow-output.component.html',
  styleUrls: ['./unirow-output.component.css']
})
export class UnirowOutputComponent {

  constructor() { }

  ngOnInit(): void {
    const data = new getValues();
    console.log(data)
  }
}
