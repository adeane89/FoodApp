import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor() { }
        favorites: FavoritesModel = {
        totalquantity: 0,
        items: []
    }
}
