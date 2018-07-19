import { Component, OnInit, Input } from '@angular/core';
import { MealModel } from '../meal-model';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
    @Input()
    meal: MealModel;
  constructor() { }

  ngOnInit() {
  }

}
