import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubComponent } from './components/club/club.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PlaceorderComponent } from './components/placeorder/placeorder.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { ProfileComponent } from './user/components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'products/:id',
    component: ProductComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  {
    path: 'club',
    component: ClubComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'placeorder/:id',
    component: PlaceorderComponent,
  },
  {
    path: 'to-do',
    component: ToDoComponent,
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then((route) => route.UserModule),
  },
  {
    path: '404',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
