import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { gymSchema } from 'src/app/models/gymSchema';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-gyms-card',
  templateUrl: './gyms-card.component.html',
  styleUrls: ['./gyms-card.component.scss'],
})
export class GymsCardComponent implements OnInit {
  @Input()
  gym?: gymSchema;
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {}
  onGymSelect() {
    this.dataService.setGymData(this.gym as gymSchema);
  }
}
