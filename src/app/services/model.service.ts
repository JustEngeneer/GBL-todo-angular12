import {Injectable} from "@angular/core";

@Injectable() // Цей сервіс є глобальним, тому краще зроби його singleton

// @Injectable({providedIn: 'root'}) // тепер сервіс не треба провайдити і він буде доступним для всіх модулів

export class ModelService { // Назва сервісу не відповідає його функціям. Краще назвати StorageService
  storage: any = window.localStorage;
  readonly Key: string = 'ITEMS';

  constructor() {

  }

  save(data: any) {
    let dataStr = JSON.stringify(data);
    this.storage.setItem(this.Key, dataStr);
  }

  load() {
    let dataStr = this.storage.getItem(this.Key);
    return dataStr ? JSON.parse(dataStr) : [];
  }


}
