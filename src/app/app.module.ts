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
import { MW_RemoveComponent }   from './components/mw-remove/mw-remove.component';
import { MW_EditComponent }     from './components/mw-edit/mw-edit.component';

import { AppRoutingModule }     from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';

import { ModelService }         from './services/model.service';
import { TaskService }          from './services/task.service';
import { FilterItemsPipe }        from './pipes/filter-items.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [ // Ці роути мають бути в app-routing.module.ts
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
    FooterComponent,
    FilterItemsPipe,
    MW_RemoveComponent, // незрозуміла назва для компоненту. Неправильна назва по style guide angular
    MW_EditComponent // https://angular.io/guide/styleguide
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule, // неправильно використовується цей модуль. Розберися як працює масив exports в модулях.
    RouterModule.forRoot(appRoutes), // Цей імпорт можна взагалі видалити так як ми його експортим в app-routing.module.ts
    BrowserAnimationsModule
  ],
  providers: [
    ModelService,
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
