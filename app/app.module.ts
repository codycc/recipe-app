import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { IngredientFilter } from './pipes/ingredient-filter.pipe';
import { IngredientSelector } from "./ingredient-selector/ingredient-selector";

@NgModule({
    imports: [ BrowserModule, HttpModule ],
    declarations: [ AppComponent, IngredientFilter, IngredientSelector],
    bootstrap: [ AppComponent ]
})

export class AppModule { }