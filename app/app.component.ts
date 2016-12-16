import { Component, Input} from '@angular/core';
import { Recipe } from './model/recipe';
import { Http } from '@angular/http';
import { IngredientFilter } from './pipes/ingredient-filter.pipe';
import { IngredientSelector } from "./ingredient-selector/ingredient-selector";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent { 
    @Input() ingredient;
    // create instance of Http for request
   constructor(private http: Http) {};
    // array where recipes will be appended to when parsing JSON, array is used in html template to display recipes results
   recipesArray : Recipe[] = [];
   // Grab recipes from JSON file on initialization
    ngOnInit() {
       this.getRecipes(); 
    }
    // http call to JSON file
    getRecipes() {
        this.http.get('./app/recipes.json')
        .map(res => res.json())
        .subscribe(recipes => {
            // for every recipe create a new recipe instance from the recipe Model imported above, then push instance into the array above
             for (var i = 0; i < recipes.length; i++) {
                let recipe = recipes[i]
                console.log(recipe)
                let newRecipe = new Recipe(recipe["name"],recipe["type"],recipe["cook_time"],recipe["ingredients"]);
                this.recipesArray.push(newRecipe);
                console.log("here is recipe",newRecipe)
            }
          });
    }
}