import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  private user: User;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.user = new User();
  }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.user).subscribe(
      (data) => {
          if (data.result) {
            console.log('Authentifié !!');
            this.router.navigate(['/produits']);
          } else {
            console.log('Problème lors de l\'authentification');
          }
      }
    );
  }

}
