import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpModule } from '@angular/http';

import {SocialMediaAppRoutingModule} from './app-routing.module';

import {MemberModule} from './member/member.module';


import { SocialMediaAppComponent }  from './app.component';
import { NotFoundComponent }  from './not-found.component';
// import { SignInComponent } from './signIn/sign-in.component';
import { LogInComponent } from './logIn/log-in.component';
import { SignInComponent } from './logIn/signIn/sign-in.component';
import { SignUpComponent } from './logIn/signUp/sign-up.component';


import {AuthService} from './services/auth.service'
import {SignUpService} from './services/sign-up.service'

// import { AuthService } from './services/mock_auth.service';


@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  MemberModule,
                  HttpModule,
                  RouterModule
                   ],

  declarations: [ SocialMediaAppComponent,
                  NotFoundComponent,
                  LogInComponent,
                  SignInComponent,
                  SignUpComponent ],

  providers: [  AuthService,
                SignUpService ]
})
export class SocialMediaAppModule { }
