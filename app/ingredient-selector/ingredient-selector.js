"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var IngredientSelector = (function () {
    function IngredientSelector() {
        this.select = new core_1.EventEmitter();
        this.ingredients = ["Onion", "Oil", "Rice", "Egg", "Soy Sauce", "Sesame Oil", "Chicken",
            "Carrot", "Peas", "Masa", "Water", "Queso Fresco", "Butter", "Salt", "Pepper",
            "Potato", "Flour", "Beets", "Celery", "Cabbage", "Vinegar", "Tomato", "Milk",
            "Sugar", "Baking Powder", "Baking Soda", "Garlic", "Chickpeas", "Tahini", "Hot Sauce", "Tomato Sauce",
            "Corn Tortillas", "Cheddar Cheese", "Olives", "White Wine", "Chicken Stock", "Parmesan Cheese"];
    }
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], IngredientSelector.prototype, "select", void 0);
    IngredientSelector = __decorate([
        core_1.Component({
            selector: 'ingredient-selector',
            template: "\n    <select class=\"form-control\" (change)=\"select.emit($event.target.value)\">\n        <option>Select Ingredients</option>\n            <option *ngFor=\" let ingredient of ingredients\">\n                {{ingredient}}\n            </option>\n    </select>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], IngredientSelector);
    return IngredientSelector;
}());
exports.IngredientSelector = IngredientSelector;
//# sourceMappingURL=ingredient-selector.js.map