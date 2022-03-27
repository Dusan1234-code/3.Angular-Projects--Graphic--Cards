import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-page-sizing',
  templateUrl: './page-sizing.component.html',
  styleUrls: ['./page-sizing.component.css'],
})
export class PageSizingComponent implements OnInit {
  @Input()
  page: number = 1;

  @Input()
  pageSize: number = 5;

  @Input()
  collectionSize: number = 0;

  @Output()
  emmiter: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  changePageSize(value: number) {
    this.emmiter.emit(value);
  }
}
