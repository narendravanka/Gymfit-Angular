import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { UserLandingComponent } from './components/user-landing/user-landing.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MenuWrapperComponent } from './components/menu-wrapper/menu-wrapper.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { GymsCardComponent } from './components/gyms-card/gyms-card.component';

@NgModule({
  declarations: [
    ProfileComponent,
    UserLandingComponent,
    MenuWrapperComponent,
    GymsCardComponent,
  ],
  imports: [
    UserRoutingModule,
    MatCardModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [],
})
export class UserModule {}
