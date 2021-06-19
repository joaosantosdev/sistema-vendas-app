import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.scss'],
})
export class TabMenuComponent implements OnInit {
  public items = [
    {
      id: 1,
      name: 'Home',
      icon: 'home-sharp',
      active: true,
      path: 'app/home'
    },
    {
      id: 2,
      name: 'Carrinho',
      icon: 'cart-sharp'
    },
    {
      id: 3,
      name: 'Perfil',
      icon: 'person-sharp',
      path: 'app/profile'

    }
  ];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  clickItem(item): void {
    this.items = this.items.map(i => {
      i.active = false;
      if (i.id === item.id) {
        i.active = true;
      }
      return i;
    });

    this.router.navigate([item.path]);
  }
}
