import { Routes } from '@angular/router';
import {LoginComponent} from './access/login/LoginComponent';
import {LandingPageComponent} from './access/landing-page/LandingPageComponent';
import {PostsComponent} from './access/posts/PostsComponent';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingPageComponent },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'post-list', component: PostsComponent },
];
