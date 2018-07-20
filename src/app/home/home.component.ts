import { Component, OnInit, Input } from '@angular/core';
import { MealModel } from '../meal-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FilterPipe } from '../filter.pipe';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    homeMeal: MealModel[];
    meal: MealModel;
    categories;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private location: Location) {
  }

    reloadMeals(){
        let id = this.route.snapshot.paramMap.get('id');
        if(id){
            this.httpClient.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + id).subscribe((results) => { this.homeMeal = results.meals; });
        } else {
            this.httpClient.get<MealModel[]>('./assets/meal.json').subscribe((results) => { this.homeMeal = results; });
        }
    }

  ngOnInit() {

      this.httpClient.get('https://www.themealdb.com/api/json/v1/1/categories.php').subscribe(
          (results) => {
              this.categories = results.categories;
          });
      this.reloadMeals();
  }
}
