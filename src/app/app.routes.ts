import { Routes } from '@angular/router';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {HomeComponent} from './components/home/home.component';
import {MainLayoutComponent} from './components/main-layout/main-layout.component';
import {LoginComponent} from './components/login/login.component';
import {ProductListComponent} from './components/product-list/product-list.component';

export const routes: Routes = [
    {
      path: 'app',
      component: MainLayoutComponent,
      children: [
        { path: '', component: HomeComponent },
        { path: 'home', redirectTo: '', pathMatch: 'full' },
        { path: 'product', component: ProductListComponent },
        //{ path: 'product/details/:id', component: ProductListComponent}
      ]
    },
    { path: '', component: LoginComponent },
    { path: '**', component: NotFoundComponent }
];
