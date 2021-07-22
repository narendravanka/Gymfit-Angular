import { Component, OnInit } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router) {}
  profileName: string | undefined;
  ngOnInit(): void {
    if (this.dataService.loginInfo.email) {
      this.dataService.getLoginInfoSub().subscribe((data: any) => {
        if (data.email) {
          this.profileName = data.email.split('@')[0];
        } else {
          this.router.navigateByUrl('/login');
        }
      });
    }
  }
}
