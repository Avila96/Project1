import { Observable } from 'rxjs';
import { LoginAuthService } from './../../services/login-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `.angular-logo {
        margin: 0 4px 3px 0;
        height: 35px;
        vertical-align: middle;
    }
    .fill-remaining-space {
      flex: 1 1 auto;
    }
    `
  ]
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;                  // {1}

  constructor(private loginauthService: LoginAuthService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.loginauthService.isLoggedIn; // {2}
  }

  onLogout(){
    this.loginauthService.logout();                      // {3}
  }
}