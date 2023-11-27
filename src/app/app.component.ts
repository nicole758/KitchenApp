import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kitchenApp';
  loadedFeature = 'recipe';

  onNavigate(feature:string){
    this.loadedFeature = feature;


  }
  // showRecipes:boolean;
  // showShoppingList:boolean;

  // recipesChanged(status){
  //   this.showRecipes = status;
  //   this.showShoppingList = false;
  // }

  // shoppingChanged(status){
  //   this.showShoppingList = status;
  //   this.showRecipes = false;

  // }

  
}
