import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ''
})
export class LoginComponent implements OnInit {
  register = false;
  errorMsg = '';
  isUserAuthenticated = false;
  userEmail = '';
  loginForm : FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });    
  }

  ngOnInit() {
    // Verifica se o usuário está logado ao inicializar o componente
    this.isUserAuthenticated = this.authService.isAuthenticated();
    if (this.isUserAuthenticated) {
      this.userEmail = this.authService.user.value.email;
    }
  }

  alterarParaCadastro(modo: boolean) {
    this.register = modo;
  }

  onSubmit() {
    const email = this.loginForm.value.email;
    const senha = this.loginForm.value.senha;

    if (!this.register) {
      this.authService.login(email, senha).subscribe(
        (resData) => {
          this.errorMsg = '';
          this.isUserAuthenticated = true;
          this.userEmail = email;
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.authService.cadastrarUser(email, senha).subscribe(
        (resData) => {
          this.errorMsg = '';
          this.isUserAuthenticated = true;
          this.userEmail = email;
          this.router.navigate(['/']);
        },
        (error) => {
          if (error.error.error.message === 'EMAIL_EXISTS') {
            this.errorMsg = 'E-mail já cadastrado';
          } else {
            this.errorMsg = 'Erro desconhecido';
          }
        }
      );
    }
  }

  onLogout() {
    this.authService.logout();
    this.isUserAuthenticated = false;
    this.userEmail = '';
  }
}