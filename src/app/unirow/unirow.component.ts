import { Component, OnInit } from '@angular/core';
import { StepperComponent } from '../stepper/stepper.component';
import { getValues } from 'src/getValues';

@Component({
  selector: 'app-unirow',
  templateUrl: './unirow.component.html',
  styleUrls: ['./unirow.component.css']
})
export class UniRowComponent implements OnInit {

  ngOnInit(): void {
    let values = new getValues();

    values.getValuesUnfila(4, 4, 3);
  }

}
