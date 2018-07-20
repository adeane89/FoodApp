import { Component, OnInit, Input } from '@angular/core';
import { AddRecipeModel } from '../add-recipe-model';
import { MealModel } from '../meal-model';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
    @Input()
	meal: MealModel;

	newRecipe: AddRecipeModel;
  constructor() { }

  ngOnInit() {

	  this.newRecipe = {
          id: -1,
          createddate: "",
          creator: "",
          ingredients: "",
          instructions: "",
          category: "",
          mealName: ""
	  }
  }

	submitClicked(){
		if(!this.meal.addRecipe){

        this.meal.addRecipe = [];
		}

		this.meal.addRecipe.push(this.newRecipe);
		this.newRecipe = {
		   id: -1,
          createddate: "",
          creator: "",
          ingredients: "",
          instructions: "",
          category: "",
          mealName: ""
	  	}

	}

}
