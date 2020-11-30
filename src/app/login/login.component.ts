import { Component, Renderer2, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService } from '../_services/index';

@Component({
  selector: 'app',
  templateUrl: 'app/login/login.component.html',
  styleUrls: [
    'vendor/bootstrap/css/bootstrap.min.css',
    'fonts/login/font-awesome-4.7.0/css/font-awesome.min.css',
    'fonts/login/iconic/css/material-design-iconic-font.min.css',
    'vendor/animate/animate.css',
    'vendor/css-hamburgers/hamburgers.min.css',
    'vendor/animsition/css/animsition.min.css',
    'vendor/select2/select2.min.css',
    'vendor/daterangepicker/daterangepicker.css',
    'css/login/util.css',
    'css/login/main.css'
  ]
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private renderer2: Renderer2,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    @Inject(DOCUMENT) private _document: Document
  ) {
  }

  ngOnInit() {
    var arr = [
      'vendor/jquery/jquery-3.2.1.min.js',
      'vendor/animsition/js/animsition.min.js',
      'vendor/bootstrap/js/popper.js',
      'vendor/bootstrap/js/bootstrap.min.js',
      'vendor/select2/select2.min.js',
      'vendor/daterangepicker/moment.min.js',
      'vendor/daterangepicker/daterangepicker.js',
      'vendor/countdowntime/countdowntime.js',
      'js/login/main.js',
    ];
    var s = []
    for (let i = 0; i < arr.length; i++) {
      s[i] = this.renderer2.createElement('script');
      s[i].type = 'text/javascript';
      s[i].src = arr[i];
      s[i].text = ``;
      this.renderer2.appendChild(this._document.body, s[i]);
    }

    //reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    // const s1 = this.renderer2.createElement('script');
    // s1.type = 'text/javascript';
    // s1.src = 'js/login/main.js';
    // s1.text = ``;
    // this.renderer2.appendChild(this._document.body, s1);
  }

  login() {
    console.log(this.model);
    this.authenticationService.login(this.model.username, this.model.pass)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error);
        }
      )
  }
}
