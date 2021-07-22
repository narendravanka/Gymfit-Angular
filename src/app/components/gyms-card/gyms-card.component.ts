import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { gymSchema } from 'src/app/models/gymSchema';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-gyms-card',
  templateUrl: './gyms-card.component.html',
  styleUrls: ['./gyms-card.component.scss'],
})
export class GymsCardComponent {
  @Input()
  gym?: gymSchema;
  isLoggedin: boolean = false;
  constructor(private dataService: DataService, private router: Router) {}
  onGymSelect() {
    this.dataService.setGymData(this.gym as gymSchema);
  }
}
