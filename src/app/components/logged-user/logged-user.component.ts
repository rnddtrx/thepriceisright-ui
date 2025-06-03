import {Component, Input, ViewChild} from '@angular/core';
import {ContextMenu} from 'primeng/contextmenu';
import {MenuItem} from 'primeng/api';
import {Avatar} from 'primeng/avatar';

@Component({
  selector: 'app-logged-user',
  imports: [ContextMenu, Avatar],
  templateUrl: './logged-user.component.html',
  styleUrl: './logged-user.component.css',
})
export class LoggedUserComponent {
  @Input() profileImageUrl: string = '';
  @Input() firstName: string = '';
  @Input() lastName: string = '';
  @Input() role: string = '';

  @ViewChild('menu') contextMenu!: ContextMenu;

  menuItems: MenuItem[] = [
    {
      label: 'Profile',
      icon: 'pi pi-user',
      command: () => this.viewProfile()
    },
    {
      label: 'Logout',
      icon: 'pi pi-sign-out',
      command: () => this.logout()
    }
  ];

  viewProfile() {
    console.log('Go to profile');
    // Navigate to profile route or emit event
  }

  logout() {
    console.log('Log out');
    // Handle logout logic here
  }

  openMenu(event: MouseEvent) {
    this.contextMenu.show(event);
  }
}
