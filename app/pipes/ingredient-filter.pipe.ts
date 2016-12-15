import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name: 'ingredientfilter',
    pure: false
})

export class IngredientFilter implements PipeTransform {
    transform(value, args?){
         let ingredient = args;
        if (value==null) {

        } else {
         return value.filter(recipe => {
             console.log("here is recipe name",recipe.name)
             console.log("here is recipe ingredient", ingredient)
             var i = 0;
            for (i = 0; i < recipe.ingredients.length; i++) {     
            if (recipe.ingredients[i] == ingredient) {
              return recipe
            } 
            }
         })
        }
    }
}