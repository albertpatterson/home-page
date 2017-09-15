import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

// import {SignInComponent} from './signIn/sign-in.component';
import { SocialMediaAppComponent } from './socialMedia/app.component';
import { LogInComponent } from './socialMedia/logIn/log-in.component';
import { NotFoundComponent } from './socialMedia/not-found.component';
import { MemberComponent } from './socialMedia/member/member.component';

import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
    {path: '', redirectTo: 'homePage', pathMatch: 'full'},
    {path: 'homePage', component: HomePageComponent},
    {   path: 'socialMedia',
        component: SocialMediaAppComponent,
        children: [{path: 'member/:ownName', component: MemberComponent},
            {path: 'sign-in', component: LogInComponent},
            {path: '', redirectTo: 'sign-in', pathMatch: 'full'},
            { path: '**', component: NotFoundComponent }]
    }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {};