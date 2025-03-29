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
    { label: 'Dashboard', icon: 'pi pi-home' },
    { label: 'Settings', icon: 'pi pi-cog' },
    { label: 'Profile', icon: 'pi pi-user' }
  ];

}
