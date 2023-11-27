import {EventEmitter , Injectable} from '@angular/core';
import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Lomo Saltado','Peruvian Beef Stiry Fry',
        'https://littlespicejar.com/wp-content/uploads/2020/07/Lomo-Saltado-Peruvian-Stir-Fry-7-1024x1536.jpg',
        [new Ingredient('Beef',1),
         new Ingredient('French Fries',1)]),
        new Recipe('Easy Pasta Alfredo','Creamy, comforting, absolutely delicious','https://cravinghomecooked.com/wp-content/uploads/2018/08/alfredo-pasta-1-5.jpg',[
          new Ingredient('Pasta',1),
          new Ingredient ('Parmesan Cheese', 3)
        ])
      ];

      constructor(private slService: ShoppingListService){}

      getRecipes(){
        return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
      }

}