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
var recipe_1 = require('./model/recipe');
var http_1 = require('@angular/http');
var recipe_service_1 = require('./service/recipe.service');
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.recipesArray = [];
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
        this.getRecipes();
    };
    AppComponent.prototype.getRecipes = function () {
        var _this = this;
        this.http.get('./app/recipes.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (recipes) {
            for (var i = 0; i < recipes.length; i++) {
                var recipe = recipes[i];
                console.log(recipe);
                var newRecipe = new recipe_1.Recipe(recipe["name"], recipe["type"], recipe["cook_time"], recipe["ingredients"]);
                _this.recipesArray.push(newRecipe);
                console.log("here is recipe", newRecipe);
            }
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
            providers: [recipe_service_1.RecipeService]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map