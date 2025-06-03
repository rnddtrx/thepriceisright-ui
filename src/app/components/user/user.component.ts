import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {AuthenticationService} from '../../services/authentication.service';
import {User} from '../../models/user.model';
import {UserEntityProfileDto} from '../../models/user-profile.model';
import {SafeUrl} from '@angular/platform-browser';
import {Card} from 'primeng/card';
import {DatePipe, NgIf} from '@angular/common';
import {PrimeTemplate} from 'primeng/api';

@Component({
  selector: 'app-user',
  imports: [
    Card,
    DatePipe,
    PrimeTemplate,
    NgIf
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  constructor(private authenticationService : AuthenticationService) {
  }

  user : UserEntityProfileDto | undefined | null;
  profileImageUrl: string | undefined;

  ngOnInit(): void {
    this.user = this.authenticationService.getUser();
    this.authenticationService.getProfilePicture().subscribe(url => {
      console.log(url);
      this.profileImageUrl = url;
    })
  }



}
