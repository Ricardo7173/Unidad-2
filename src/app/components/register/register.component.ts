import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  email: string; //Captura de email
  password: string; //Captura de password
  confirmPassword: string;

  constructor(private _login: LoginService) {
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }

  register() {
    //Función para evento clic
    console.log('Email: ' + this.email);
    console.log('Password: ' + this.password);
    console.log('Confirm Password: ' + this.confirmPassword);
    if (this.password == this.confirmPassword) {
      const user = {
        email: this.email,
        password: this.confirmPassword,
      };
      this._login.registerUser(user).subscribe((data) => {
        console.log(data);
      });
    } else {
      console.warn('La contraseña no coincide');
    }
  }
}
