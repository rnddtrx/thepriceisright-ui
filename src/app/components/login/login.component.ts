import {Component, OnInit} from '@angular/core';
import {InputText} from 'primeng/inputtext';
import {PasswordDirective} from 'primeng/password';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonDirective} from 'primeng/button';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserEntityProfileDto} from '../../models/user-profile.model';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

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
    { label: 'Admin', value: 'admin' },
    { label: 'Utilisateur', value: 'user' }
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
      const { username, password } = this.loginForm.value;
      this.authenticationService.authenticate(username, password).subscribe({
        next: (user: UserEntityProfileDto) => {
          console.log(user);
          this.authenticationService.setUser(user);
          void this.router.navigate(['app/home']);
        },
        error: (error) => {
          console.error('Authentication failed', error);
        }
      });
    }
  }


}
