import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private router: Router  
  ) {}
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('',[Validators.required]);
  getErrorMessage() {
    if(this.email.hasError('required')){
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit() {
    this.authService.loginUser({email: this.email.value, password: this.password.value}).subscribe(
       data => {
        if(data.success === true) {
          console.log(data);
          localStorage.setItem('token',data.token);
          this.router.navigateByUrl('/dashboard');
        }
        else {
          console.log(data);
        }
      
    })
  }

}
