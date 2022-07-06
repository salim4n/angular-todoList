import {Component, OnInit} from '@angular/core';
import {parseJson} from "@angular/cli/src/utilities/json-file";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    const todos = JSON.parse(localStorage.getItem('todos')||'[]');
    this.todos = todos;
  }
  title = 'angular-todoList';
  todos = ['Learn Angular', 'Learn TypeScript', 'Learn JavaScript'];


  addToList(todo : string){
    this.todos.push(todo);
    console.log(this.todos);
    this.saveTodos();
  }


  deleteFromlist(index: number) {
    this.todos.splice(index, 1);
    this.saveTodos();
  }

  saveTodos(){
    localStorage.setItem('todos',JSON.stringify(this.todos));
  }


}
