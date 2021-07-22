import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(25),
    ]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.minLength(6),
      Validators.maxLength(20),
      Validators.required,
      Validators.nullValidator,
    ]),
    rePassword: new FormControl('', [
      Validators.minLength(6),
      Validators.maxLength(20),
      Validators.nullValidator,
      Validators.required,
    ]),
    mobile: new FormControl('', [
      Validators.maxLength(10),
      Validators.minLength(10),
    ]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  get username(): AbstractControl {
    return this.registerForm.get('username')!;
  }
  get email(): AbstractControl {
    return this.registerForm.get('email')!;
  }
  get password(): AbstractControl {
    return this.registerForm.get('password')!;
  }
  get rePassword(): AbstractControl {
    return this.registerForm.get('rePassword')!;
  }
  get mobile(): AbstractControl {
    return this.registerForm.get('mobile')!;
  }

  async onRegister() {
    var formObject = this.registerForm.value;
    delete formObject.rePassword;
    this.authService
      .onSubmitRegister(formObject)
      .then(
        (data) => {
          console.log(data.message);
          this.registerForm.reset({});
          if (data.message == 'success') {
            this.router.navigateByUrl('/login');
            return;
          }
          console.log('register data cannot error');
        },
        (data) => {
          console.error(data.message);
        }
      )
      .catch((err) => {
        console.error(err);
      });
  }
}
