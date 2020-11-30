import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }    from '@angular/forms';

import { AppComponent }  from './app.component';
import { LoginComponent } from './login/index';
import { NotFoundComponent } from './notfound/index';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/index';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
// import { HomeComponent } from './home/index';
// import { RegisterComponent } from './register/index';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), HttpModule, FormsModule ],
  declarations: [ AppComponent, LoginComponent, NotFoundComponent, AlertComponent, HomeComponent ],
  providers: [ AuthGuard, AlertService, AuthenticationService, UserService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
