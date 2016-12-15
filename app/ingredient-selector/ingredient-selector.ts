import { Component, Output, EventEmitter } from "@angular/core"; 

@Component ({
    selector: 'ingredient-selector',
    template: `
    <select class="form-control" (change)="select.emit($event.target.value)">
        <option>Select Ingredients</option>
        <option *ngFor=" let ingredient of ingredients">
        {{ingredient}}
        </option>
    </select>
    `
})
export class IngredientSelector {
    @Output() select = new EventEmitter();
    ingredients = ["Onion", "Oil", "Rice", "Egg", "Soy Sauce","Sesame Oil","Chicken",
     "Carrot", "Peas", "Masa", "Water", "Queso Fresco","Butter","Salt", "Pepper",
    "Potato", "Flour", "Beets","Celery",  "Cabbage", "Vinegar","Tomato","Milk",
    "Sugar", "Baking Powder", "Baking Soda","Garlic","Chickpeas","Tahini", "Hot Sauce","Tomato Sauce",
    "Corn Tortillas", "Cheddar Cheese", "Olives","White Wine","Chicken Stock","Parmesan Cheese"];
}