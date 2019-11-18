import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  golferName: any;
  password: any;
  mouseoverLogin: any;
  constructor(private authService: AuthService , private router: Router) {

  }
  ngOnInit() {
  }
  login(formValues: any) {
      this.authService.loginGolfer(formValues.golferName, formValues.password);
      this.router.navigate(['tournaments']);
  }
  cancel() {
      this.router.navigate(['tournaments']);
  }

}

/*
<h1>Login</h1>
<hr>
<div class="col-md-4">
  <form #loginForm="ngForm" (ngSubmit)="login(loginForm.value)" autocomplete="off" novalidate>
    <div class="form-group" >
      <label for="golferName">Golfer Name:</label>
      <em *ngIf="loginForm.controls.golferName?.invalid && (loginForm.controls.golferName?.touched || mouseoverLogin)">Required</em>
      <input (ngModel)="golferName" type="text" name= "golferName" required class="form-control" placeholder="Golfer Name..." />
    </div>
    <div class="form-group" >
      <label for="password">Password:</label>
      <em *ngIf="loginForm.controls.password?.invalid && (loginForm.controls.password?.touched || mouseoverLogin)">Required</em>
      <input (ngModel)="password" name="password" type="password" required class="form-control"placeholder="Password..." />
    </div>
    <span (mouseenter)="mouseoverLogin=true" (mouseleave)="mouseoverLogin=false">
    <button type="submit" [disabled]="loginForm.invalid" class="btn btn-primary">Login</button>
  </span>
    <button type="button" (click)="cancel()" class="btn btn-default">Cancel</button>
  </form>
</div>
*/
