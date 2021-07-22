import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginCred } from 'src/app/models/loginCred';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  submitted = false;
  isLogin!: boolean;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.minLength(8),
      Validators.maxLength(20),
      Validators.required,
    ]),
  });
  getEmail(): AbstractControl {
    return this.loginForm.get('email')!;
  }
  getPassword(): AbstractControl {
    return this.loginForm.get('password')!;
  }

  async onLogin() {
    try {
      const data = await this.authService.onSubmitLogin(
        this.loginForm.value as LoginCred
      );
      console.log(this.loginForm.value.email);
      if (this.dataService.getGymData()) {
        this.router.navigateByUrl('/product/id');
      }
      if (data.message == 'success') {
        this.dataService.setLoginInfo(this.loginForm.value.email);
        this.loginForm.reset();
        const redirect =
          this.activatedRoute.snapshot.queryParamMap.get('redirect');
        if (redirect) {
          this.router.navigateByUrl(redirect);
          return;
        }
        // console.log('login successful ', this.loginForm.value.email);
        this.router.navigateByUrl('/user');
      }
    } catch (err) {
      console.error(err);
    }
  }
}
