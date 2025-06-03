import {Component, OnInit} from '@angular/core';
import {Avatar} from "primeng/avatar";
import {Menu} from "primeng/menu";
import {MenuItem} from 'primeng/api';
import {Router, RouterOutlet} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {UserService} from '../../services/user.service';
import {LoggedUserComponent} from '../logged-user/logged-user.component';
import {UserEntityProfileDto} from '../../models/user-profile.model';

@Component({
  selector: 'app-main-layout',
  imports: [
    Menu,
    RouterOutlet,
    LoggedUserComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent implements OnInit {
  menuItems: MenuItem[] | undefined;
  protected profileImageUrl!: string;
  protected user!: UserEntityProfileDto;
  protected role!: string;

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.authenticationService.getProfilePicture().subscribe(url => {
      this.user = this.authenticationService.getUser();
      this.role = this.authenticationService.getRole();
      this.profileImageUrl = url;
    });

    this.menuItems = [
      {
        label: 'Super Admin',
        icon: 'pi pi pi-wrench',
        routerLink: 'superadmin',
        visible: this.authenticationService.hasRole('ADMIN')
      },
      {
        label: 'Create user',
        icon: 'pi pi-user',
        routerLink: 'users/create'
      },
      {
        label: 'Profile',
        icon: 'pi pi-user',
        routerLink: 'profile'
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        command: () => this.logout()
      },
    ];
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['']);
  }


}
