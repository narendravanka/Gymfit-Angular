import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LandingComponent } from './components/landing/landing.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ClubComponent } from './components/club/club.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { GymsCardComponent } from './components/gyms-card/gyms-card.component';
import { ProductComponent } from './components/product/product.component';
import { CommonModule } from '@angular/common';
import {
  OrderSuccessComponent,
  PlaceorderComponent,
} from './components/placeorder/placeorder.component';
import { MenuWrapperComponent } from './components/menu-wrapper/menu-wrapper.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    LandingComponent,
    ForgotPasswordComponent,
    ClubComponent,
    SearchComponent,
    GymsCardComponent,
    ProductComponent,
    PlaceorderComponent,
    MenuWrapperComponent,
    ToDoComponent,
    PageNotFoundComponent,
    OrderSuccessComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [LandingComponent],
})
export class AppModule {}
