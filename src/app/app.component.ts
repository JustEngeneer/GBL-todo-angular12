import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent implements OnInit{
  title = 'todo';

  constructor(
    private taskSvc: TaskService
  ) {
  }

  ngOnInit(): void{
    //  Подписываемся на изменение тудушек. 
    //  Каздый раз, когда данные будут обновляться, сработает subscribe callback
    //  после вызова next в сервисе
    this.taskSvc.todos.subscribe(
      (data) => {
      console.log(data);
      }
    )
  }
}
