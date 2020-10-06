import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from "rxjs";
import { NgForm } from "@angular/forms";
import { first } from 'rxjs/operators';

import { LoginAuthService } from '../../services/login-auth.service';
import { AlertService } from '../../services/alert.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoading = false;
  private authStatusSub: Subscription;
  type1= "password";
  show1 = false;
  class1="fa fa-eye-slash "
  loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginauthService: LoginAuthService,
    private alertService: AlertService
  ) { }
 

  // ngOnInit(): void {
  //   this.loginForm = this.formBuilder.group({
  //     mobile_number: ['', Validators.required],
  //     password: ['', Validators.required]
  // }
  // this.authStatusSub = this.loginauthService.getAuthStatusListener().subscribe(
  //   authStatus => {
  //     this.isLoading = false;
  //   }
  // );
  
  // );
  // // reset login status
  // this.loginauthService.logout();

  // // get return url from route parameters or default to '/'
  // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  // }


  ngOnInit() {
    this.authStatusSub = this.loginauthService.getAuthStatusListener().subscribe(
      authStatus => {
        this.isLoading = false;
      }
    );
  }

  async onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.loginauthService.login(form.value.mobile_number, form.value.password);
    this.router.navigate(['/home']);
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }


}
