import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor( private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,) {}

  ngOnInit(): void {
    
    this.formLogin = this.fb.group({
      nome: ['', Validators.required],
      senha: ['', Validators.required],
    });

  }
  onSubmit() {

    const { nome, senha } = this.formLogin.value;

    this.loginService.login(nome, senha).subscribe({
      next: (response) => {
        this.router.navigate(['/welcome']);
      },
      error: (error) => {
        console.error('Login failed', error);
      },
    });
  }
  
}
