import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [] // якщо масив пустий то можна його не додавати сюди
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

    //Коментарі бажано писати на англійській мові.

    this.taskSvc.todos.subscribe( //Незрозуміло для чого ми підписуємся на цей стрім.
      (data) => {
      console.log(data);
      }
    )
  }
}
