import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss',
    'login-animation.component.scss'
  ]
})
export class LoginComponent implements OnInit {
  showingPage: string = 'account-page';

  constructor() { }

  ngOnInit(): void {
  }

  toggleView(): void {
    this.showingPage = this.showingPage == 'login-page' ? 'account-page' : 'login-page';
  }
}
