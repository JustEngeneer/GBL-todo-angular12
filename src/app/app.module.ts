import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }         from './app.component';
import { LoginComponent }       from './components/login/login.component';
import { TodoListComponent }    from './components/todo-list/todo-list.component';
import { AddItemComponent }     from './components/add-item/add-item.component';
import { ItemComponent }        from './components/item/item.component';
import { ItemsFiltersComponent } from './components/items-filters/items-filters.component';
import { FooterComponent }      from './components/footer/footer.component';
import { ModalDialogRemoveComponent } from './components/modal-dialog-remove/modal-dialog-remove.component';
import { ModalDialogEditComponent } from './components/modal-dialog-edit/modal-dialog-edit.component';

import { AppRoutingModule }     from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';

import { StorageService }         from './services/storage.service';
import { ItemService }            from './services/item.service';
import { FilterItemsPipe }        from './pipes/filter-items.pipe';
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
    ItemsFiltersComponent,
    ItemComponent,
    FooterComponent,
    FilterItemsPipe,
    ModalDialogRemoveComponent,
    ModalDialogEditComponent
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
    StorageService,
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
