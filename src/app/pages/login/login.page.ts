import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginDTO} from '../../models/LoginDTO';
import {AuthService} from '../../services/auth.service';
import {StorageUtil} from '../../utils/storage.util';
import {ClientService} from '../../services/client.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: LoginDTO = {
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authService: AuthService,
    private clientService: ClientService
  ) {
    if (StorageUtil.getToken()) {
      this.router.navigate(['app/home']);
    }
  }

  ngOnInit() {

  }

  login() {
    console.log(this.loginForm);
    this.authService.login(this.loginForm).subscribe(response => {
      this.authService.successfulLogin(response.headers.get('Authorization'));
      this.clientService.getByEmail(this.loginForm.email).subscribe(client => {
        StorageUtil.setEmail(this.loginForm.email);
        StorageUtil.setUser(client);
        this.router.navigate(['app/home']);
      });
    }, error => {
    });
  }

  signup() {
    this.router.navigate(['signup']);
  }

}
