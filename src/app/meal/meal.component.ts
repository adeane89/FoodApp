import { Component, OnInit, Input } from '@angular/core';
import { MealModel } from '../meal-model';
import { FavoritesModel } from '../favorites-model';
import { FavoritesItemModel } from '../favorites-item-model';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
    favorites: FavoritesModel;
    @Input()
    meal: MealModel;
  constructor(private favoritesService: FavoritesService) { }

  ngOnInit() {
      this.favorites = this.favoritesService.favorites;
  }

    addToCart() {
		let existingItem: FavoritesItemModel;
		existingItem = this.favorites.items.find(x => x.mealid == this.meal.idMeal);

		if(!existingItem) {
			this.favorites.items.push({ mealid: this.meal.idMeal, name: this.meal.strMeal, quantity: 1})
		} else {
			existingItem.quantity = existingItem.quantity + 1;
		}

		this.favorites.totalquantity = this.favorites.totalquantity + 1;
    }

}
