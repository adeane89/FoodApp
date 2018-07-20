import { Injectable } from '@angular/core';
import { FavoritesModel } from './favorites-model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor() { }
        favorites: FavoritesModel = {
        totalquantity: 0,
        items: []
    };
}
