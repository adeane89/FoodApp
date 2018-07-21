import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MealComponent } from './meal/meal.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FilterPipe } from './filter.pipe';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TabsComponent } from './tabs/tabs.component';

const appRoutes: Routes= [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home/:id', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'favorites', component: FavoritesComponent},
    {path: 'addRecipe', component: AddRecipeComponent},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MealComponent,
    NavbarComponent,
    NotFoundComponent,
    FavoritesComponent,
    FilterPipe,
    AddRecipeComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
      Ng2SearchPipeModule,
      FormsModule,
      RouterModule.forRoot(
		  appRoutes,
      		{ enableTracing: false } // <-- debugging purposes only
	  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
