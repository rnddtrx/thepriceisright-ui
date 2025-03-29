import { Component } from '@angular/core';
import {InputText} from 'primeng/inputtext';
import {PasswordDirective} from 'primeng/password';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonDirective} from 'primeng/button';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    InputText,
    PasswordDirective,
    DropdownModule,
    ButtonDirective,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: string = '';
  password: string = '';
  selectedRole: string = '';
  roles: string[] = ['Admin', 'Joueur', 'Spectateur'];

  onLogin() {
    console.log('Login:', this.login);
    console.log('Mot de passe:', this.password);
    console.log('Rôle:', this.selectedRole);
    // Ici tu peux appeler un service pour l'authentification
  }
}
