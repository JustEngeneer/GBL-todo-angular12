import { LoginComponent }       from './components/login/login.component';
import { TodoListComponent }    from './components/todo-list/todo-list.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '',          component: LoginComponent},
  {path: 'todo-list', component: TodoListComponent},
  {path: '**',        component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
}
