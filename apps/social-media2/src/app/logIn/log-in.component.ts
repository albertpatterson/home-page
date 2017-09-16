import {Component} from '@angular/core';
import { Router } from '@angular/router';

/**
 * Component showing the log-in and sign-up forms, which routes the user to their home page after signing in
 * 
 * @export
 * @class LogInComponent
 */
@Component({
    selector: "log-in",
    templateUrl: "./log-in.component.html",
    styleUrls:  ["./log-in.component.css"]
})
export class LogInComponent{

    constructor(
        private router: Router
    ){}

    // navigate the user to their home page
    goHome(username: string){
        console.log("go home "+username)
        this.router.navigate(["member", username]);
    }
}