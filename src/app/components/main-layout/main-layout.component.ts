import { Component } from '@angular/core';
import {Avatar} from "primeng/avatar";
import {Menu} from "primeng/menu";
import {MenuItem} from 'primeng/api';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [
    Avatar,
    Menu,
    RouterOutlet
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  menuItems: MenuItem[] = [
    { label: 'Super Admin', icon: 'pi pi pi-wrench', routerLink: 'superadmin' },
    { label: 'Create user', icon: 'pi pi-user', routerLink: 'users/create' },
    { label: 'Profile', icon: 'pi pi-user', routerLink: 'profile' },
  ];

}
