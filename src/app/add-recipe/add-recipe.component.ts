import { Component, OnInit, Input } from '@angular/core';
import { AddRecipeModel } from '../add-recipe-model';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
    newRecipe: AddRecipeModel;
    addRecipe;

  constructor() { }

  ngOnInit() {

	  this.newRecipe = {
          id: -1,
          creator: '',
          ingredients: '',
          instructions: '',
          category: '',
          mealName: ''
	  }
  }

	submitClicked(){
		if(!this.addRecipe){
        this.addRecipe = [];
		}
        this.addRecipe.push(this.newRecipe);
        this.ngOnInit();
	  	}
	}

