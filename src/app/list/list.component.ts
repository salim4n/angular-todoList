import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

 @Output()deleteEvent = new EventEmitter();
 @Input() todos: string[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  deleteTodo(index : number) {
    this.deleteEvent.emit(index);

  }
}
