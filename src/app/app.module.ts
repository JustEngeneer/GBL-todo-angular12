import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }         from './app.component';
import { LoginComponent }       from './components/login/login.component';
import { TodoListComponent }    from './components/todo-list/todo-list.component';
import { AddItemComponent }     from './components/add-item/add-item.component';
import { ItemFiltersComponent } from './components/item-filters/item-filters.component';
import { ItemComponent }        from './components/item/item.component';
import { FooterComponent }      from './components/footer/footer.component';

import { AppRoutingModule }     from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';

import { ModelService }         from './services/model.service';
import { TaskService }          from './services/task.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {path: '',          component: LoginComponent},
  {path: 'todo-list', component: TodoListComponent},
  {path: '**',        component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoListComponent,
    AddItemComponent,
    ItemFiltersComponent,
    ItemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [
    ModelService,
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
