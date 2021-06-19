import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {CategoryDTO} from '../../models/CategoryDTO';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public categories: CategoryDTO[];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categoryService.getAll().subscribe((response) => {
      this.categories = response;
    });
  }

}
