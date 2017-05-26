import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() page: number = 0;
  @Input() total: number = 0;
  @Output() pageChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  pagePrecedente() {
    this.pageChanged.emit(this.page - 1);
  }

  pageSuivante() {
    this.pageChanged.emit(this.page + 1);
  }

}
