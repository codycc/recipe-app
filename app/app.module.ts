import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 

import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

@NgModule({
    imports: [ BrowserModule, JsonpModule, HttpModule ],
    declarations: [ AppComponent, CardComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }