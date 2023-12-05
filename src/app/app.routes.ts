import {Routes} from '@angular/router';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {CartPageComponent} from "./pages/cart-page/cart-page.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'cart',
    component: CartPageComponent
  }
];
