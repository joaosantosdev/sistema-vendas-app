import {Component, Input, OnInit} from '@angular/core';
import {CategoryDTO} from '../../models/CategoryDTO';

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.scss'],
})
export class CategoryItemsComponent implements OnInit {

  @Input() public categories: CategoryDTO[];

  constructor() {
  }

  ngOnInit() {
  }

}
