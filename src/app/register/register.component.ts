import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private fromBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) {  
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('',[Validators.required]);
  name = new FormControl('',[Validators.required]);
  
  getErrorMessage() {
    if(this.email.hasError('required')){
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit() {
    this.authService.registerUser({name: this.name.value, email: this.email.value, password:this.password.value})
      .subscribe({
        next: (data) => {
          if(data.success === true) {
          console.log(data);
          this.router.navigateByUrl('/login');
          }
          else {
            console.log(data);
          }
        }
      })
  }

  ngOnInit(): void {
    }
  }

