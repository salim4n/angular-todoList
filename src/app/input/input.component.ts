import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  todo = '';
  @Output()todoEvent = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
  }

  addTodo() {
    if(this.todo.length > 0){
      this.todoEvent.emit(this.todo);
      this.todo='';
    }
  }
}
