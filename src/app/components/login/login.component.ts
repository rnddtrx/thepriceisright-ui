import {Component, OnInit} from '@angular/core';
import {InputText} from 'primeng/inputtext';
import {PasswordDirective} from 'primeng/password';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonDirective} from 'primeng/button';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserEntityProfileDto} from '../../models/user-profile.model';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {JwtTokenResponse} from '../../models/jwt-token-response.model';

@Component({
  selector: 'app-login',
  imports: [
    InputText,
    PasswordDirective,
    DropdownModule,
    ButtonDirective,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  roles = [
    { label: 'Admin', value: 'ADMIN' },
    { label: 'Utilisateur', value: 'USER' }
  ];


  constructor(private authenticationService: AuthenticationService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
      role: ['']
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password, role } = this.loginForm.value;
      this.authenticationService.authenticate(username, password, role).subscribe({
        next: (token: JwtTokenResponse) => {
          console.log(token);
          this.authenticationService.setUser(token).subscribe(() => {
            console.log("User logged in successfully");
            this.router.navigate(['app']);
          });
        },
        error: (error) => {
          console.error('Authentication failed', error);
        }
      });
    }
  }


}
