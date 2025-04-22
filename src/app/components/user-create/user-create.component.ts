import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {User} from '../../models/user.model';
import {Calendar} from 'primeng/calendar';
import {ButtonDirective} from 'primeng/button';
import {InputText} from 'primeng/inputtext';
import {Card} from 'primeng/card';
import {MessageService} from 'primeng/api';
import {Password} from 'primeng/password';

@Component({
  selector: 'app-user-create',
  imports: [
    ReactiveFormsModule,
    Calendar,
    ButtonDirective,
    InputText,
    Card,
    Password,
  ],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent implements OnInit{
  user!: User;
  userForm!: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder, private messageService: MessageService) {

  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: [''],
      postalCode: [''],
      city: [''],
      country: [''],
      phoneNumber: [''],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: [null],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submit(){
    console.log(this.userForm.value);
    this.user = this.userForm.value;
    this.userService.createUser(this.user).subscribe({
      next: (user) => {
        console.log('User created successfully', user);

        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: user.userName + ' créé avec succès',
        });

        this.userForm.reset();
      },
      error: (error) => {
        console.error('Error creating user', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Erreur lors de la création de l\'utilisateur',
        });
      }
    });
  }
}
