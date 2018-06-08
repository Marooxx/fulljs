// Modules d'angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components persos
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';

// Définition des routes
const routesUser: Routes = [
  { path: 'inscription', component: UserRegisterComponent },
  { path: 'connexion', component: UserLoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routesUser)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
