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
var core_1 = require('@angular/core');
var IngredientFilter = (function () {
    function IngredientFilter() {
    }
    // will take ingredient as an argument, iterate through recipe.ingredients and return the recipes where they match
    IngredientFilter.prototype.transform = function (value, args) {
        var ingredient = args;
        if (value == null) {
        }
        else {
            return value.filter(function (recipe) {
                console.log("here is recipe name", recipe.name);
                console.log("here is recipe ingredient", ingredient);
                var i = 0;
                for (i = 0; i < recipe.ingredients.length; i++) {
                    if (recipe.ingredients[i] == ingredient) {
                        return recipe;
                    }
                }
            });
        }
    };
    IngredientFilter = __decorate([
        core_1.Pipe({
            name: 'ingredientfilter',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], IngredientFilter);
    return IngredientFilter;
}());
exports.IngredientFilter = IngredientFilter;
//# sourceMappingURL=ingredient-filter.pipe.js.map