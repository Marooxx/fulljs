// Modules d'angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Modules persos
import { UserRoutingModule } from './user-routing.module';

// Components persos
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    UserRoutingModule
  ],
  declarations: [UserRegisterComponent, UserLoginComponent]
})
export class UserModule { }
