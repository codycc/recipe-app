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
    @Input() status;
   constructor(private http: Http) {};
   recipesArray : Recipe[] = [];

    ngOnInit() {
       this.getRecipes(); 
    }
    getRecipes() {
        this.http.get('./app/recipes.json')
        .map(res => res.json())
        .subscribe(recipes => {
             for (var i = 0; i < recipes.length; i++) {
                let recipe = recipes[i]
                console.log(recipe)
                let newRecipe = new Recipe(recipe["name"],recipe["type"],recipe["cook_time"],recipe["ingredients"]);
                this.recipesArray.push(newRecipe);
                console.log("here is recipe",newRecipe)
            }
          })
    }
}