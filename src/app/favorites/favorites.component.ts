import { Component, OnInit } from '@angular/core';
import { FavoritesModel } from '../favorites-model';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
    favorites: FavoritesModel;
  constructor(private favoritesService: FavoritesService) { }

  ngOnInit() {
      this.favorites = this.favoritesService.favorites;
  }

}
