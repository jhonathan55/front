import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'products', component: ProductComponent },
  { path: 'user', component: UserComponent },
  { path: 'home', component: HomeComponent},
  { path: '**', redirectTo: 'home' },
];
