import {Component} from '@angular/core';
import {
    Validators,
    FormBuilder,
    FormControl, FormGroup
} from '@angular/forms';


function hasExclamationMark (input: FormControl) {
    const hasExclamation = input.value.indexOf('!') >= 0;
    return hasExclamation ? null : { needsExclamation: true };
}



@Component({
    selector: 'login-form',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class LoginForm {
    loginForm: FormGroup;
    firstname: FormControl;
    lastname: FormControl;
    internship: FormControl;
    company: FormControl;
    requires: FormControl;
    skills: FormControl;
    opportunities: FormControl;
    username: FormControl;
    password: FormControl;

    constructor (builder: FormBuilder) {
        this.firstname = new FormControl('',[
            Validators.required
        ]);
        this.lastname = new FormControl('',[
            Validators.required
        ]);

        this.internship = new FormControl('',[
            Validators.required
        ]);
        this.company = new FormControl('',[
            Validators.required
        ]);
        this.requires = new FormControl('',[
            Validators.required,
            Validators.maxLength(1000)
        ]);
        this.skills = new FormControl('',[
            Validators.required
        ]);
        this.opportunities = new FormControl('',[
            Validators.required
        ]);


        this.username = new FormControl('', [
            Validators.required,
            Validators.minLength(5)
        ]);
        this.password = new FormControl('', [Validators.required, hasExclamationMark]);
        this.loginForm = builder.group({
            firstname: this.firstname,
            lastname: this.lastname,
            internship: this.internship,
            company: this.company,
            requires: this.requires,
            skills: this.skills,
            opportunities: this.opportunities,
            username: this.username,
            password: this.password
        });
    }

    login () {
        console.log(this.loginForm.value);
        // Attempt Logging in...
    }
}



