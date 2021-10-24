import { Component, OnInit } from '@angular/core';
import { LandingComponent } from 'src/app/components/landing/landing.component';
import { gymSchema } from 'src/app/models/gymSchema';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-user-landing',
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.scss'],
})
export class UserLandingComponent implements OnInit {
  pic1 = 'http://localhost:9000/static/asserts/images/pic1.jpg';
  pic2 = 'http://localhost:9000/static/asserts/images/pic2.jpeg';

  gyms: gymSchema[] = [];
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getGyms().subscribe((data ) => (this.gyms = data));
  }
}
