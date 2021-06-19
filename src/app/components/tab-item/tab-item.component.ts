import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.scss'],
})
export class TabItemComponent implements OnInit {

  @Input() public item;
  @Output() public onclick = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  click() {
    this.onclick.emit(this.item);
  }
}
