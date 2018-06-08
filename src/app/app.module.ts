// Modules d'angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules persos
import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './products/product.module';
import { UserModule } from './users/user.module';

// Components persos
import { AppComponent } from './app.component';
import { Error404Component } from './errors/error404/error404.component';


@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    ProductModule,
    UserModule,
    AppRoutingModule // ce module de routage doit être chargé après les autres modules de routage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
