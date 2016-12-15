import { Component } from '@angular/core';
import { Recipe } from './model/recipe';
import { Http } from '@angular/http';
import { RecipeService } from './service/recipe.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [RecipeService]
})

export class AppComponent { 
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
          },
    }
}