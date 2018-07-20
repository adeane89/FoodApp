import { Component, OnInit, Input } from '@angular/core';
import { MealModel } from '../meal-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    homeMeal: MealModel[];
    title:String;
    names:any;
    meal: MealModel;
  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
      this.httpClient.get<MealModel[]>('./assets/meal.json').subscribe((results) => {this.homeMeal = results});
  }

}
