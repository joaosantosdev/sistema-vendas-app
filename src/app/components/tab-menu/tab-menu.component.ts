import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.scss'],
})
export class TabMenuComponent implements OnInit {
  public items = [
    {
      name: 'Home',
      icon:'home-sharp',
      active: true
    },
    {
      name: 'Carrinho',
      icon:'cart-sharp'
    },
    {
      name: 'Perfil',
      icon:'person-sharp'
    }
  ];
  constructor() { }

  ngOnInit() {}

}
