import { Component, OnInit, Input } from '@angular/core';
import { MealModel } from '../meal-model';
import { FavoritesModel } from '../favorites-model';
import { FavoritesItemModel } from '../favorites-item-model';
import { FavoritesService } from '../favorites.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
    favorites: FavoritesModel;
    @Input()
    meal : MealModel;

  constructor(private httpClient: HttpClient, private favoritesService: FavoritesService) { }

  ngOnInit() {
      this.favorites = this.favoritesService.favorites;
      console.log(this.meal.idMeal)
      this.httpClient.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + this.meal.idMeal).subscribe((results: any) =>{
          this.meal = results.meals[0];
      })
  }
pushed: boolean = false;

    addToCart() {
		let existingItem: FavoritesItemModel;
		existingItem = this.favorites.items.find(x => x.mealid == this.meal.idMeal);

		if(!existingItem) {
			this.favorites.items.push({ mealid: this.meal.idMeal, name: this.meal.strMeal, category: this.meal.strCategory, picture: this.meal.strMealThumb, quantity: 1});
            this.favorites.totalquantity = this.favorites.totalquantity + 1;
		} else {
			existingItem.quantity = existingItem.quantity;
		} this.pushed = true;
    }
}
