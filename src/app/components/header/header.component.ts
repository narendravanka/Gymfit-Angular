import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  email!: string;
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    const data = this.dataService.getLoginInfo();
    if (data) {
      this.dataService.setLoginInfo(data);
      this.email = data;
    }
    this.dataService.getLoginInfoSub().subscribe((loginInfo: any) => {
      if (loginInfo.email) {
        this.email = loginInfo.email.split('@')[0];
      }
    });
  }
  onSignOut() {
    this.email = '';
    this.dataService.setLoginInfo('');
    this.router.navigateByUrl('/login');
  }
}
