import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { SignUpService } from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  maxLength = {
    firstName: 10,
    lastName: 10
  }

  constructor( private signUpService: SignUpService ) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        this.noWhitespaceValidator()]),
      lastName: new FormControl('', [
        Validators.required,
        this.noWhitespaceValidator()]),
      email: new FormControl(''),
      phoneNumber: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    });
  }

  createAccount() {
    if (this.signUpForm.valid) {
      const signUpFormData: any = new FormData();
      signUpFormData.append('first_name', this.signUpForm.get('firstName').value);
      signUpFormData.append('last_name', this.signUpForm.get('lastName').value);
      signUpFormData.append('email', this.signUpForm.get('email').value);
      signUpFormData.append('phone_no', this.signUpForm.get('phoneNumber').value);
      signUpFormData.append('password', this.signUpForm.get('password').value);
      signUpFormData.append('confirm_password', this.signUpForm.get('confirmPassword').value);
      this.signUpService.registerUser(signUpFormData).subscribe((data) => {
        console.log("success");
        console.log(data);
      });;
    }
  }

  private noWhitespaceValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      let value = control.value;
      const isWhitespace = (value || '').trim().length === 0;
      const isValid = !isWhitespace;
      return isValid ? null : { whitespace: true };
    };
  }
}
