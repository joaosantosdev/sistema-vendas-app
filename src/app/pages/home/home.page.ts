import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {CategoryDTO} from '../../models/CategoryDTO';
import {UrlUtil} from "../../utils/url.util";
import {StorageUtil} from "../../utils/storage.util";
import {ClientDTO} from "../../models/ClientDTO";
import {ClientService} from "../../services/ClientService";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public categories: CategoryDTO[];
  public errorImageUser = false;
  public client: ClientDTO;

  constructor(
    private categoryService: CategoryService,
    private clientService: ClientService
  ) {
  }

  ngOnInit() {
    this.categoryService.getAll().subscribe((response) => {
      this.categories = response;
    });
    this.clientService.getByEmail(StorageUtil.getEmail()).subscribe(response => {
      this.client = response;
    }, error => {

    });
  }

  get urlImageClient() {
    return !this.errorImageUser ? UrlUtil.getImage(`cp${StorageUtil.getUser().id}`) : 'assets/imgs/user.png';
  }

  onErrorImage() {
    this.errorImageUser = true;
  }
}
