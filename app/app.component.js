"use strict";var __decorate=this&&this.__decorate||function(e,t,r,o){var n,p=arguments.length,i=p<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(i=(p<3?n(i):p>3?n(t,r,i):n(t,r))||i);return p>3&&i&&Object.defineProperty(t,r,i),i},core_1=require("@angular/core"),recipe_1=require("./model/recipe");require("rxjs/add/operator/catch"),require("rxjs/add/operator/map");var AppComponent=function(){function e(e){this.http=e,this.recipesArray=[]}return e.prototype.ngOnInit=function(){this.getRecipes()},e.prototype.getRecipes=function(){var e=this;this.http.get("./app/recipes.json").map(function(e){return e.json()}).subscribe(function(t){for(var r=0;r<t.length;r++){var o=t[r],n=new recipe_1.Recipe(o.name,o.type,o.cook_time,o.ingredients);e.recipesArray.push(n)}})},e}();__decorate([core_1.Input()],AppComponent.prototype,"ingredient",void 0),AppComponent=__decorate([core_1.Component({moduleId:module.id,selector:"my-app",templateUrl:"app.component.html",styleUrls:["app.component.css"]})],AppComponent),exports.AppComponent=AppComponent;