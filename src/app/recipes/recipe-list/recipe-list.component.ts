import {Component} from "@angular/core";
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.html']

})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is just a test.',
      'https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_960_720.png'),
    new Recipe('A Test Recipe', 'This is just a test.',
      'https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_960_720.png')
  ];
}
