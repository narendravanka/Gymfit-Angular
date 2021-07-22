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
  email: string | null = null;
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getLoginInfoSub().subscribe((loginInfo: any) => {
      if (loginInfo.email) this.email = loginInfo.email.split('@')[0];
    });
  }
  onSignOut() {
    this.email = null;
    this.dataService.setLoginInfo(null);
    this.router.navigateByUrl('/login');
  }
}
