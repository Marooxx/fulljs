// Modules d'angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components persos
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductViewShowComponent } from './products/product-view-show/product-view-show.component';
import { Error404Component } from './errors/error404/error404.component';

// On définit les routes
const routes: Routes = [
  { path: 'produits', component: ProductListComponent},
  { path: 'produits/ajout', component: ProductAddComponent},
  { path: 'produits/detail/:id', component: ProductViewShowComponent },
  { path: 'error-404', component: Error404Component},
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
