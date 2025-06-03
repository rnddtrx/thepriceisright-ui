import { Routes } from '@angular/router';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {HomeComponent} from './components/home/home.component';
import {MainLayoutComponent} from './components/main-layout/main-layout.component';
import {LoginComponent} from './components/login/login.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {SuperAdminComponent} from './components/super-admin/super-admin.component';
import {UserComponent} from './components/user/user.component';
import {UserCreateComponent} from './components/user-create/user-create.component';
import {adminGuard} from './guards/admin.guard';
import {UnauthorizedComponent} from './components/unauthorized/unauthorized.component';
import {authGuard} from './guards/auth.guard';

export const routes: Routes = [
    {
      path: 'app',
      component: MainLayoutComponent,
      canActivate: [authGuard],
      children: [
        { path: '', component: HomeComponent },
        { path: 'home', redirectTo: '', pathMatch: 'full' },
        {
          path: 'products/page/:page/rows/:rows',
          component: ProductListComponent
        },
        {
          path: 'products',
          redirectTo: 'products/page/0/rows/10',
          pathMatch: 'full'
        },
        {
          path: 'users/create',
          component: UserCreateComponent
        },
        { path: 'product/details/:id', component: ProductDetailsComponent},
        { path: 'superadmin', component: SuperAdminComponent, canActivate:[adminGuard] },
        { path: 'profile', component : UserComponent}
      ]
    },
    { path: 'unauthorized', component: UnauthorizedComponent },
    { path: '', component: LoginComponent },
    { path: '**', component: NotFoundComponent },

];
