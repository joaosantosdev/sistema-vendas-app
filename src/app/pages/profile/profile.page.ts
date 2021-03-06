import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../services/client.service';
import {ClientDTO} from '../../models/ClientDTO';
import {StorageUtil} from '../../utils/storage.util';
import {UrlUtil} from '../../utils/url.util';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public client: ClientDTO;
  public errorImage = false;

  constructor(
    private clientService: ClientService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.clientService.getByEmail(StorageUtil.getEmail()).subscribe(response => {
      this.client = response;
    }, error => {

    });
  }


  get urlImageClient() {
    return this.client && !this.errorImage ? UrlUtil.getImage(`cp${this.client.id}`) : 'assets/imgs/user.png';
  }

  onErrorImage() {
    this.errorImage = true;
  }

  logout() {
    StorageUtil.cleanToken();
    this.router.navigate(['']);
  }
}
