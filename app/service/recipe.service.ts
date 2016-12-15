import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';

import { Recipe } from '../model/recipe';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class RecipeService {
    constructor(private http: Http) {} 


    getRecipeData():Observable<any> {
        this.http.get('./app/recipes.json')
        .map(res => res.json())
        .catch(err => {
                console.error("Unabale to get weather data - ", err);
                return Observable.throw(err.json())
        });
    }

}