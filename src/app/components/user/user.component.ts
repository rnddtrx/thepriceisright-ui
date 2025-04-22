import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {AuthenticationService} from '../../services/authentication.service';
import {User} from '../../models/user.model';
import {UserEntityProfileDto} from '../../models/user-profile.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  constructor(private authenticationService : AuthenticationService) {
  }

  user! : UserEntityProfileDto | null;

  ngOnInit(): void {
    this.user = this.authenticationService.getUser();
  }



}
