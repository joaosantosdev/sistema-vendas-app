import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'input-content',
  templateUrl: './input-content.component.html',
  styleUrls: ['./input-content.component.scss'],
})
export class InputContentComponent implements OnInit {

  @Input() public required: boolean;
  @Input() public label: string;
  @Input() public control;

  constructor() {
  }

  ngOnInit() {
  }

}
