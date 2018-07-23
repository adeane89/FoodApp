import { Component, OnInit } from '@angular/core';
import { FavoritesModel } from '../favorites-model';
import { FavoritesItemModel } from '../favorites-item-model';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    favorites: FavoritesModel;
  constructor(private favoritesService: FavoritesService) { }

  ngOnInit() {
      this.favorites = this.favoritesService.favorites;
  }
}
