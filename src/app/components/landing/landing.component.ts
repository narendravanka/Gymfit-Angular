import { Component, OnInit } from '@angular/core';
import { gymSchema } from 'src/app/models/gymSchema';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  gyms: gymSchema[] = [];
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getGyms().subscribe((data) => (this.gyms = data));
  }
}
